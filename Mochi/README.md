# 🍡 MochiDS

### **Full-Stack Dessert Store · React + Supabase**

MochiDS is a modern full-stack web app designed to manage and showcase
Japanese mochi and Asian-style desserts.\
It features a fast React frontend, a Supabase-powered backend, real-time
updates, and an intuitive admin dashboard for product management.

------------------------------------------------------------------------

## 🌈 Preview

> 🖼️ *(Add screenshots or GIFs here if needed.)*

------------------------------------------------------------------------

# 📌 Features

### 🍡 **Dessert Catalog**

-   Beautiful product grid with images, prices, and descriptions\
-   Fast filtering and smooth animations\
-   Fully responsive on all devices

### 🧑‍🍳 **Admin Dashboard**

-   Create / edit / delete desserts\
-   Upload images directly to Supabase Storage\
-   Instant UI updates (no refresh needed)

### 🔐 **Authentication**

-   Secure login with Supabase Auth\
-   Protected admin routes

### ⚡ **Real-Time Sync**

-   Automatic refresh when products change\
-   Great UX for admins & customers

------------------------------------------------------------------------

# 🧱 Tech Stack

### **Frontend**

-   React (Vite)
-   TailwindCSS
-   React Router
-   Framer Motion

### **Backend**

-   Supabase
    -   PostgreSQL\
    -   Row Level Security (RLS)\
    -   Auth\
    -   Storage

### **Tools**

-   ESLint + Prettier\
-   GitHub\
-   Vercel / Netlify

------------------------------------------------------------------------

# 📂 Project Structure

    MochiDS/
    ├── frontend/
    │   ├── public/
    │   └── src/
    │       ├── components/
    │       ├── pages/
    │       ├── hooks/
    │       ├── utils/
    │       └── styles/
    └── backend/ (Supabase)
        ├── tables.sql
        ├── storage/
        ├── policies/
        └── functions/

------------------------------------------------------------------------

# 🚀 Getting Started

### 1️⃣ Clone the repository

``` bash
git clone https://github.com/zmetreveli/MochiDS
cd MochiDS
```

### 2️⃣ Install dependencies

``` bash
cd frontend
npm install
```

### 3️⃣ Create a `.env` file

    VITE_SUPABASE_URL=your_url
    VITE_SUPABASE_ANON_KEY=your_key

### 4️⃣ Run the project

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🗄️ Database Schema

### **products**

  Field         Type          Description
  ------------- ------------- ---------------------
  id            uuid          Primary key
  name          text          Dessert name
  description   text          Details
  price         numeric       Price in EUR
  image_url     text          Supabase image path
  created_at    timestamptz   Timestamp (auto)

------------------------------------------------------------------------

# 🎯 Roadmap

-   🛒 Add shopping cart\
-   💳 Stripe payments\
-   ⭐ Reviews & ratings\
-   🗺️ Localization (ES/EN/GE)\
-   📦 Admin order management

------------------------------------------------------------------------

# 👤 Author

**Zurab Metreveli**\
Full-Stack Developer --- React · Node.js · Supabase\
📍 Barcelona\
🔗 GitHub: https://github.com/zmetreveli

------------------------------------------------------------------------

# 📜 License

MIT License
