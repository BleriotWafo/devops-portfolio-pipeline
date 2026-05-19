const express = require("express");

const app = express();

const appName = process.env.APP_NAME || "DevOps Portfolio Pipeline API";

app.get("/", (req, res) => {
  res.json({
    message: appName,
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