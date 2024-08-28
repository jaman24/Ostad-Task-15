const fs = require("fs");
const { writeFileOperation } = require("./fileOperations");

const routes = (req, res) => {
  // Set response headers
  res.setHeader("Content-Type", "text/plain");

  // Route handling logic
  if (req.url === "/") {
    res.write("This is the Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is the About Page");
    res.end();
  } else if (req.url === "/contact") {
    res.write("This is the Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    // Use the writeFileOperation function to create the file
    writeFileOperation(res);
  } else {
    res.statusCode = 404;
    res.write("Page not found");
    res.end();
  }
};

module.exports = routes;
