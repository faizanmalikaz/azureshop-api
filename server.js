const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("AzureShop API Running");
});

app.get("/api", (req, res) => {
    res.json({
        message: "AzureShop API Running"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
