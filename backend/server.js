import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import connectMongoDb from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket.js";

dotenv.config();

const PORT = process.env.PORT || 6000;

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectMongoDb();
});
