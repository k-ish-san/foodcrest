# 🥘 FoodCrest – React Food Ordering App

**FoodCrest** is a modern and visually appealing food ordering web application built with **React** and **Tailwind CSS**. It allows users to explore categorized dishes, add them to a cart onClicking the **"Buy Now"** button, and review their selected items. Clicking the Cart icon navigates to a dedicated cart page where users can manage their selections, including updating quantities and removing items.

---

## 📁 Folder Structure


```plaintext
src/
├── components/       // Reusable UI components (Navbar, HeroSection, About, Dishes, DishCard, Reviews.)
│     └── data/       // Static data for dishes
├── context/          // Cart context logic
├── pages/            // Page components (Home, Cart)
├── assets/img/       // Images and icons
├── App.jsx           // Main app component with routing
└── main.jsx          // Entry point
```

---

## 🚀 Features

### 🌟 Home Page

![HeroSection and Dishes After Selecting Spicy](https://res.cloudinary.com/dc4gefidz/image/upload/v1751523397/Screenshot_2_izwhvo.png)
![Dishes Default](https://res.cloudinary.com/dc4gefidz/image/upload/v1751524282/Screenshot_6_zgbqy5.png)

- **Hero Section** with a visually striking image and CTA (`Order Now`).
- **Dropdown Menu** under `Dishes` to filter food by category (Spicy, Tasty, Delicious, Crispy).
- **Spicy Dishes** section showcasing:
  - Dish card with image, rating, price, and "Buy Now" button.

### 🛒 Cart Page

![Cart with Items](https://res.cloudinary.com/dc4gefidz/image/upload/v1751523951/Screenshot_5_ylym6u.png)

- Displays a list of all selected items.
- Features:
  - Item image, name, price.
  - Quantity controls (`+ / -`).
  - Remove button.
  - Real-time total calculation.

### ❌ Empty Cart State

![Empty Cart](https://res.cloudinary.com/dc4gefidz/image/upload/v1751524348/Screenshot_7_y6oopb.png)

- User-friendly empty cart message: **"Your cart is empty."**

---

## 🧑‍💻 Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **State Management**: React `useState`, Context API
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Cart Logic**:
  - Dynamic quantity updates
  - Removal of items
  - Real-time total price calculation

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/k-ish-san/foodcrest.git
cd foodcrest
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---
