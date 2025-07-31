# 📄 Resume Template Builder

A modern, component-driven React + TypeScript application for building elegant and professional resumes. Inspired by clean German-style resume layouts.

## ✨ Features

- Built with React, Vite, and TypeScript
- Fully styled with Tailwind CSS
- Clean, modular component architecture
- Customizable layout and content
- CI/CD with GitHub Actions
- Testing with Vitest and React Testing Library
- Deployment ready (GitHub Pages)

---

## 🛠️ Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | React, TypeScript             |
| UI          | Tailwind CSS                  |
| Build Tool  | Vite                          |
| Testing     | Vitest, React Testing Library |
| CI/CD       | GitHub Actions                |
| Deployment  | GitHub Pages, gh-pages        |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/resume-template.git
cd resume-template
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

```bash
npm run deploy
```


Live Demo: [https://fatemeGheysari.github.io/resume-template](https://fatemeGheysari.github.io/resume-template)

---

## 🧪 Testing

Testing is fully set up using Vitest and React Testing Library, with global setup and `jsdom` environment.

```bash
npm run test
```



---

## 🔄 CI/CD Pipeline

GitHub Actions runs test, lint, and build on every push and pull request to `main`. It's configured via `.github/workflows/ci.yml`.

---

## 📁 Project Structure

```bash
resume-template/
├── public/
│   └── bewerbungsFoto.jpeg
├── src/
│   ├── components/
│   │   ├── Layout.tsx
│   │   └── Sidebar.tsx
│   ├── pages/
│   │   └── Resume.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tests/
│   ├── components/
│   │   └── Sidebar.test.tsx
│   └── setup.ts
├── vite.config.ts
├── vitest.config.ts
├── .env
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## 💡 Author

Fatemeh Gheysari  
[GitHub Profile](https://github.com/fatemeGheysari)  
[LinkedIn Profile](https://linkedin.com/in/fatemeh-gheysari)