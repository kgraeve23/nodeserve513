// Import required modules
const express = require('express');
const path = require('path');

// Import the 'fs' module
const fs = require('fs');

// Create an Express application
const app = express();

// Define a port number
const PORT = process.env.PORT || 3010;

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    // Serve the index.html file
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route to download a file
app.get('/download', (req, res) => {
    // Specify the file to be downloaded
    const filePath = path.join(__dirname, 'example.txt');
    // Set headers to specify the filename and content type
    res.setHeader('Content-Disposition', 'attachment; filename=example.txt');
    res.setHeader('Content-Type', 'text/plain');
    // Stream the file to the response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
});


// Define a route to download a file
app.get('/application', (req, res) => {
    // Specify the file to be downloaded
    res.download('application.jpg')
    
});

app.get('/google', (req, res) => {
    // redirect to google
    res.redirect('http://google.com')

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});