# Movie Review API

A simple **Node.js and Express backend API** used to handle movie review requests and hide external API calls from the frontend for security purposes.

## Tech Stack

* Node.js
* Express.js
* REST API

## Project Structure

movie_review
│
├── backend
│   ├── package.json
│   ├── server.js
│
└── frontend

## Setup

Clone the repository

```
git clone https://github.com/kundalapallisairam-oss/movie_review.git
```

Install dependencies

```
cd backend
npm install
```

Run the server

```
npm start
```

## Environment Variables

Create a `.env` file inside the **backend** folder.

```
PORT=5000
API_KEY=your_api_key
```

## Purpose

This backend acts as a **secure middleware layer** between the frontend and external movie APIs, preventing exposure of API keys on the client side.

## Author

Sairam Kundalapalli
https://github.com/kundalapallisairam-oss

link:https://movie-review-seven-delta.vercel.app/
