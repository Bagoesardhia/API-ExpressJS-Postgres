// Library Import
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Folder Import
const pool = require("../db");
const queries = require("./queries");

// Define Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// API AddAdmin
const addAdmin = app.post("/addAdmin", async (req, res) => {
  try {
    const { name, role, isActive } = req.body;
    const data = await pool.query(queries.addAdmin, [name,role,isActive]);
    return res.json(data.rows).status(200);
  } catch (error) {
    res.send(error.message);
  }
});

// API ShowAdmin
const showAdmin = app.get("/showAdmin", async (req, res) => {
  try {
    const data = await pool.query(queries.showAdmin);
    return res.json(data.rows);
  } catch (error) {
    res.send("err showAdmin" || " " || error.message);
  }
});

// API Update Status Active
// const statusActive = a

module.exports = {
  addAdmin,
  showAdmin,
};
