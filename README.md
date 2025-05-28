# 🚀 E-Mall

<p align="center">
  <img src="./frontend/public/vite.svg" alt="E-Mall Logo" width="100" />
</p>

**E-Mall** is a cutting ‑edge, full ‑featured e commerce platform built with the MERN stack. It delivers a seamless, secure shopping experience—featuring user authentication, rich product browsing, dynamic cart management, and a robust checkout flow. Whether you’re a shopper or an admin, E Mall’s intuitive UI and powerful backend have you covered.

[![Live Demo](https://img.shields.io/badge/demo-online-green)](https://e-mall-live.vercel.app/) [![YouTube Video](https://img.shields.io/badge/video-tutorial-red)](https://www.youtube.com/watch?v=DSWwFA3csKM)

---

## 📋 Table of Contents

1. [✨ Features](#✨-features)  
2. [🛠️ Technologies & Libraries](#🛠️-technologies--libraries)  
3. [⚙️ Installation](#⚙️-installation)  
4. [🚀 Usage](#🚀-usage)  
5. [📞 Contact](#📞-contact)  

---

## ✨ Features

- **Secure Authentication**  
  Register, log in, and stay authenticated with JWT ‑powered tokens.

- **Product Catalog**  
  Browse, search, and filter products by category, price, or rating.

- **Product Detail Pages**  
  High ‑resolution images, customer reviews, and related items suggestions.

- **Shopping Cart**  
  Add, update, or remove items; view real ‑time totals and taxes.

- **Streamlined Checkout**  
  Address entry, order summary, and payment processing—all in one flow.

- **Admin Dashboard**  
  Create, edit, or delete products; manage orders and user accounts.

---

## 🛠️ Technologies & Libraries

### Core Stack

- **MongoDB** – Flexible NoSQL database
- **Express.js** – Fast, minimalist server framework
- **React** – Reactive, component ‑based UI library
- **Node.js** – Scalable JavaScript runtime
- **JWT** – JSON Web Tokens for stateless auth

### State & Styling

- **Redux** – Centralized state management
- **Sonner** – Sleek toast notifications
- **Tailwind CSS** – Utility ‑first styling (optional CSS frameworks: Bootstrap / Material ‑UI)

### File & Media Handling

- **Multer** – Handling `multipart/form-data` for file uploads
- **Cloudinary API** – Cloud storage & image transformation
- **Streamifier** – Convert buffers to readable streams

---

## ⚙️ Installation

Follow these steps to run **E-Mall** locally:

1. **Clone the repo**  
   ```bash
   git clone https://github.com/davesohamm/e-mall.git
   cd e-mall
   ```

2. **Server Setup**  
   ```bash
   cd backend
   npm install
   ```

3. **Client Setup**  
   ```bash
   cd frontend
   npm install
   ```

4. **Configure Environment**  
   In `server/.env`, add:
   ```env
   PORT=9000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
   Feel free to include any other variables as needed.

5. **Run in Development**  
   Open two terminals:

   - **Server:**  
     ```bash
     cd backend
     npm run dev
     ```

   - **Client:**  
     ```bash
     cd frontend
     npm run dev
     ```

   Visit the app at [http://localhost:5173](http://localhost:5173).

---

## 🚀 Usage

### Shopper

1. Sign up or log in.  
2. Browse or search products.  
3. View product details and reviews.  
4. Add items to your cart.  
5. Checkout with secure payment.  

### Admin

1. Log in with an admin account.  
2. Access **Admin Dashboard**.  
3. Add / update / remove products.  
4. Manage orders and user profiles.  

---

## 📞 Contact

Have questions or feedback? Reach out:

- ✉️ **Email:** davesohamm@gmail.com  
- 💻 **GitHub:** [davesohamm](https://github.com/davesohamm)  
- 📺 **Reference Video:** https://www.youtube.com/watch?v=hpgh2BTtac8  
- 🌐 **Live Demo:** https://e-mall-live.vercel.app/  

Enjoy exploring and happy coding! 🎉

