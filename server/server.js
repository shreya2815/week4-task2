const express = require("express");
const path = require("path");
require("dotenv").config({path:"../.env"});
require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "../client")));

app.get("/api/status", (req, res) => {
    res.json({
        message: "Backend is working successfully!",
        status: "success"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});