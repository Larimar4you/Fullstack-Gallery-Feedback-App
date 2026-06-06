# Fullstack Gallery Feedback App

A small fullstack JavaScript application with an interactive image gallery and a
feedback form connected to a backend API and MongoDB database.

The project started as a frontend gallery/form assignment and was extended into
a fullstack app with separated client and server parts, Express API, MongoDB
storage, and real feedback saving.

## Live Demo

Frontend demo:

[View live project](https://larimar4you.github.io/Fullstack-Gallery-Feedback-App/)

> Note: the deployed GitHub Pages version shows the frontend only. The backend
> API runs locally and connects to MongoDB Atlas.

## Repository

[GitHub repository](https://github.com/Larimar4you/Fullstack-Gallery-Feedback-App)

## Preview

The preview shows the feedback form successfully sending data from the frontend
to the Express backend and saving it in MongoDB.

![Fullstack Gallery Feedback App preview](./feedback-preview.png)

## Features

- Clean client/server project structure
- Vite frontend separated from Express backend
- Responsive image gallery
- Lightbox image preview with SimpleLightbox
- Feedback form with localStorage draft saving
- Frontend API module for feedback requests
- HTTP communication between client and server with Axios
- Form validation
- Success and error notifications with iziToast
- Express backend API
- MongoDB Atlas database connection
- Mongoose feedback model
- REST API routes for feedback
- Error handling middleware
- CORS support

## Tech Stack

### Client

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- Axios
- SimpleLightbox
- iziToast
- localStorage

### Server

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
├─ client/
│  ├─ src/
│  │  ├─ api/
│  │  │  └─ feedbackApi.js
│  │  ├─ img/
│  │  ├─ js/
│  │  │  ├─ 1-gallery.js
│  │  │  └─ 2-form.js
│  │  ├─ 1-gallery.css
│  │  ├─ 2-form.css
│  │  ├─ reset.css
│  │  └─ styles.css
│  ├─ 1-gallery.html
│  ├─ 2-form.html
│  ├─ index.html
│  ├─ package.json
│  └─ vite.config.js
│
├─ server/
│  ├─ src/
│  │  ├─ controllers/
│  │  │  └─ feedbackController.js
│  │  ├─ db/
│  │  │  └─ connectMongoDB.js
│  │  ├─ middleware/
│  │  │  ├─ errorHandler.js
│  │  │  ├─ logger.js
│  │  │  └─ notFoundHandler.js
│  │  ├─ models/
│  │  │  └─ feedback.js
│  │  ├─ routes/
│  │  │  └─ feedbackRoutes.js
│  │  └─ server.js
│  ├─ package.json
│  └─ .env.example
│
├─ feedback-preview.png
├─ README.md
└─ package.json
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Larimar4you/Fullstack-Gallery-Feedback-App.git
cd Fullstack-Gallery-Feedback-App
```

### 2. Install client dependencies

```bash
cd client
npm install
```

### 3. Install server dependencies

```bash
cd ../server
npm install
```

### 4. Create server `.env` file

Create a `.env` file inside the `server` folder:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
```

Example:

```env
PORT=3000
MONGO_URL=mongodb+srv://username:password@cluster0.mongodb.net/gallery-feedback-app?retryWrites=true&w=majority
```

### 5. Run the client

Open a terminal in the `client` folder:

```bash
npm run dev
```

Client will be available at:

```txt
http://localhost:5173
```

### 6. Run the server

Open a second terminal in the `server` folder:

```bash
npm run dev
```

Server will be available at:

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

- Organizing a fullstack project into separate client and server folders
- Working with Vite frontend project structure
- DOM manipulation
- Rendering an image gallery from JavaScript data
- Using SimpleLightbox for image previews
- Saving form draft state with localStorage
- Creating a reusable frontend API module
- Sending data from frontend to backend with Axios
- Creating an Express server
- Connecting a Node.js app to MongoDB Atlas
- Creating Mongoose schemas and models
- Building REST API routes
- Handling errors with middleware
- Working with CORS
- Keeping frontend and backend responsibilities separated

## Author

Created by Lara Kosta — Fullstack Developer in progress with a focus on
JavaScript, React, Backend development, and AI-powered automation.
