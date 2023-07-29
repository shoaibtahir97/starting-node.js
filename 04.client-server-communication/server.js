const express = require("express");
const app = express();
const PORT = 6010;

//CORS policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});
//Created a route /home. Passed the data object in res.send to send it to client.
app.get("/home", (req, res) => {
  res.send({
    name: "Shoaib",
    age: 26,
    laptop: "Lenovo Thinkpad T460",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
