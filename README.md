🍡 MochiDS

Full-stack Dessert Store · Supabase · React · Node.js

MochiDS is a modern full-stack web application for browsing, managing, and selling Japanese-style mochi and other Asian desserts.
The platform includes real-time data sync, product management, secure authentication, and an intuitive shopping experience.

🌟 Overview

MochiDS delivers a smooth e-commerce experience built with a fully decoupled architecture:

A React + Vite frontend for a fast and elegant UI.

A Supabase backend handling authentication, storage, and a PostgreSQL database.

Real-time updates for product creation, edits, and deletions.

Full CRUD system for managing desserts, pricing, photos, and availability.

Secure API routes and role-based logic.

It’s designed to be lightweight, scalable, and easy to maintain.

✨ Features
🛍️ Product Catalog

Browse desserts with images, descriptions, and pricing.

Filter by category and availability.

Smooth animations with Framer Motion.

🧑‍🍳 Admin Panel

Add, edit, or delete products.

Upload dessert images directly to Supabase Storage.

Live preview of changes.

🔐 Authentication

Email/password sign-in with Supabase Auth.

Protected admin areas.

⚡ Real-Time Updates

Automatic UI refresh when products are updated.

No page reload needed.

📱 Responsive Design

Fully optimized for desktop, tablet, and mobile.

🧱 Tech Stack
Frontend

React (Vite)

React Router

TailwindCSS

Framer Motion

Axios

Backend

Supabase (PostgreSQL + Auth + Storage)

Supabase Policies (RLS)

API Hooks for CRUD logic

Dev Tools

ESLint + Prettier

Vite hot-reload

GitHub version control



📂 Folder Structure


MochiDS/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── styles/
│   └── public/
└── backend/ (Supabase)
    ├── tables.sql
    ├── storage/
    ├── policies/
    └── functions/



🚀 How to Run Locally
1️⃣ Clone the repo

git clone https://github.com/zmetreveli/MochiDS
cd MochiDS


2️⃣ Install frontend dependencies
cd frontend
npm install
npm run dev

3️⃣ Configure Supabase

Create a .env file inside /frontend:

VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key

4️⃣ Run the app
npm run dev

🗄️ Database Schema (Supabase)
products

| column      | type        | description           |
| ----------- | ----------- | --------------------- |
| id          | uuid        | Primary Key           |
| name        | text        | Dessert name          |
| description | text        | Details               |
| price       | numeric     | Product price         |
| image_url   | text        | Supabase storage path |
| created_at  | timestamptz | Auto timestamp        |

🧪 Future Improvements

🛒 Shopping cart system

⭐ Ratings & reviews

🌐 Multi-language support

💳 Payment integration (Stripe)

🧑‍💻 Author

Zurab Metreveli
Full-Stack Developer — React · Node.js · C · Supabase
📍 Based in Barcelona
🔗 GitHub: https://github.com/zmetreveli

📜 License

MIT License
