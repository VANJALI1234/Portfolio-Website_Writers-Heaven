import express from 'express';
import fileUpload from 'express-fileupload';
import mysql from 'mysql';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(fileUpload());
app.use(express.static('uploads')); // Serve static files from the 'uploads' folder
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Iisc@1729',
  database: 'quotes_db',
});

// Connect to MySQL and ensure tables are created
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');

  // Create Quotes table
  const createQuotesTable = `CREATE TABLE IF NOT EXISTS quotes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    quote TEXT,
    image VARCHAR(255)
  )`;
  db.query(createQuotesTable, (err) => {
    if (err) throw err;
    console.log('Quotes table ready');
  });

  // Create Photography table
  const createPhotographyTable = `CREATE TABLE IF NOT EXISTS photography (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image VARCHAR(255),
    description TEXT
  )`;
  db.query(createPhotographyTable, (err) => {
    if (err) throw err;
    console.log('Photography table ready');
  });
});

// Route to upload quote and image
app.post('/upload', (req, res) => {
  const { quote } = req.body;
  let image = null;

  if (req.files && req.files.image) {
    const uploadedImage = req.files.image;
    const uploadPath = path.join(__dirname, 'uploads', uploadedImage.name);

    uploadedImage.mv(uploadPath, (err) => {
      if (err) return res.status(500).send(err);
    });

    image = uploadedImage.name;
  }

  const sql = 'INSERT INTO quotes (quote, image) VALUES (?, ?)';
  db.query(sql, [quote, image], (err) => {
    if (err) throw err;
    res.send('Quote and image uploaded');
  });
});

// Route to get all quotes
app.get('/quotes', (req, res) => {
  const sql = 'SELECT * FROM quotes';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Route to upload photography and image
app.post('/upload-photography', (req, res) => {
  const { description } = req.body;
  let image = null;

  if (req.files && req.files.image) {
    const uploadedImage = req.files.image;
    const uploadPath = path.join(__dirname, 'uploads', uploadedImage.name);

    uploadedImage.mv(uploadPath, (err) => {
      if (err) return res.status(500).send(err);
    });

    image = uploadedImage.name;
  }

  const sql = 'INSERT INTO photography (description, image) VALUES (?, ?)';
  db.query(sql, [description, image], (err) => {
    if (err) throw err;
    res.send('Photography and image uploaded');
  });
});

// Route to get all photography data
app.get('/photography', (req, res) => {
  const sql = 'SELECT * FROM photography';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Route to delete a photography entry and image
app.delete('/photography/:id', (req, res) => {
  const { id } = req.params;
  const sqlSelect = 'SELECT image FROM photography WHERE id = ?';
  const sqlDelete = 'DELETE FROM photography WHERE id = ?';

  db.query(sqlSelect, [id], (err, result) => {
    if (err) throw err;

    const image = result[0]?.image;
    if (image) {
      const imagePath = path.join(__dirname, 'uploads', image);
      fs.unlink(imagePath, (err) => {
        if (err) console.error('Error deleting image:', err);
      });
    }

    db.query(sqlDelete, [id], (err) => {
      if (err) throw err;
      res.send('Photography deleted');
    });
  });
});
// Create Stories table
const createStoriesTable = `CREATE TABLE IF NOT EXISTS stories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  story TEXT
)`;
db.query(createStoriesTable, (err) => {
  if (err) throw err;
  console.log('Stories table ready');
});

// Route to upload a story
app.post('/upload-story', (req, res) => {
  const { story } = req.body;

  const sql = 'INSERT INTO stories (story) VALUES (?)';
  db.query(sql, [story], (err) => {
    if (err) throw err;
    res.send('Story uploaded');
  });
});

// Route to get all stories
app.get('/stories', (req, res) => {
  const sql = 'SELECT * FROM stories';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
