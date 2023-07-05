const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();
const router = require('./routes/search');
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ "Hii": "hello!!" });
});

app.use("/search", router); // Mount the router for API routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
