# MERN-auth

## Overview

**MERN-auth** is a robust authentication system built using the MERN stack and additional technologies such as `Node.js`, `React.js`, `react-oauth`, `JWT`, `Express.js`, `react-bootstrap`, `cookie authentication`, and `MongoDB`. This project provides a comprehensive solution for user authentication, featuring secure login and registration functionalities, OAuth integration, and token-based authentication.

## Technologies Used

- `Node.js`: Backend runtime environment
- `React.js`: Frontend library for building user interfaces
- `react-oauth`: OAuth integration for third-party authentication
- `JWT (JSON Web Token)`: Token-based authentication
- `Express.js`: Web application framework for Node.js
- `react-bootstrap`: UI components built with Bootstrap
- `Cookie Authentication`: Secure handling of session cookies
- `MongoDB`: NoSQL database for storing user data
- `concurrently`: Run multiple commands concurrently. Like npm run watch-js & npm run watch-less but better.

## How It Works

1. The **MERN Authentication System** in a Node.js project involves registering users, logging them in, protecting routes using JWT sotring it in cookies, and managing tokens effectively.
2. Implementing the [OAuth 2.0](https://developers.google.com/identity/protocols/oauth2) flow to request user authentication, handling tokens securely, and managing user sessions. This process allows your Node.js application to authenticate users via their Google accounts and access authorized data securely.
3. `Proper hashing`, `validation`, and `error handling` are crucial for maintaining security and a good user experience.

### User Signup

1. **Frontend**: Users register by providing their details through a signup form.
2. **Backend**: The server receives the registration data and creates a new user record in the MongoDB database after hashing the password for security.

### User Login

1. **Frontend**: Users log in by entering their credentials in the login form.
2. **Backend**: The server verifies the credentials, generates a JWT, and sets it as a cookie for the session.

### OAuth Authentication

1. **Frontend**: Users can log in using third-party providers like Google through react-oauth2.0.
2. **Backend**: The server processes the OAuth tokens, creates or retrieves the user record, and issues a JWT for session management.

### Token-Based Authentication

1. **Frontend**: For every request to protected routes, the JWT is included in the request headers.
2. **Backend**: The server validates the JWT and allows access to the protected resources if the token is valid.

## Screenshots

### Signup Page

![Signup Page](/assests/images/signup.png)

### Signin Page

![Signin Page](/assests/images/signin.png)

### Update Profile Page

![Account](/assests/images/update.png)

### Dashboard

![Dashboard](/assests/images/home.png)

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB database

### Installation

1. Clone the repository:

- git clone `https://github.com/Harsh7258/mern-auth.git`

- cd mern-auth

2.  > cd mern-atuh
    >
    > > npm install
    >
    > > cd ../frontend
    >
    > > npm install

![Project setup and CLI](/assests/images/startCLI.png)

3.  Set up environment variables in .env:

    - MONGO_URI=your_mongodb_uri
    - JWT_SECRET=your_jwt_secret
    - OAUTH_CLIENT_ID=your_oauth_client_id
    - OAUTH_CLIENT_SECRET=your_oauth_client_secret

4.  > Running the Application
    >
    > > Start the backend server:
    >
    > > npm run dev
    > > Open your browser and navigate to `http://localhost:3000`.

### Contributing

_Contributions are welcome! Please fork the repository and submit pull requests for any features, enhancements, or bug fixes._
