🤖 Chatbot Backend con Claude AI

Backend de chatbot inteligente desarrollado con Node.js y Express, que utiliza la API de Claude (Anthropic) para generar respuestas conversacionales con contexto.

---

✨ Características principales

- Conversación con memoria por usuario
- Integración con IA (Claude 3 Haiku)
- API REST rápida y ligera con Express
- Validaciones básicas de entrada
- Arquitectura modular (controllers, services, utils)


---

Importante:

Debes crearte una cuenta en Anthropic y generar tu propia API Key.
Ten en cuenta que el uso de la API requiere saldo o suscripción.

---

⚙️ Instalación

1. Clona el repositorio:

```bash

git clone https://github.com/Patogol35/Chatbot-Cloude

```

2. Ingresa a la carpeta del proyecto:

```bash
cd Chatbot-Cloude

```

3. Instala dependencias:

```bash

npm install

```

4. Crea un archivo ".env" en la raíz y pon la API de Anthropic:

```bash

ANTHROPIC_API_KEY=tu_api_key_aqui

```

5. Inicia el servidor:

   
```bash

node server.js

```

6. Servidor corriendo en:

http://localhost:3001

---

📡 Endpoints

🔹 GET /

URL: http://localhost:3001/

Descripción:

Verifica que el servidor esté activo.

Método: GET
Respuesta (200 OK):

JSON
{
  "message": "Backend funcionando"
}

🔹 POST /chat

URL: http://localhost:3001/chat

Descripción:

Envía un mensaje al chatbot y recibe una respuesta generada por la IA.

Método: POST

Headers:

Content-Type: application/json

Body (raw → JSON):

JSON
{
  "message": "Hola",
  "userId": "123"
}

Respuesta (200 OK):

JSON
{
  "reply": "Hola, ¿en qué puedo ayudarte?"
}

Ejemplo en Postman

Selecciona método POST

Ingresa la URL: http://localhost:3001/chat

Ve a Body → raw → JSON

Pega el JSON:

JSON
{
  "message": "Hola",
  "userId": "123"
}

Envía la petición 

---

🧠 Cómo funciona

1. El usuario envía un mensaje
2. Se guarda en memoria (por userId)
3. Se obtiene el historial de conversación
4. Se envía a Claude AI
5. Se devuelve la respuesta generada
6. Se guarda la respuesta en memoria

---

⚙️ Tecnologías utilizadas

- Node.js
- Express
- Claude AI (Anthropic API)
- dotenv
- cors

---

🚀 Mejoras futuras

- 🔄 Persistencia con base de datos (MySQL o MongoDB)
- 🔐 Autenticación con JWT
- 📊 Logs y monitoreo
- 🌐 Integración con frontend
- ⚡ Rate limiting

---

👨‍💻 Autor Jorge Patricio Santamaría Cherrez

Máster en Ingeniería de Software y Sistemas Informáticos

---

📄 Licencia

ISC
