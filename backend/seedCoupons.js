require("dotenv").config();
const mongoose = require("mongoose");
const Coupon = require("./models/Coupon");

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB...");

    const coupons = [
      { code: "SAVE10", claimed: false },
      { code: "DISCOUNT20", claimed: false },
      { code: "OFFER30", claimed: false },
      { code: "DEAL40", claimed: false },
      { code: "SALE50", claimed: false }
    ];

    await Coupon.insertMany(coupons);
    console.log("Coupons inserted successfully!");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
