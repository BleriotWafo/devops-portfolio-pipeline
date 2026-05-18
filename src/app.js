const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "DevOps Pipeline API",
    status: "running",
    author: "Bleriot Wafo"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

module.exports = app;