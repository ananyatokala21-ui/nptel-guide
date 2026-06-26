const mongoose = require("mongoose");

const connectDB = async () => {
  console.log("Connecting...");

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected!");
    console.log("Database:", conn.connection.name);
    console.log("Host:", conn.connection.host);
  } catch (err) {
    console.error("❌ ERROR:");
    console.error(err);
  }
};

module.exports = connectDB;