import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoutes.js";
import userRouter from "./routes/userRoute.js";

// Handle __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Static folder for images
app.use("/image", express.static(path.join(__dirname, "uploads")));

// DB connection
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


// mongodb+srv://greatstack:KenKaneki52V.@cluster0.22un2gw.mongodb.net/?