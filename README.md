

# 🎵 Potify

**Potify** is a modern web application built with [Next.js](https://nextjs.org/), [React 19](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/), powered by the [Spotify Web API](https://developer.spotify.com/documentation/web-api/). It allows users to authenticate via Spotify, browse music content, and interact with their playlists.

---

## 🚀 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: React 19, Tailwind CSS 4
- **Authentication**: NextAuth.js
- **Spotify API SDK**: `@spotify/web-api-ts-sdk`
- **HTTP Client**: `axios`
- **Utility Libraries**: `clsx` for classnames

---

## 📦 Installation

### Prerequisites

- Node.js **20.x** or later
- A [Spotify Developer Account](https://developer.spotify.com/dashboard/applications) (required to get client ID and secret)

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Shiro-cha/potify.git
cd potify
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your credentials:

```env
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret
```

Generate a `NEXTAUTH_SECRET` with:

```bash
openssl rand -base64 32
```

---

## 🧪 Development

Start the development server:

```bash
npm run dev
```

> Uses `next dev --turbopack` for faster development.

Run with HTTPS (if needed):

```bash
npm run dev:https
```

Make sure `https-server.js` is configured properly for your local certificates.

---

## 🏗️ Build and Production

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## ✅ Linting

Run ESLint to check for issues:

```bash
npm run lint
```

---

## 📁 Project Structure

```
potify/
├── components/          # Reusable UI components
├── lib/                 # Helpers and API wrappers
├── pages/               # Next.js pages
├── public/              # Static files
├── styles/              # Tailwind global styles
├── https-server.js      # Optional HTTPS dev server
├── .env.local           # Environment variables
├── package.json
└── README.md
```

---

## 🧰 Features (WIP)

- [x] Spotify OAuth login via NextAuth.js
- [ ] Display user profile and playlists
- [ ] Music search by artist, album, or track
- [ ] Audio previews
- [ ] Playlist creation and management
- [ ] Dark/light mode toggle

---

## 🧠 Best Practices

This project follows:

- **SOLID principles**
- Clean, typed code with **TypeScript**
- Modern ESLint setup via `eslint-config-next`
- Component-based architecture with reusable logic

---

## 🧾 License

MIT © [Your Name](https://github.com/your-username)
