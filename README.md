# 📄 Resume Template Builder

A modern, component-driven React + TypeScript application for building elegant and professional resumes. Inspired by clean German-style resume layouts.

## ✨ Features

- Built with React, Vite, and TypeScript
- Fully styled with Tailwind CSS
- Clean, modular component architecture
- Customizable layout and content
- Future-ready: CI/CD, testing, deployment ready
- Ideal for GitHub Pages or Vercel deployment

---

## 🛠️ Tech Stack

| Layer       | Technology                    |
|-------------|-------------------------------|
| Frontend    | React, TypeScript             |
| UI          | Tailwind CSS                  |
| Build Tool  | Vite                          |
| Testing     | Vitest, React Testing Library *(to be added)* |
| CI/CD       | GitHub Actions *(coming soon)* |

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

## 🧪 Testing
Testing is set up using Vitest and React Testing Library.

```bash
npm run test
```

## 🔄 CI/CD Pipeline
GitHub Actions is configured to run tests, lint checks, and build steps on every push and pull request to main.

```bash
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run test
      - run: npm run build

```

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
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── tsconfig.json
└── README.md

```

## 📸 Preview
A preview screenshot of the rendered resume can be added here.

```vbnet
📍 If you're deploying to GitHub Pages or Vercel, include a live link and demo GIF or screenshot here.

```

## 💡 Author

Fatemeh Gheysari  
[GitHub Profile](https://github.com/fatemeGheysari)

[LinkedIn Profile](https://linkedin.com/in/fatemeh-gheysari)

