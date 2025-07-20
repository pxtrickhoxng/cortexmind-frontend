# CortexMind 🧠

CortexMind is a full-stack AI-powered chat application that simulates the functionality of modern large language model (LLM) platforms like ChatGPT and DeepSeek. Built from the ground up, this project demonstrates practical full-stack development skills including real-time streaming, authentication, external API integration, and structured data persistence.

---

## 📌 Project Summary

- **Frontend:** React, Tailwind CSS, Zustand
- **Backend:** Express.js, Node.js
- **Database:** PostgreSQL
- **Authentication:** Auth0
- **AI Integration:** DeepSeek LLM API
- **Features:** Real-time message streaming, user account linking, secure chat history storage

---

## 🧠 Key Features

- 🔹 **Real-Time AI Chat**  
  Integrates with DeepSeek's `deepseek-chat` model to stream conversational responses incrementally.

- 🔹 **Responsive UI**  
  Built with React and Tailwind CSS, featuring a sleek, adaptive chat interface.

- 🔹 **User Authentication**  
  Secure login and session handling powered by Auth0, with chat history tied to user accounts.

- 🔹 **Persistent Storage**  
  All messages and sessions are stored in PostgreSQL and retrieved securely.

---

## ⚙️ How It Works

1. Users log in through Auth0.
2. Frontend sends prompts to the backend.
3. Backend communicates with DeepSeek’s API and streams responses in real-time.
4. Messages are stored in a PostgreSQL database and retrieved per session.

---

## 🧪 What I Learned

- Building real-time, stream-based chat UX with async handlers
- Managing auth workflows across frontend and backend
- Structuring scalable database schemas for user-generated content
- Handling full-stack API integrations (LLM, Auth0, database)

---

## ⚠️ Note

This is a personal project created for portfolio and learning purposes. It is not intended for production use and may lack enterprise-level security or scaling features.

