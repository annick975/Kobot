# Rwanda Jobs

A fullstack web application for job listings in Rwanda, similar to jobinrwanda.com.

## Features

- View all job listings
- View detailed information about a specific job
- Post new job listings
- Responsive design for all devices

## Tech Stack

### Frontend

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React

### Backend

- Node.js
- Express
- LowDB (JSON storage)
- TypeScript

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/annick975/Kobot
   cd rwanda-jobs
   ```

2. Install dependencies for the backend

   ```bash
   cd backend
   npm install
   ```

3. Install dependencies for the frontend
   ```bash
   cd ../frontend
   npm install
   ```

### Running the application

1. Start the backend server

   ```bash
   cd backend
   npm run dev
   ```

   The server will run on http://localhost:5000

2. Start the frontend application
   ```bash
   cd ../frontend
   npm run dev
   ```
   The application will run on http://localhost:3000

## API Endpoints

- `GET /jobs` – Returns all jobs
- `GET /jobs/:id` – Returns a specific job by ID
- `POST /jobs` – Creates a new job listing
