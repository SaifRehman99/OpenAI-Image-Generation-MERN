import * as dotenv from "dotenv";
dotenv.config();



import express from "express";
import cors from "cors";

import postRoutes from "./routes/postRoutes.js"
import dalleRoutes from "./routes/dalleRoutes.js"
import { connectDB } from "./mongodb/connect.js";





connectDB()

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json({limit:'50mb'}))
app.use(cors());


app.get("/", (req, res) => {
    res.send("hello")
})


app.use("/api/v1/posts", postRoutes)
app.use("/api/v1/dalle", dalleRoutes)

app.listen(8080, () => console.log("connected to port " + PORT))