# 🎬 iTube

### A Full-Stack Video Sharing Platform

**iTube** is a full-stack video-sharing web application built with **React, Node.js, Express.js, and MongoDB**.

The project was developed as a practical full-stack development project, with the frontend and backend maintained separately inside the same repository.

It provides a foundation for building a modern video-sharing platform with authentication, users, channels, videos, search, and database integration.

> **iTube is an independent educational and portfolio project. It is not affiliated with or endorsed by YouTube.**

---

## 📌 Project Overview

iTube follows a **client-server architecture**, where the React frontend communicates with a Node.js/Express backend through APIs.

```text
┌──────────────────────────────────────────────┐
│                    iTube                     │
│             Video Sharing Platform           │
└──────────────────────┬───────────────────────┘
                       │
              HTTP / REST API
                       │
        ┌──────────────▼──────────────┐
        │           Server            │
        │       Node.js + Express     │
        └──────────────┬──────────────┘
                       │
                    Mongoose
                       │
        ┌──────────────▼──────────────┐
        │        MongoDB Atlas        │
        └─────────────────────────────┘
                       
        ┌─────────────────────────────┐
        │           Client            │
        │      React + JavaScript     │
        └─────────────────────────────┘
```

The repository contains both parts of the application:

```text
iTube/
├── client/
└── server/
```

This makes it possible to download the repository and continue developing the entire application from a single project.

---

# ✨ What Has Been Built

The repository contains the core structure and functionality required for the iTube application.

### Frontend

* React-based frontend
* Responsive user interface
* Video-sharing platform layout
* Navigation and content sections
* Video browsing interface
* Search interface
* User/channel-related interfaces
* Client-side API communication

### Backend

* Node.js backend
* Express.js server
* REST API architecture
* MongoDB database connection
* Mongoose integration
* Authentication architecture
* JWT-based authentication
* Backend routes
* Middleware structure

### Database

* MongoDB Atlas integration
* Server-side database connection
* Data models through Mongoose
* Database-driven application architecture

### Authentication

* User authentication architecture
* JWT authentication
* Protected backend functionality
* Google Authentication integration structure

> Google Authentication is **not completely configured in the repository**. Users who want to enable it need to create their own Google OAuth credentials and complete the required configuration.

---

# ✅ Completed Features

The following represents the functionality and development work included in the current project.

* [x] React frontend
* [x] Node.js backend
* [x] Express.js server
* [x] Client-server architecture
* [x] MongoDB Atlas connection
* [x] Mongoose integration
* [x] REST API structure
* [x] Authentication architecture
* [x] JWT authentication
* [x] Protected backend routes
* [x] Video platform interface
* [x] Video browsing structure
* [x] Search functionality
* [x] Channel-related functionality
* [x] Frontend/backend separation
* [x] Environment variable configuration
* [x] Local development setup

---

# ⚠️ Configuration Required

This repository is a **development project**, not a ready-to-use hosted service.

Anyone cloning the repository should configure their own services and credentials.

You will need to provide your own:

* MongoDB Atlas database
* MongoDB connection URI
* JWT secret
* Google OAuth credentials if Google Login is required
* Any additional API keys used by the application
* Hosting/deployment configuration

### Important

The repository does **not** contain the original developer's private credentials.

Do not copy or publish your own secrets directly inside the source code.

---

# 🗄️ Database Setup

iTube uses **MongoDB Atlas**.

To run the project yourself:

### 1. Create a MongoDB Atlas account

Create a MongoDB cluster and database for your own instance of iTube.

### 2. Create a database user

Create a database user with the required permissions.

### 3. Obtain the MongoDB connection string

Your connection string will look similar to:

```text
mongodb+srv://<username>:<password>@<cluster-url>/<database>
```

### 4. Add it to your environment variables

Inside:

```text
server/.env
```

add:

```env
MONGODB_URI=your_mongodb_connection_string
```

The exact database name and collections depend on the application's current implementation.

---

# 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Use the variable names expected by the current backend implementation.

### 🔒 Never commit secrets

Make sure files such as these are excluded from Git:

```text
.env
.env.local
node_modules/
```

Your `.gitignore` should protect sensitive files before pushing the project to GitHub.

---

# 🔑 Google Authentication

Google Authentication is included as part of the project's authentication direction, but it requires **your own Google Cloud configuration**.

If you want to enable Google Login, you need to:

1. Create a Google Cloud project.
2. Configure OAuth credentials.
3. Configure the required authorized origins/redirect URLs.
4. Add your Google Client ID and Client Secret to the environment variables.
5. Connect the credentials to the authentication flow.
6. Test the authentication flow locally.
7. Update the production URLs when deploying.

### Why isn't a Google Client ID included?

