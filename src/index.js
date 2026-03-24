import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import postRoutes from "./routes/posts.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Body parser middleware
app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.status(200).json({ message: "Blogify API is running" });
});

// Mount routes
app.use("/api/posts", postRoutes);

// Connect to database, then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
