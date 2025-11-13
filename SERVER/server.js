import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./common/util.js";
import userRouters from "../SERVER/Routers/userRouters.js";

const port = process.env.PORT;
const host = process.env.HOST;

connectDB();
const app = express();

const allowedorigins = ["http://localhost:5173", "http://localhost:5174"];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedorigins, credentials: true }));

app.use("/api/auth", userRouters);

app.get("/", (req, res) => {
  res.send("API is working");
});

app.listen(port, host, () => {
  console.log(`The Server is started on http://${host}:${port}`);
});
