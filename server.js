import { config } from "dotenv";
import app from "./src/index.js";
import connectDB from "./src/dbConnection.js";

config();
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
