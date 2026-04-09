# Task Manager Application

This is a simple full stack Task Manager application built as part of a technical assignment.

## Features

- Create, view, update and delete tasks
- Mark tasks as completed
- Edit existing task titles
- Filter tasks (All / Completed / Pending)
- Persistent storage using localStorage
- Loading and error handling

## Tech Stack

Frontend: React (Vite + Tailwind CSS)  
Backend: Node.js + Express  

## API Endpoints

- GET /tasks → Fetch all tasks  
- POST /tasks → Create a new task  
- PATCH /tasks/:id → Update task status or title  
- DELETE /tasks/:id → Delete a task  

## Setup Instructions

### Backend

cd backend  
npm install  
node server.js  

### Frontend

cd frontend  
npm install  
npm run dev  

## Assumptions and Trade-offs

- The application is designed for a single user and does not include authentication.
- Tasks are stored in memory on the backend, so data resets when the server restarts.
- LocalStorage is used on the frontend for basic persistence.
- The focus was on implementing core functionality and clean structure as per assignment scope.
- Advanced features like database integration, authentication, or testing were not included to keep the solution simple and within time constraints.

## Live Demo

Frontend: https://task-manager-fullstack-neon.vercel.app/  
Backend: https://task-manager-fullstack-yjub.onrender.com/