Because OAuth credentials belong to the individual developer/application owner and should never be committed to a public repository.

---

# 📂 Repository Structure

```text
iTube/
│
├── client/
│   │
│   ├── public/
│   ├── src/
│   │
│   ├── package.json
│   └── ...
│
├── server/
│   │
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── ...
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
├── README.md
└── ...
```

The `client` and `server` folders are intentionally separated.

### `client/`

Contains the React frontend and user interface.

### `server/`

Contains the Express backend, APIs, authentication, database connection, and server-side functionality.

---

# 🛠️ Technology Stack

| Layer           | Technology            |
| --------------- | --------------------- |
| Frontend        | React.js              |
| Language        | JavaScript            |
| Styling         | CSS / Tailwind CSS    |
| Build Tool      | Vite                  |
| Backend         | Node.js               |
| API             | Express.js            |
| Database        | MongoDB Atlas         |
| ODM             | Mongoose              |
| Authentication  | JWT                   |
| OAuth           | Google Authentication |
| Development     | Visual Studio Code    |
| Version Control | Git / GitHub          |

---

# 🚀 Run the Project Locally

## Prerequisites

Before running iTube, install:

* Node.js
* npm
* Git
* MongoDB Atlas account

---

## 1. Clone the Repository

```bash
git clone https://github.com/nilanjanlu07-dot/iTube.git
```

Enter the project:

```bash
cd iTube
```

---

# 2. Install Frontend Dependencies

```bash
cd client
npm install
```

Start the frontend:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

---

# 3. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

Create:

```text
server/.env
```

Add your configuration:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Then start the backend:

```bash
npm run dev
```

The backend is configured to run on:

```text
http://localhost:5000
```

---

# 🔄 How the Application Works

At a high level:

```text
User
 │
 ▼
React Frontend
 │
 │ API Request
 ▼
Express.js Backend
 │
 ├── Authentication
 │
 ├── Business Logic
 │
 └── Database Operations
 │
 ▼
MongoDB Atlas
```

The response then travels back through the backend to the React application.

```text
MongoDB
   ↓
Express.js
   ↓
REST API
   ↓
React
   ↓
User Interface
```

---

# 🌐 Deployment

The application consists of **two separate parts**, so deployment should be handled accordingly.

```text
                 iTube
                   │
          ┌────────┴────────┐
          │                 │
       Frontend           Backend
       React/Vite       Node/Express
          │                 │
          └────── API ──────┘
                   │
                   ▼
             MongoDB Atlas
```

## Frontend Deployment

The `client` application can be deployed using services such as:

* Vercel
* Netlify
* Cloudflare Pages
* Other static/frontend hosting platforms

For a Vite application, the production build is generally created using:

```bash
npm run build
```

The resulting build should be deployed according to the hosting provider's configuration.

---

## Backend Deployment

The `server` application requires a platform capable of running Node.js/Express applications.

Possible platforms include:

* Vercel
* Render
* Railway
* Fly.io
* Other Node.js-compatible hosting services

The backend must have its environment variables configured on the hosting platform.

For example:

```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Do **not** upload the `.env` file to the hosting repository.

---

# 🔗 Frontend ↔ Backend Deployment

After deploying the backend, the frontend must communicate with the **production backend URL** instead of:

```text
http://localhost:5000
```

For example:

```text
Development:

React
  ↓
http://localhost:5000
```

Production:

```text
React
  ↓
https://your-backend-domain.com
```

The frontend API configuration should therefore be updated before production deployment.

---

# 🔐 Production Authentication Configuration

When deploying the application, authentication settings must also be updated.

For Google Authentication, configure the production:

```text
Authorized JavaScript origins
```

and:

```text
Authorized redirect URIs
```

using the actual deployed frontend/backend URLs required by the authentication implementation.

A localhost configuration will not automatically work for a deployed application.

---

# 🗄️ Production Database

The deployed backend should connect to your MongoDB Atlas database.

Make sure your MongoDB Atlas configuration allows connections from your production backend.

For production:

```text
Frontend
    ↓
Deployed Backend
    ↓
MongoDB Atlas
```

Do not expose database credentials in frontend code.

---

# 📦 What You Need to Do After Cloning

If you are using this repository as a starting point, the basic process is:

```text
1. Clone repository
        ↓
2. Install client dependencies
        ↓
3. Install server dependencies
        ↓
4. Create your MongoDB Atlas database
        ↓
5. Configure server/.env
        ↓
6. Configure authentication
        ↓
7. Run frontend + backend
        ↓
8. Test locally
        ↓
9. Deploy backend
        ↓
10. Deploy frontend
        ↓
11. Update production URLs
        ↓
