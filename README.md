# Car-Bik – Technical Overview

This project is a modern web application built with a focus on scalability, maintainability, and developer experience. Below is a detailed overview of the technologies, architecture, and development patterns used.

---

## 🛠️ Tech Stack

- **Framework:**  
  [Next.js 15](https://nextjs.org/) (App Router, SSR/SSG, API routes)

- **Language:**  
  [TypeScript](https://www.typescriptlang.org/) (type safety, better tooling)

- **UI Library:**  
  [React 19](https://react.dev/)

- **Styling:**  
  [Tailwind CSS](https://tailwindcss.com/) (utility-first CSS framework)  
  [@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp) for text truncation

- **Animation:**  
  [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform) for smooth, performant UI animations

- **HTTP Client:**  
  [Axios](https://axios-http.com/) for API requests

- **Icons:**  
  [React Icons](https://react-icons.github.io/react-icons/)

- **Linting:**  
  [ESLint](https://eslint.org/) with [eslint-config-next](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)

---

## 📁 Project Structure

- `app/`
  - `sections/` – Page sections as React components (modular, reusable)
  - `components/` – UI components (Button, BlogCard, etc.)
  - `hooks/` – Custom hooks (e.g., data fetching)
  - `services/` and `blogs/` – Dynamic routes for service/blog details
  - `globals.css` – Global styles (Tailwind base)
- `public/` – Static assets (images, fonts)
- `next.config.ts` – Next.js configuration
- `tailwind.config.ts` – Tailwind CSS configuration

---

## ⚙️ Data Fetching & API

- Uses a custom hook (`getData.ts`) to fetch data from a backend API.
- API endpoint is configured via the `NEXT_PUBLIC_API_URL` environment variable.
- Data is fetched server-side for SEO and performance, with revalidation for freshness.

---

## 🧩 Component Architecture

- **Atomic Design Principles:**  
  Components are organized for reusability and clarity (UI elements, sections, pages).
- **Client/Server Components:**  
  Leverages Next.js App Router's distinction for optimal rendering.

---

## 🎨 Styling & Theming

- **Tailwind CSS** is used for rapid UI development and consistent design.
- Custom color palette and responsive design are implemented via Tailwind config.

---

## 🖼️ Animations

- **GSAP** is used for scroll-based and interactive animations, enhancing user experience without sacrificing performance.

---

## 🧪 Linting & Code Quality

- **ESLint** is set up with Next.js best practices.
- TypeScript ensures type safety across the codebase.

---

## 🚀 Scripts

- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm start` – Start production server
- `npm run lint` – Run linter

---

## 🌐 Deployment

- Ready for deployment on Vercel, Netlify, or any Node.js-compatible host.
- Static assets are served from the `public/` directory.

---

## 📝 Environment Variables

- `NEXT_PUBLIC_API_URL` – Backend API endpoint for data fetching

---

## 📦 Dependencies

See `package.json` for a full list of dependencies and versions.

---

## 👨‍💻 Development Notes

- Modular, scalable structure for easy feature expansion
- Follows modern React and Next.js conventions
- Arabic language support in UI and content
