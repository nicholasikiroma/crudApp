import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/personRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

// Third-party middlewares
app.use(cors());
app.use(morgan("dev"));

// In-built middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// custom middlewares
app.use("/api", router);
app.use(errorHandler);

export default app;
