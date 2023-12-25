const fs = require('fs');

function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile('file.txt', 'utf8')
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Example usage
const filePath = '/file.txt';

readFileAsync(filePath)
  .then(data => {
    console.log(`File content: ${data}`);
  })
  .catch(error => {
    console.error(`Error reading file: ${error.message}`);
  });