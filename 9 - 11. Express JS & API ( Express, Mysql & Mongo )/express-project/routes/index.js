const express = require('express');
const router = express.Router();

// Route untuk GET /
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Route untuk GET /json
router.get('/json', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

module.exports = router;
