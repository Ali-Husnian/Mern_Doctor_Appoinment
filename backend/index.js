import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./Routes/authRouter.js";
import morgan from "morgan";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

const corsOptions = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("API is working...");
});

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(morgan("dev"));

// route middleware
app.use("/api/v1/auth", authRouter);

// mongodb connection
const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB Connections successful!"))
  .catch((err) => {
    console.log("DB Connections Error🎆", err);
  });

app.listen(port, () => {
  console.log(`App running on port ${port}....`);
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED REJECTION! 💥 shutting down...");
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("UNHANDLED EXCEPTION! 💥 shutting down...");
  server.close(() => {
    process.exit(1);
  });
});
