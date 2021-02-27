import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//Connect Database
connectDB();

//Define Routes
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server is running on port:", PORT));
