import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected: ", db.connection.host, db.connection.name);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectDB;
