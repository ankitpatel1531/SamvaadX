# 💬 SamvaadX - Real-Time Chat Application

SamvaadX is a full-stack real-time chat application built using the MERN stack. It enables users to register, authenticate securely, and exchange messages instantly using Socket.IO.

---

## 🚀 Features

### Authentication
- User Registration (Signup)
- User Login
- JWT Authentication
- Password Hashing using Bcrypt
- Protected Routes

### Real-Time Messaging
- One-to-One Chat
- Instant Message Delivery
- Socket.IO Integration
- Online User Tracking

### User Management
- View Available Users
- Dynamic Profile Avatars
- User Search & Selection

### Modern Frontend
- React 19
- Redux Toolkit State Management
- React Router
- Responsive UI
- Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- Socket.IO Client
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Socket.IO

---

## 📂 Project Structure

```bash
SamvaadX/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── Pages/
│   ├── redux/
│   └── assets/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── socket/
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/SamvaadX.git
cd SamvaadX
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

Run Backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

Open another terminal:

```bash
cd client
npm install
```

Create `.env` file:

```env
VITE_BASE_URL=http://localhost:4000/api/v1
```

Run Frontend:

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /api/v1/signup | Register User |
| POST | /api/v1/login | Login User |

### Messages

| Method | Endpoint | Description |
|----------|------------|-------------|
| POST | /api/v1/message | Send Message |
| GET | /api/v1/messages/:chatUserId | Get Messages |

---

## 🔒 Security Features

- JWT Authentication
- Password Encryption with Bcrypt
- Protected API Routes
- Environment Variables Support

---

## 📸 Screenshots

Add screenshots here after deployment.

### Login Page
![Login](screenshots/login.png)

### Signup Page
![Signup](screenshots/signup.png)

### Chat Interface
![Chat](screenshots/chat.png)

---

## 🎯 Future Enhancements

- Group Chats
- Message Notifications
- Typing Indicators
- Voice Messages
- Video Calling
- Read Receipts
- Dark Mode
- File Sharing

---

## 👨‍💻 Author

**AP**

- MERN Stack Developer
- React & Node.js Enthusiast

---

## ⭐ Support

If you like this project:

- Star the repository ⭐
- Fork the repository 🍴
- Contribute to the project 🚀

---

## 📄 License

This project is licensed under the MIT License.
