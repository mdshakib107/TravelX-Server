# TravelX-Server

TravelX-Server is a backend service built using **Node.js** and **Express.js**, designed to manage travel packages and user orders. It connects to a MongoDB database for storing and retrieving package and order information.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [API Endpoints](#api-endpoints)
6. [Folder Structure](#folder-structure)
7. [Scripts](#scripts)
8. [Dependencies](#dependencies)
9. [Contributing](#contributing)
10. [License](#license)

---

## Project Overview

The **TravelX-Server** project provides a RESTful API for managing travel packages and user orders. It uses **MongoDB** as the database, **Express.js** for routing, and **dotenv** for environment variable management. The server supports CRUD operations for packages and orders, making it suitable for a travel booking application.

---

## Features

- **CRUD Operations**: Create, Read, Update, and Delete operations for both travel packages and user orders.
- **Authentication-Free API**: Simple APIs for fetching, adding, updating, and deleting data.
- **Environment Variable Support**: Securely manage sensitive data like database credentials using `.env`.
- **CORS Enabled**: Allows cross-origin requests for frontend integration.
- **Scalable**: Built with scalability in mind, using MongoDB Atlas for cloud-based database hosting.

---

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB Atlas Account** (for database connection)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/TravelX-Server.git
   cd TravelX-Server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   DB_USER=your_mongodb_username
   DB_PASS=your_mongodb_password
   ```

4. Start the server:
   - For development:
     ```bash
     npm run start-dev
     ```
   - For production:
     ```bash
     npm start
     ```

---

## Environment Variables

The following environment variables are required:

| Variable | Description                     | Example                  |
|----------|---------------------------------|--------------------------|
| `PORT`   | Port number for the server      | `5000`                   |
| `DB_USER`| MongoDB Atlas username          | `travelx_user`           |
| `DB_PASS`| MongoDB Atlas password          | `your_secure_password`   |

---

## API Endpoints

### Packages

1. **GET** `/package`
   - Fetches all travel packages.
   - **Response**: Array of package objects.

2. **GET** `/singlePackage/:id`
   - Fetches a single package by its ID.
   - **Params**: `id` (Package ID).
   - **Response**: Single package object.

3. **POST** `/package`
   - Adds a new travel package.
   - **Request Body**: Package details.
   - **Response**: Inserted package object.

4. **GET** `/manageallpackage`
   - Fetches all orders (admin use).
   - **Response**: Array of order objects.

---

### Orders

1. **POST** `/placeorder`
   - Places a new order.
   - **Request Body**: Order details.
   - **Response**: Inserted order object.

2. **GET** `/myOrders/:email`
   - Fetches all orders for a specific user.
   - **Params**: `email` (User email).
   - **Response**: Array of order objects.

3. **DELETE** `/deleteProduct/:id`
   - Deletes an order by its ID.
   - **Params**: `id` (Order ID).
   - **Response**: Deletion result.

4. **PUT** `/updatestatus/:id`
   - Updates the status of an order.
   - **Params**: `id` (Order ID).
   - **Request Body**: `{ status: "approved" }`.
   - **Response**: Update result.

5. **DELETE** `/admindelete/:id`
   - Deletes an order from the admin panel.
   - **Params**: `id` (Order ID).
   - **Response**: Deletion result.

---

## Folder Structure

```
TravelX-Server/
├── .gitignore        # Specifies files to ignore in version control
├── .env              # Environment variables (not included in version control)
├── index.js          # Main server file with API routes
├── package-lock.json # Lock file for dependencies
├── package.json      # Project metadata and scripts
```

---

## Scripts

| Script       | Description                           |
|--------------|---------------------------------------|
| `start`      | Starts the server in production mode. |
| `start-dev`  | Starts the server in development mode with `nodemon`. |
| `test`       | Placeholder for testing (not implemented). |

---

## Dependencies

- **cors**: Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for building APIs.
- **mongodb**: Official MongoDB driver for Node.js.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

---

## License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance! 🚀
