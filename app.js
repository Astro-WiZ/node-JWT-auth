import express from "express";
import connectMongoDb from "./connection.js";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
const app = express();
const PORT = 4120;
// connection
connectMongoDb();

// middleware
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started at http://localhost:${PORT}`);
});
