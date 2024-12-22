const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname))); // Important: Use path.join

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 middleware - handles requests to non-existent routes
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'404.html'))
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});