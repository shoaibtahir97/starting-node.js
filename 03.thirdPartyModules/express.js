const express = require("express");

const app = express();

const PORT = 5000;

//The client will request the server on '/home' route. The app function accepts two arguments one is the route and second is a callback function with request and response in parameters.
app.get("/home", (req, res) => {
  res.send("hello World");
});
//The server should be listening on a port for request from server. For that we use       app.listen function which also accepts two arguments first is the port number and second is the callback function which is a response.

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//Now if we open the localhose:5000/home we will see the hello world message which the server has sent to the client.
