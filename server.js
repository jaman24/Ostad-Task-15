const http = require("http");
const routes = require("./routes");

// Create the server and handle requests using the routes function
const server = http.createServer(routes);

// Server listening on port 5500
server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});
