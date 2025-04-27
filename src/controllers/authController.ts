import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getUserByEmail, createUser } from "../models/userModel";
import dotenv from "dotenv";
dotenv.config();

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user_time = process.env.JWT_EXPIRES_IN;
    const user_id = user.id;
    const code = process.env.JWT_SECRET;

    const token = jwt.sign({ id: user_id }, code as string, {
      expiresIn: user_time || "1h",
    });
    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password } = req.body;
    const user = await createUser(username, email, password);
    return res.status(201).json({ message: "User created", user });
  } catch (error) {
    next(error);
  }
};
