# Task Manager App

This is a full stack task manager application built as part of a technical assignment.

## Features
- Add, delete and complete tasks
- Edit task titles
- Filter tasks (All / Completed / Pending)
- Persistent storage using localStorage
- Loading and error handling

## Tech Stack
Frontend: React (Vite + Tailwind)
Backend: Node.js + Express

## API Endpoints
GET /tasks
POST /tasks
PATCH /tasks/:id
DELETE /tasks/:id

## Setup Instructions

### Backend
cd backend
npm install
node server.js

### Frontend
cd frontend
npm install
npm run dev

## Notes
- Data is stored in memory on backend
- Focus was on clean structure and core functionality
