const express = require('express');
const router = express.Router();

const students = [
  { id: 1, name: 'Rahul', class: '10' },
  { id: 2, name: 'Anita', class: '9' }
];

// API 1: Get all students
router.get('/', (req, res) => {
  res.status(200).json(students);
});

// API 2: Get student by ID
router.get('/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    return res.status(404).json({ message: 'Student not found' });
  }
  res.status(200).json(student);
});

module.exports = router;

