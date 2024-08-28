const fs = require("fs");

// Function to handle the /file-write operation
const writeFileOperation = (res) => {
  fs.writeFile("demo.txt", "hello world", (err) => {
    if (err) {
      res.write("Failed to write to file");
    } else {
      res.write("File written successfully");
    }
    res.end();
  });
};

module.exports = {
  writeFileOperation,
};
