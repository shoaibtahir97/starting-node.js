const express = require("express");

const app = express();
const PORT = 6010;

//If a user want to access a profile of a specific user or a product with specific id or name we can use a route like this which would send the response only that specific user/product. By using the req.params.id we can access the unique id

app.get("/profile/:id", (req, res) => {
  res.send(`You are seeing the profile of user ${req.params.id}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
