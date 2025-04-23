
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Shubh123#', // Replace with your MySQL password
  database: 'alumni_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

app.get('/alumni', (req, res) => {
  db.query('SELECT * FROM Alumni', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/alumni', (req, res) => {
  const data = req.body;
  db.query('INSERT INTO Alumni SET ?', data, (err, result) => {
    if (err) throw err;
    res.json({ message: 'Alumni added', id: result.insertId });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      res.status(500).json({ message: "Database error", success: false });
    } else if (results.length > 0) {
      res.json({ message: "Login successful!", success: true });
    } else {
      res.json({ message: "Invalid credentials", success: false });
    }
  });
});
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";

  db.query(query, [username, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        res.json({ message: "Username already exists", success: false });
      } else {
        res.status(500).json({ message: "Server error", success: false });
      }
    } else {
      res.json({ message: "User registered successfully!", success: true });
    }
  });
});
