const fs = require('fs');

// Function to read file content
function readFileContent(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Error reading file: ${err.message}`));
      } else {
        resolve(data);
      }
    });
  });
}

// Function to process content
function processContent(content) {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous processing (converting to uppercase)
    setTimeout(() => {
      if (typeof content === 'string') {
        resolve(content.toUpperCase());
      } else {
        reject(new Error('Invalid content format'));
      }
    }, 1500);
  });
}

// Function to save processed content to a file
function saveToFile(processedContent, outputPath) {
  return new Promise((resolve, reject) => {
    // Simulate asynchronous file-saving operation
    setTimeout(() => {
      fs.writeFile(outputPath, processedContent, 'utf8', (err) => {
        if (err) {
          reject(new Error(`Error saving to file: ${err.message}`));
        } else {
          resolve();
        }
      });
    }, 1200);
  });
}

// Example usage
readFileContent('input.txt')
  .then(content => processContent(content))
  .then(processedContent => saveToFile(processedContent, 'output.txt'))
  .then(() => console.log('File processing completed successfully'))
  .catch(error => console.error('Error:', error.message));

  