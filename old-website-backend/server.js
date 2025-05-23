// server.js
const express = require('express');
const connection = require('./db');
require('dotenv').config(); // always load this before using .env variables

const app = express();
const PORT = process.env.PORT || 3000;

// Optional: middleware for parsing JSON
app.use(express.json());

// Test route

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  const query = 'SELECT * FROM avl_categories'; // replace 'items' with your actual table name

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching items:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    res.json(results); // return all rows as JSON
  });
});