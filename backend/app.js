import express from "express";
import notFoundHandler from "./middleware/notFoundMiddleware.js";
import errorHandlor from "./middleware/errorMiddleWare.js";
import logger from "./middleware/logger.js";


//router imports
import userRouter from "./routes/user.router.js";


//Initialize express app
const app = express();

//middlewares
app.use(express.json());
app.use(logger)

//routes
app.use("/api/v1/users", userRouter);

//error handler's
app.use(notFoundHandler);
app.use(errorHandlor);

export { app };