import express from "express";
import cookieParser from "cookie-parser";
import notFoundHandler from "./middleware/notFoundMiddleware.js";
import errorHandler from "./middleware/errorMiddleWare.js";
import logger from "./middleware/logger.js";

//router imports
import userRouter from "./routes/user.router.js";
import productRouter from "./routes/product.router.js";

//Initialize express app
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(logger)

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);

//error handler's
app.use(notFoundHandler);
app.use(errorHandler);

export { app };