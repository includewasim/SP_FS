const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12715211",
  password: "zmAh9SNjya",
  database: "sql12715211"
});

app.post("/save", (req, res) => {
  let data = [req.body.name, req.body.comp, req.body.pack];
  let sql = "INSERT INTO student (name, company, package) VALUES (?, ?, ?)";
  con.query(sql, data, (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

app.listen(9000, () => {
  console.log("Ready to serve @9000");
});
