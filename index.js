const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Sending HTML instead of plain text
  res.send('<a href="https://youtu.be/dQw4w9WgXcQ">Hello from CI/CD pipeline project</a>');
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;