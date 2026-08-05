const express = require("express");
const sql = require("mssql");

const app = express();
const port = process.env.PORT || 8080;

const config = {
    connectionString: process.env.SQL_CONNECTION_STRING,
    options: {
        encrypt: true,
        trustServerCertificate: false
    }
};

app.get("/", (req, res) => {
    res.send("AzureShop API Running");
});

app.get("/api", (req, res) => {
    res.json({
        sqlConnection: process.env.SQL_CONNECTION_STRING || "NOT FOUND"
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
