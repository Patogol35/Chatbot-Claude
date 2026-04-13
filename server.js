import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Anthropic from "@anthropic-ai/sdk";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// 🔍 DEBUG: verificar API Key
console.log("API KEY cargada:", process.env.ANTHROPIC_API_KEY ? "✅ Sí" : "❌ No");
// Inicializar cliente
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
// Ruta base
app.get("/", (req, res) => {
  res.send("Backend funcionando 🚀");
});
// Ruta chat
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;
    // Validación
    if (!message) {
      return res.status(400).json({ error: "Falta el mensaje" });
    }
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 300,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });
    res.json({
      reply: response.content[0].text,
    });
  } catch (error) {
    console.error("ERROR REAL:", error);
    res.status(500).json({
      error: error.message || "Error en el servidor",
    });
  }
});
// Servidor
app.listen(3001, () => {
  console.log("Servidor corriendo en http://localhost:3001");
});