require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const couponRoutes = require("./routes/couponRoutes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173", 
  "https://rr-coupons-distribution-frontend-fz2xg0keg.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("Server is running");
});

app.use("/api", couponRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
