const path = require("path");

const cors = require("cors");
const express = require("express");
const app = express();

const connectDB = require("./config/db");
const contactsRoutes = require("./routes/contacts");
const authRoutes = require("./routes/auth");

// Connect Database
connectDB();

// Global Middleware
app.use(express.json());
app.use(cors());

app.use("/api/contacts", contactsRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
