/**
 * Install and use the request library to make the HTTP request
* Use Node's fs (file system) module to write the file
* Use the callback based approach we've been learning so far
* Do not use the pipe function
* Do not use synchronous functions
 */

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const URL = args[0];
const path = args[1];
let content = "";

// console.log(URL);
// console.log(path);

request(URL, (error, response, body) => {
  content += ('error:', error); // Print the error if one occurred
  content += ('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  content += ('body:', body); // Print the HTML for the resource
  fs.writeFile(path, content, err => {
    if (err) {
      console.log(err);
      }
      console.log(`Downloaded and saved ${content.length} bytes to ${path}`);
    });
  });
