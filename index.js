const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Hello world received a request.");

  const target = process.env.TARGET || "World";
  res.send(`Hello ${target}!\n`);
});

app.get("/loco", (req, res) => {
  res.send("This is locoooooooooooooooo");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
