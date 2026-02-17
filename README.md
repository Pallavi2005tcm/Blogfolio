# 📝 BlogFolio — MERN Blog Platform

BlogFolio is a full-stack blog platform built using the MERN stack that allows users to read articles and engage through a moderated commenting system. It includes role-based authentication and AI-powered content generation to improve publishing efficiency.

---

## 🚀 Features

✅ Read and explore blog articles
✅ Comment on blogs with moderation control
✅ Admin approval system for comments
✅ Role-based authentication & authorization
✅ Secure login & user management
✅ AI-powered blog content generation
✅ Clean and responsive UI

---

## 🔐 Role-Based Access

### 👤 Users

* View blogs
* Post comments
* Engage with content

### 🛠 Admin

* Publish blogs
* Approver/reject comments before public visibility
* Manage platform content

---

## 🤖 AI Content Generation

Integrated **Google Gemini API** to assist with:

* Generating blog drafts
* Improving writing quality
* Enhacing publishing efficiency

---

## 🧰 Tech Stack

### Frontend

* React.js
* Redux Toolkit
* Tailwind CSS

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### Authentication

* JWT (JSON Web Tokens)

### AI Integration

* Google Gemini API

---

## 📁 Project Structure

```
BlogFolio/
│
├── client/      → React frontend
├── server/      → Node & Express backend
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/blogfolio.git
cd blogfolio
```

### 2️⃣ Install dependencies

#### Backend

```
cd server
npm install
```

#### Frontend

```
cd client
npm install
```

---

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the **server** folder:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_api_key
```

---

### 4️⃣ Run the application

#### Start backend

```
cd server
npm start
```

#### Start frontend

```
cd client
npm run dev
```

---

## 🌐 Deployment

The project can be deployed using:

* Frontend: Vercel / Netlify
* Backend: Render / Railway
* Database: MongoDB Atlas

---

## 🎯 Future Improvements

* Rich text editor for blogs
* User profiles & dashboards
* Likes & bookmarks
* Dark mode

---

## 👩‍💻 Author

**Pallavi Singh**
B.Tech Information Technology Student
Aspiring Full-Stack Developer

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
