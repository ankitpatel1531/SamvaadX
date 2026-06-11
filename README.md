# 💬 SamvaadX - Real-Time Chat Application

SamvaadX is a modern full-stack real-time chat application built using the MERN Stack. It allows users to register, authenticate securely, see online users, and exchange messages instantly using Socket.IO.

The project demonstrates full-stack development concepts including authentication, REST APIs, state management, database integration, and real-time communication.

---

## 🚀 Features

### 🔐 Authentication
- User Registration (Sign Up)
- User Login
- JWT Authentication
- Password Hashing using Bcrypt
- Protected Routes
- Persistent User Sessions

### 💬 Real-Time Chat
- One-to-One Messaging
- Instant Message Delivery
- Socket.IO Integration
- Real-Time Updates
- Online User Status

### 👥 User Management
- View Available Users
- Search Users
- User Avatars
- Active User Tracking

### 🎨 Modern User Interface
- Responsive Design
- Clean Dark Theme
- User-Friendly Navigation
- Mobile-Friendly Layout

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
- Bcrypt.js
- Socket.IO

---

## 📂 Project Structure

```bash
SamvaadX/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── assets/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   └── server.js
│
└── README.md
```

---

## 📸 Screenshots

### 🔐 Login Page

Secure login page with email and password authentication.

![Login Page](https://github.com/ankitpatel1531/SamvaadX/blob/main/login%20page.png?raw=true)

---

### 📝 Signup Page

New users can create an account with validation support.

![Signup Page](https://github.com/ankitpatel1531/SamvaadX/blob/main/signup%20page.png?raw=true)

---

### 💬 Chat Dashboard

Real-time chat interface displaying online users and instant messaging.

![Dashboard](https://github.com/ankitpatel1531/SamvaadX/blob/main/dashboard.png?raw=true)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ankitpatel1531/SamvaadX.git
cd SamvaadX
```

---

### 2️⃣ Backend Setup

Navigate to backend folder:

```bash
cd server
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=4000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
VITE_BASE_URL=http://localhost:4000/api/v1
```

Run frontend:

```bash
npm run dev
```

---

## 🌐 API Endpoints

### Authentication

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/v1/signup | Register User |
| POST | /api/v1/login | Login User |

### Messaging

| Method | Endpoint | Description |
|----------|----------|-------------|
| POST | /api/v1/message | Send Message |
| GET | /api/v1/messages/:userId | Fetch Messages |

---

## 🔒 Security Features

- JWT Authentication
- Password Hashing with Bcrypt
- Protected API Routes
- Environment Variables
- Secure User Sessions

---

## 🎯 Learning Outcomes

This project helped in understanding:

- MERN Stack Development
- REST API Development
- MongoDB Database Design
- JWT Authentication
- Redux Toolkit State Management
- Socket.IO Real-Time Communication
- Frontend Routing
- Backend Architecture
- Full-Stack Project Deployment

---

## 🚀 Run Locally

### Backend

```bash
cd server
npm install
npm run dev
```

Backend URL:

```bash
http://localhost:4000
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

Frontend URL:

```bash
http://localhost:5173
```

---

## 🔮 Future Enhancements

- Group Chats
- Typing Indicator
- Read Receipts
- Message Reactions
- Dark / Light Theme Toggle
- Voice Messages
- Video Calling
- File Sharing
- Push Notifications

---

## 👨‍💻 Author

### Ankit Patel

- MERN Stack Developer
- React & Node.js Enthusiast
- Passionate About Full-Stack Development

GitHub:
https://github.com/ankitpatel1531

---

## ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🚀 Contribute to the project

---

## 📄 License

This project is licensed under the MIT License.

---

### Made with ❤️ using MERN Stack & Socket.IO