12. Configure Google OAuth if required
```

---

# 🧩 Things You May Need to Complete

The repository provides the existing implementation, but developers using it may need to complete or modify parts depending on their requirements.

### Authentication

* Complete Google OAuth configuration
* Add your own Google credentials
* Configure production redirect URLs
* Customize authentication behavior

### Database

* Create your own MongoDB Atlas cluster
* Create database credentials
* Configure the connection string
* Adapt database models if required

### Deployment

* Deploy the frontend
* Deploy the backend
* Configure production environment variables
* Connect the deployed frontend to the backend
* Configure CORS and authentication URLs where required

### Application

Depending on your goals, you may also extend the existing functionality.

---

# 🔮 What Can Be Built From iTube?

iTube can be used as a foundation for many different projects.

For example:

### 🎓 Educational Video Platform

Turn iTube into a platform for:

* Programming tutorials
* College lectures
* Courses
* Study materials
* Educational channels

### 🎮 Gaming Platform

Add:

* Gaming channels
* Game categories
* Live-stream integration
* Gaming communities
* Game-specific recommendations

### 🎬 Entertainment Platform

Build a platform focused on:

* Short films
* Independent creators
* Music videos
* Web series
* Movies and trailers

### 🤖 AI-Powered Video Platform

Add:

* AI video recommendations
* Natural-language search
* AI-generated summaries
* Automatic tagging
* Content moderation
* Transcript generation
* Semantic video search

### 👨‍💻 Developer Community

Transform it into a developer-focused platform for:

* Coding tutorials
* Project demonstrations
* Programming courses
* Developer channels
* Technical discussions

The repository is therefore not limited to one specific use case. Developers can modify the existing architecture according to their own requirements.

---

# 🚧 Current Limitations

The current repository should be considered a **development/portfolio implementation** rather than a production-scale video platform.

Depending on how the project is extended, production applications may require additional systems for:

* Large-scale video storage
* Video transcoding
* Streaming optimization
* CDN delivery
* Advanced caching
* Rate limiting
* Security hardening
* Content moderation
* Scalable search
* Background processing
* Monitoring and logging

These are separate engineering concerns that become increasingly important as the number of users and uploaded videos grows.

---

# 📈 Possible Improvements

The following are **optional ideas**, not commitments to future development of this repository:

* Watch history
* Playlists
* Subscriptions
* Notifications
* Creator dashboard
* Creator analytics
* Advanced search
* Recommendation engine
* Video processing pipeline
* Cloud storage
* CDN integration
* AI-powered search
* AI recommendations
* AI moderation
* Video transcripts
* Automatic subtitles
* Comment moderation
* Admin dashboard

Developers using this repository can choose which features are relevant to their own implementation.

---

# 🧪 Development & Testing

During development, the frontend and backend can be run independently.

### Frontend

```bash
cd client
npm run dev
```

### Backend

```bash
cd server
npm run dev
```

Backend:

```text
http://localhost:5000
```

The frontend development URL is provided by Vite when the client starts.

API functionality can be tested using:

* Browser Developer Tools
* Postman
* MongoDB Atlas
* Frontend testing

---

# 🔒 Security Notes

If you fork or clone this repository:

### Never commit:

```text
.env
.env.local
node_modules/
```

### Never expose:

* MongoDB passwords
* JWT secrets
* Google Client Secrets
* API keys
* Other private credentials

If a credential is accidentally pushed to a public repository, **rotate/revoke it immediately**.

---

# 📚 Learning Objectives

This project was created to gain practical experience with full-stack application development.

The project covers concepts including:

* React development
* Component-based UI
* Node.js
* Express.js
* REST APIs
* MongoDB
* Mongoose
* Authentication
* JWT
* OAuth concepts
* Client-server architecture
* Environment variables
* API communication
* Git
* GitHub
* Full-stack project organization
* Deployment concepts

---

# 👨‍💻 Developer

## Nilanjan Das

**BCA Student • Programmer • AI/ML Learner**

### Interests

* Artificial Intelligence
* Machine Learning
* Python
* Web Development
* App Development
* Software Development
* Creative Technology

### GitHub

**[nilanjanlu07-dot](https://github.com/nilanjanlu07-dot)**

---

# 📄 License

This project is currently provided for **educational and portfolio purposes**.

If you reuse or significantly modify the project, you are responsible for reviewing and complying with the applicable licenses of this project and its dependencies.

---

# ⭐ Final Note

iTube represents a practical implementation of a full-stack video-sharing application.

The repository contains the implementation developed by the author at the time of publication. Developers are free to study the architecture, configure their own services, modify the code, and extend the application according to their requirements.

**Clone it. Configure it. Learn from it. Build on it. 🚀**

---

### Built with ❤️ using React, Node.js, Express.js and MongoDB

**© Nilanjan Das**

