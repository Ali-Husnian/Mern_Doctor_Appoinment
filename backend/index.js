import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

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
app.use(express());
app.use(cookieParser());
app.use(cors(corsOptions));

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
