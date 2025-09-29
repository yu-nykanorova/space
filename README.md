# Space

This is a learning project built for practice and portfolio purposes. A single-page React application that provides space-related content using data from multiple APIs. The project combines clean design, dynamic routing, and reusable logic with custom hooks and services.

**Live demo:** [View Live on Vercel](https://space-ten-neon.vercel.app/)

---

## Features:

- 4 different public APIs integrated for space content;
- Built with **React** + **Vite** + **SWC**;
- Custom **SCSS styling**;
- **React Router** for client-side navigation;
- **Custom React hook** for fetching and managing data;
- Modular **services** to organize API requests;
- **Node.js** server for proxying Solar System API requests and handling API keys securely;
- Custom **responsive design** inspired by space-related layouts.

---

## Getting started

### 1) Clone the repository
```bash
git clone https://github.com/yu-nykanorova/space.git
cd space
```
### 2) Install dependencies
Frontend
```bash
npm install
```
Server (Node.js backend for Solar System API)
```bash
cd server
npm install
```
### 3) Set up environment variable
Create a .env file in the root folder:
```env
VITE_NASA_API_KEY=your_nasa_api_key
```
(You can get your free NASA API key from https://api.nasa.gov)
Create a .env file in the **server folder**:
```env
SOLARSYSTEM_API_KEY=your_solar_system_api_key
PORT=5000
```
(You can get your free Solar System API key from https://api.le-systeme-solaire.net/generatekey.html)

### 4) Run the development servers
Start Node.js server (Solar System API proxy)
```bash
cd server
npm run dev
```
Start React frontend
```bash
cd ..
npm run dev
```
Open http://localhost:5173 to view it in the browser.
The frontend fetches data from the local Node.js server (/api/planets/:name) for Solar System API, and directly from other APIs for NASA, Spaceflight News, and Wikipedia.

## Technologies Used:
- React
- React Router DOM
- Custom Hooks
- Vite + SWC
- Node.js (Express) for API proxy
- REST APIs (NASA Open APIs, Solar system OpenData, Spaceflight News API, Wikipedia API)
- SCSS

## Design
Designed and developed by Yuliia Nykanorova, based on visual inspiration and concepts found across space-themed design references on the web.

## License
This project is open source and free to use for learning or portfolio presentation.

*Created by Yuliia Nykanorova*