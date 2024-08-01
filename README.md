# 🌐 DevLink

DevLink is a personal link tree application built with React and Firebase. It allows users to create a customizable page with links to their various social media profiles, websites, and other important online presence.

## 📚 Table of Contents
- [📖 Overview](#-overview)
- [🛠 Technologies](#-technologies)
- [⚙️ Setup](#%EF%B8%8F-setup)
  - [📋 Prerequisites](#-prerequisites)
  - [⬇️ Installation](#%EF%B8%8F-installation)
  - [🚀 Running Locally](#-running-locally)
- [🎨 Using DevLink](#-using-devlink)
- [📒 About](#-about)

## 📖 Overview

DevLink provides users with a simple way to share their online profiles through a single customizable link page. Inspired by similar services like Linktree, DevLink aims to provide a more personalized and extendable solution.

## 🛠 Technologies

- **React**: JavaScript library for building user interfaces
- **Firebase**: Backend-as-a-Service providing authentication, Firestore database, and hosting
- **CSS/SCSS**: Styling the application for a clean and modern look

## ⚙️ Setup

### 📋 Prerequisites

- Node.js
- npm or yarn

### ⬇️ Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/piedro404/devlink.git
    cd devlink
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure Firebase:**
    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Add your project's Firebase configuration to a `.env` file in the root of the project. Your `.env` file should look like this:

    ```env
    VITE_API_KEY=your_api_key
    VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    VITE_PROJECT_ID=your_project_id
    VITE_STORAGE_BUCKET=your_project_id.appspot.com
    VITE_MESSAGING_SENDER_ID=your_sender_id
    VITE_APP_ID=your_app_id
    VITE_MEASUREMENT_ID=your_measurement_id
    ```

### 🚀 Running Locally

1. **Start the development server:**
    ```bash
    npm run dev
    ```

2. **Access the application at `http://localhost:3000`.**

## 🎨 Using DevLink

To create and customize your personal link page, follow these steps:

1. **Sign Up / Log In:**
   - Use the authentication system provided by Firebase to sign up or log in to your account.

2. **Add Links:**
   - After logging in, you can start adding links to your profile by entering the URL and a description for each link.

3. **Customize Appearance:**
   - Customize the appearance of your link page by choosing from various themes and layout options.

4. **Share Your Link:**
   - Once you're satisfied with your link page, share the generated URL with others to provide quick access to your online profiles.

## 📒 About

Thank you for using DevLink! If you have any questions, feedback, or suggestions, feel free to get in touch at pedro.henrique.martins404@gmail.com. Happy linking!
