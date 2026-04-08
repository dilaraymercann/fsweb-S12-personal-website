# 🚀 Personal Website (React + Vite)

This project is a modern personal portfolio website built with **React, Vite, and TailwindCSS**, featuring dynamic UI interactions, multi-language support, dark mode, and a fully tested architecture.

---

## ✨ Features

### 🌙 Dark Mode

* Toggle between light and dark themes
* Preference is saved in `localStorage`
* Fully reactive UI update

### 🌍 Multi-language Support

* English 🇬🇧 / Turkish 🇹🇷 toggle
* Dynamic text rendering via context
* Language preference stored in `localStorage`

### 💬 Contact Form

* Form validation (required fields)
* API integration using Axios
* Success & error notifications via **React Toastify**
* Messages stored in `localStorage`

### 📜 Message History

* Displays previously sent messages
* Time formatting with `date-fns`
* Modal-based UI (MUI Dialog)

---

## 🧠 Architecture

The project follows a **clean and scalable structure**:

```
src/
  components/
  contexts/
  hooks/
  data/
```

### 📦 Context API Usage

* `DarkModeContext` → theme management
* `LanguageContext` → translations
* `MessageContext` → form & message state

### 🔗 Custom Hook

* `usePostRequest`

  * Handles API requests
  * Manages loading & error states
  * Triggers toast notifications

---

## 🧪 Testing

The project includes **unit and integration tests** using:

* Vitest
* React Testing Library

### ✔ Tested Areas

* Form validation
* API calls (mocked)
* Toast notifications
* LocalStorage interactions
* Context state updates
* UI interactions (dark mode & language toggle)

### ▶ Run Tests

```
npm run test        # watch mode
npm run test:run    # run all tests once
```

---

## ⚙️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🎨 Tailwind CSS
* 🧩 Material UI (MUI)
* 🌐 Axios
* 🔔 React Toastify
* 📅 date-fns
* 🧪 Vitest + Testing Library

---

## 📸 Screens

* Dark / Light mode toggle
* Multi-language UI
* Contact form modal
* Message history modal

---

## 🚀 Getting Started

### 1. Install dependencies

```
npm install
```

### 2. Run the project

```
npm run dev
```

### 3. Build for production

```
npm run build
```

---

## 🔐 Environment Variables

Create a `.env` file:

```
VITE_API_KEY=your_api_key_here
```

---

## 📌 Notes

* State persistence via `localStorage`
* Fully component-based architecture
* Testable and scalable structure

---

## 👤 Author

**Dilaray**

Full Stack Developer
React • UI/UX • Scalable Frontend Architecture

---
