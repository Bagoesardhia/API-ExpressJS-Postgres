const express = require("express");
const routing = require("./src/router");

const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/api/v1", routing);

app.listen(process.env.PORT, () => {
  console.log(`listing on ${process.env.PORT}`);
});
