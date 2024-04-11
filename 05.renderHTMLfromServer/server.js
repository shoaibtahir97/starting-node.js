const express = require("express");
const PORT = 6011;

const app = express();

app.get("/html", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
