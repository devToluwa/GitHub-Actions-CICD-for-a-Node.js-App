const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // Sending HTML instead of plain text
  res.send('Hello from CI/CD pipeline project, <a href="https://youtu.be/dQw4w9WgXcQ">click me to vie repo</a>');
});

app.listen(3000, () => console.log('Server running on port 3000'));

module.exports = app;