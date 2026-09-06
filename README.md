# Kit Ledger — Sports Kit Inventory System

Kit Ledger is a full-stack inventory management system built for tracking sports equipment issued to cadets across a college/wing supply room. It handles the full lifecycle of kit — from stock levels, to items lost or damaged in the field, to generating purchase requisitions for replacements.

## Features

- **Authentication & Roles** — JWT-based login with two roles: `admin` (full write access) and `committee` (read-only access to most modules).
- **Items Inventory** — add, edit, delete, and search items with category, sport, brand, and unit filters. Includes photo uploads (via Cloudinary) and low-stock threshold tracking.
- **Lost & Damaged Records** — log lost or damaged kit per cadet, wing, and kit number, with a transactional "Mark Replaced" action that updates both the record status and item stock levels atomically.
- **Reports** — a combined Lost & Damaged register with PDF/Excel export, plus a live Purchase List (auto-calculated from pending replacements) with an editable draft/snapshot workflow.
- **Dashboard** — at-a-glance summary of total items, pending replacements, estimated purchase cost, and low-stock alerts.

## Tech Stack

**Backend:** Node.js, Express, PostgreSQL (hosted on [Neon](https://neon.tech)), JWT auth, Zod validation, Multer + Cloudinary for image uploads, PDFKit/ExcelJS for report exports.

**Frontend:** React (Vite), React Router, custom CSS design system — no UI framework, fully hand-styled.

**Deployment:** Vercel (both frontend and backend, deployed as separate projects).

## Project Structure

```
Backend/     Express API, routes, middleware, DB connection
Frontend/    React app (Vite), pages, components, API client
```

## Running Locally

**Backend**
```bash
cd Backend
npm install
# add a .env file with DATABASE_URL, JWT_SECRET, CLOUDINARY_* keys (see .env.example)
npm run dev
```

**Frontend**
```bash
cd Frontend
npm install
# add a .env file with VITE_API_BASE_URL pointing at your backend
npm run dev
```

## Roles for Testing

The app ships with two seeded roles for demo purposes:
- **admin** — full access to create/edit/delete items and records
- **committee** — read-only access across all modules

## Notes

This project was built as a learning exercise in full-stack development — designing a relational schema from scratch, building a REST API with proper auth and validation, and hand-building a complete frontend UI, then taking it through to a real cloud deployment.
