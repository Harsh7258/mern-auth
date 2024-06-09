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

<<<<<<< HEAD
![Signup Page](/assests/images/signup.png)
=======
![Signup Page](<img width="948" alt="Screenshot 2024-06-09 220315" src="https://github.com/Harsh7258/mern-auth/assets/125180327/1f566b3f-b5ca-456d-b31a-eef5ebccf29b">)

> > > > > > > b39d77fa0a22bbb15a5bf77061abd9caf5159b39

### Signin Page

<<<<<<< HEAD
![Signin Page](/assests/images/signin.png)

### Update Profile Page

![Account](/assests/images/update.png)

### Dashboard

# ![Dashboard](/assests/images/home.png)

![Login Page](<img width="960" alt="Screenshot 2024-06-09 200306" src="https://github.com/Harsh7258/mern-auth/assets/125180327/4f6eb35b-9f65-495d-b15f-546e69cdd395">)

### Update Profile Page

![Account](<img width="947" alt="Screenshot 2024-06-09 200827" src="https://github.com/Harsh7258/mern-auth/assets/125180327/b2849bbe-9081-4736-a8f6-2a29ee3bc68e">)

### Dashboard

![Dashboard](<img width="960" alt="Screenshot 2024-06-09 200759" src="https://github.com/Harsh7258/mern-auth/assets/125180327/e3108573-2220-4163-9980-c836cb68eb98">)

> > > > > > > b39d77fa0a22bbb15a5bf77061abd9caf5159b39

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB database

### Installation

1. Clone the repository:

<<<<<<< HEAD
git clone https://github.com/Harsh7258/mern-auth.git

cd mern-auth

2.  cd mern-atuh

    npm install

    cd ../frontend

    npm install

    # ![Project setup and CLI](/assests/images/startCLI.png)

        git clone
        cd mern-auth

3.  cd mern-atuh
    npm install
    cd ../frontend
    npm install
    ![Project setup and CLI](<img width="914" alt="Screenshot 2024-06-09 220527" src="https://github.com/Harsh7258/mern-auth/assets/125180327/2856f53b-5e60-4a4b-9d5e-4d67a38f36aa">)

    > > > > > > > b39d77fa0a22bbb15a5bf77061abd9caf5159b39

4.  Set up environment variables in .env:

    - MONGO_URI=your_mongodb_uri
    - JWT_SECRET=your_jwt_secret
    - OAUTH_CLIENT_ID=your_oauth_client_id
    - OAUTH_CLIENT_SECRET=your_oauth_client_secret

5.  Running the Application

    Start the backend server:
    <<<<<<< HEAD

    npm run devStart

=======
npm run devStart

> > > > > > > b39d77fa0a22bbb15a5bf77061abd9caf5159b39
> > > > > > > Open your browser and navigate to `http://localhost:3000`.

### Contributing

_Contributions are welcome! Please fork the repository and submit pull requests for any features, enhancements, or bug fixes._
