const express = require('express');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// Test database connection
db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to the database!");
});

app.use('/students', studentRoutes);

app.listen(8081, () => {
  console.log("Server running on port 8081");
});
