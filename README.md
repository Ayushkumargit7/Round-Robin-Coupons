🎟 **Round-Robin Coupon Distribution with Abuse Prevention**
============================================================

🚀 **Project Overview**
-----------------------

This web application distributes coupons to **guest users** in a **round-robin** manner, ensuring **fair allocation** while **preventing abuse** (e.g., refreshing to get multiple coupons).

📌 **Features**
---------------

* ✔ **Round-Robin Coupon Allocation** – Users receive coupons in sequential order.
* ✔ **Guest Access** – No account or login is required.
* ✔ **Abuse Prevention** – Prevents users from unfairly claiming multiple coupons.
* ✔ **User Feedback** – Users see messages when claiming coupons or waiting to claim again.

🛠️ **Tech Stack**
------------------

### **Frontend:**

*   **React.js** – Dynamic UI for claiming coupons.
    
*   **Tailwind CSS** – Modern styling with responsive design.
    
*   **Axios** – API calls to the backend.
    

### **Backend:**

*   **Node.js** – Backend logic.
    
*   **Express.js** – API routing and middleware.
    
*   **MongoDB** – Stores coupons and claim records.
    
*   **Mongoose** – MongoDB Object Modeling.
    
*   **CORS** – Enables secure cross-origin requests.
    

🏗️ **Setup Instructions**
--------------------------

### 1️⃣ Clone the Repository
`git clone https://github.com/your-repo/Round-Robin-Coupons-Distribution.git
cd Round-Robin-Coupons-Distribution`


### 2️⃣ Install Dependencies

#### **Backend Setup**

`cd backend
npm install`

#### **Frontend Setup**

`cd frontend
npm install`

### 3️⃣ Configure Environment Variables

Create a `.env` file in the **backend** folder and add:

`MONGO_URI=your-mongodb-connection-string
PORT=5000 `

Replace `your-mongodb-connection-string` with your actual MongoDB connection URL.

Create a `.env` file in the **frontend** folder and add:
`VITE_BACKEND_URL=https://localhost:5000` 
server URL
* * * * *

### 4️⃣ Set the origin in backend/server.js
const corsOptions = {
  origin: "https://localhost:5173", 
  credentials: true,
};

### 5️⃣ Run the Application

#### **Start Backend Server**

`cd backend
node server.js`

Backend runs at: **http://localhost:5000**

#### **Start Frontend Server**

`cd frontend
npm run dev`

Frontend runs at: **http://localhost:5173**

🔒 **Abuse Prevention Strategies**
----------------------------------

### 1️⃣ **IP Tracking**

*   Each user's **IP address is hashed** and stored in the database.
    
*   If a user claims a coupon, they must **wait for 1 hour** before claiming another.
    

### 2️⃣ **Cookie Tracking**

*   Each user receives a **unique session-based cookie**.
    
*   Prevents users from **switching networks** to bypass IP restrictions.
    

### 3️⃣ **Round-Robin Distribution**

*   Coupons are allocated in **sequence** to ensure fairness.

    
