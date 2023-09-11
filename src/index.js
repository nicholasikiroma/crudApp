import express from "express";
import morgan from "morgan";
import router from "./routes/personRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);
app.use(errorHandler);

export default app;
