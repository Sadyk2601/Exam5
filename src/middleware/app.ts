import { Request, Response, NextFunction } from "express";
import express from "express";
import cookieParser from "cookie-parser";
// import authRoutes from "../routes/authRoutes";

const app = express();
app.use(cookieParser());
app.use(express.json());

// app.use("/auth", authRoutes);

app.get("/all", (req: Request, res: Response, next: NextFunction) => {
  res.json("Port is Succesfully activated");
});
export default app;
