# User Management Backend API

This is the **backend** for the User Management Dashboard application built using **Node.js**, **Express**, and **MongoDB**. It provides RESTful APIs to perform CRUD operations on users.

---

## ✅ Deployed URLs

- **Frontend URL:** [https://forty4-frontend.vercel.app/](https://forty4-frontend.vercel.app/)  
- **Frontend GitHub:** [https://github.com/vinnu382910/forty4-frontend](https://github.com/vinnu382910/forty4-frontend)  
- **Backend GitHub:** [https://github.com/vinnu382910/forty4-backend](https://github.com/vinnu382910/forty4-backend)  
- **Backend API URL:** [https://forty4-backend.onrender.com/api/users](https://forty4-backend.onrender.com/api/users)

---

## 📂 File Structure

```

forty4-backend/
├── config/
│   └── db.js                # MongoDB connection setup
├── controllers/
│   └── userController.js    # Controller for handling user operations
├── middleware/
│   ├── errorMiddleware.js   # Error handling middleware
├── models/
│   └── User.js              # Mongoose schema for User
├── routes/
│   └── userRoutes.js        # API routes for users
├── .env.example            # Example environment file
├── .gitignore              # Files and folders to ignore in Git
├── package.json            # Project dependencies and scripts
├── server.js               # Entry point of the backend

````

---

## ⚙️ Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/vinnu382910/forty4-backend.git
   cd forty4-backend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:

   ```env
   PORT=5000
   MONGO_URI=your_mongo_connection_string_here
   ```

4. Start the server:

   ```bash
   npm start
   ```

The backend will run on `http://localhost:5000` by default.

---

## 📦 Environment Variables

Use the `.env` file to set the following:

```env
PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

---

## 🚀 API Endpoints

### 1️⃣ Get All Users

* **URL:** `GET /api/users`
* **Example Request:**

```bash
curl -X GET https://forty4-backend.onrender.com/api/users
```

* **Response:**

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "_id": "64f7a23e1c4f1b0012345678",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "company": "ABC Corp",
      "address": {
        "street": "123 Street",
        "city": "Cityville",
        "zipcode": "12345",
        "geo": {
          "lat": "40.7128",
          "lng": "-74.0060"
        }
      }
    }
  ]
}
```

---

### 2️⃣ Get Single User by ID

* **URL:** `GET /api/users/:id`
* **Example Request:**

```bash
curl -X GET https://forty4-backend.onrender.com/api/users/64f7a23e1c4f1b0012345678
```

* **Response:**

```json
{
  "success": true,
  "data": {
    "_id": "64f7a23e1c4f1b0012345678",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "company": "ABC Corp",
    "address": {
      "street": "123 Street",
      "city": "Cityville",
      "zipcode": "12345",
      "geo": {
        "lat": "40.7128",
        "lng": "-74.0060"
      }
    }
  }
}
```

---

### 3️⃣ Create New User

* **URL:** `POST /api/users`
* **Request Body:**

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "9876543210",
  "company": "XYZ Ltd",
  "address": {
    "street": "456 Avenue",
    "city": "Townsville",
    "zipcode": "54321",
    "geo": {
      "lat": "34.0522",
      "lng": "-118.2437"
    }
  }
}
```

* **Example Request:**

```bash
curl -X POST https://forty4-backend.onrender.com/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Smith","email":"jane@example.com","phone":"9876543210","company":"XYZ Ltd","address":{"street":"456 Avenue","city":"Townsville","zipcode":"54321","geo":{"lat":"34.0522","lng":"-118.2437"}}}'
```

* **Response:**

```json
{
  "success": true,
  "data": {
    "_id": "64f7b23e1c4f1b0012345679",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "9876543210",
    "company": "XYZ Ltd",
    "address": {
      "street": "456 Avenue",
      "city": "Townsville",
      "zipcode": "54321",
      "geo": {
        "lat": "34.0522",
        "lng": "-118.2437"
      }
    }
  }
}
```

---

### 4️⃣ Update User by ID

* **URL:** `PUT /api/users/:id`
* **Request Body:**

```json
{
  "name": "Jane Doe",
  "email": "janedoe@example.com"
}
```

* **Example Request:**

```bash
curl -X PUT https://forty4-backend.onrender.com/api/users/64f7b23e1c4f1b0012345679 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"janedoe@example.com"}'
```

* **Response:**

```json
{
  "success": true,
  "data": {
    "_id": "64f7b23e1c4f1b0012345679",
    "name": "Jane Doe",
    "email": "janedoe@example.com",
    "phone": "9876543210",
    "company": "XYZ Ltd",
    "address": {
      "street": "456 Avenue",
      "city": "Townsville",
      "zipcode": "54321",
      "geo": {
        "lat": "34.0522",
        "lng": "-118.2437"
      }
    }
  }
}
```

---

### 5️⃣ Delete User by ID

* **URL:** `DELETE /api/users/:id`
* **Example Request:**

```bash
curl -X DELETE https://forty4-backend.onrender.com/api/users/64f7b23e1c4f1b0012345679
```

* **Response:**

```json
{
  "success": true,
  "message": "User removed successfully"
}
```

---

## 📌 Notes

✔ The API uses **JSON** for both requests and responses.
✔ The backend is configured with **CORS enabled**, allowing requests from the frontend.
✔ All operations are performed using **MongoDB** with the help of Mongoose.

---

## 📦 Important Files

* **`server.js`** – Entry point that starts the Express server.
* **`config/db.js`** – Handles database connection using environment variables.
* **`routes/userRoutes.js`** – Defines routes for CRUD operations.
* **`controllers/userController.js`** – Contains the logic for each API endpoint.
* **`models/User.js`** – Mongoose schema for user data structure.
* **`middleware/errorMiddleware.js`** – Handles errors and not found routes.
* **`.env.example`** – Template for environment variables configuration.

---

## 📜 License

This project is for educational and personal use.
Happy coding 🚀📂
