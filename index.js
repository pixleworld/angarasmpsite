const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 19131;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route for the main page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
