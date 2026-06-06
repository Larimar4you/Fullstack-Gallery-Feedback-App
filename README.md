# Fullstack Gallery Feedback App

A small fullstack JavaScript application with an interactive image gallery and a
feedback form connected to a backend API and MongoDB database.

The project started as a frontend gallery/form assignment and was extended into
a fullstack app with Express, Mongoose, MongoDB, and real feedback saving.

## Live Demo

Frontend demo:

[View live project](https://larimar4you.github.io/Fullstack-Gallery-Feedback-App/)

> Note: the deployed GitHub Pages version shows the frontend. The backend API
> runs locally and connects to MongoDB Atlas.

## Repository

[GitHub repository](https://github.com/Larimar4you/Fullstack-Gallery-Feedback-App)

## Preview

The preview shows the feedback form successfully sending data from the frontend
to the Express backend and saving it in MongoDB.

![Fullstack Gallery Feedback App preview](./feedback-preview.png)

## Features

- Responsive image gallery
- Lightbox image preview with SimpleLightbox
- Feedback form with localStorage draft saving
- Form validation
- Success and error notifications with iziToast
- Express backend API
- MongoDB Atlas database connection
- Mongoose feedback model
- REST API routes for feedback
- Error handling middleware
- CORS support

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Vite
- SimpleLightbox
- iziToast
- localStorage
- Fetch API

### Backend

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- dotenv
- cors
- http-errors
- pino-http
- nodemon

## API Endpoints

### Get all feedbacks

```http
GET /feedback
```

Returns all saved feedback messages from MongoDB.

### Get feedback by ID

```http
GET /feedback/:feedbackId
```

Returns one feedback item by ID.

### Create feedback

```http
POST /feedback
```

Request body:

```json
{
  "email": "test@gmail.com",
  "message": "Nice gallery!"
}
```

### Update feedback

```http
PATCH /feedback/:feedbackId
```

### Delete feedback

```http
DELETE /feedback/:feedbackId
```

## Project Structure

```txt
Fullstack-Gallery-Feedback-App/
├─ .github/
├─ dist/
├─ src/
│  ├─ controllers/
│  │  └─ feedbackController.js
│  ├─ css/
│  ├─ db/
│  │  └─ connectMongoDB.js
│  ├─ img/
│  ├─ js/
│  │  ├─ 1-gallery.js
│  │  └─ 2-form.js
│  ├─ middleware/
│  │  ├─ errorHandler.js
│  │  ├─ logger.js
│  │  └─ notFoundHandler.js
│  ├─ models/
│  │  └─ feedback.js
│  ├─ routes/
│  │  └─ feedbackRoutes.js
│  └─ server.js
├─ 1-gallery.html
├─ 2-form.html
├─ index.html
├─ package.json
├─ README.md
├─ preview.png
└─ vite.config.js
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Larimar4you/Fullstack-Gallery-Feedback-App.git
cd Fullstack-Gallery-Feedback-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` file in the root of the project:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

Example:

```env
PORT=3000
MONGO_URL=mongodb+srv://username:password@cluster0.mongodb.net/gallery-feedback-app?retryWrites=true&w=majority
```

### 4. Run frontend

```bash
npm run dev
```

Frontend will be available at:

```txt
http://localhost:5173
```

### 5. Run backend

Open a second terminal and run:

```bash
npm run server
```

Backend will be available at:

```txt
http://localhost:3000
```

## Test Feedback API

You can test the API with curl:

```bash
curl -X POST http://localhost:3000/feedback \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@gmail.com","message":"Nice gallery!"}'
```

Then open:

```txt
http://localhost:3000/feedback
```

## What I Practiced

- Working with Vite frontend project structure
- DOM manipulation
- Form state saving with localStorage
- Sending data from frontend to backend using Fetch API
- Creating an Express server
- Connecting Node.js app to MongoDB Atlas
- Creating Mongoose schemas and models
- Building REST API routes
- Handling errors with middleware
- Organizing a small fullstack JavaScript project

## Author

Created by Lara Kosta — Fullstack Developer in progress with a focus on
JavaScript, React, Backend development, and AI-powered automation.
