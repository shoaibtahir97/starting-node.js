const express = require("express");

const app = express();
const PORT = 6012;

//Use express.static to define the folder where the static files are present to send the file to client
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
