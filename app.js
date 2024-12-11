const express = require("express");
const dotenv = require("dotenv");
const db = require("./src/utils/db");

dotenv.config();
const app = express();

const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");

db.connect();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
