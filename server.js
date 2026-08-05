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

app.get("/api", async (req, res) => {
    try {
        await sql.connect(config);

        const result = await sql.query("SELECT GETDATE() AS CurrentTime");

        res.json({
            status: "Connected",
            databaseTime: result.recordset[0].CurrentTime
        });

    } catch (err) {
        res.status(500).json({
            status: "Failed",
            error: err.message
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
