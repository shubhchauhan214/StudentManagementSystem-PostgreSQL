const express = require('express');
const router = express.Router();
const {
    addStudent,
    getAllStudents,
    deleteStudent,
    updateStudent
} = require('./controllers');

// Routes
router.post('/students', addStudent);  // Add Student
router.get('/students', getAllStudents);        // Get All Students
router.delete('/students/:id', deleteStudent);  // Delete Student
router.post('/students/:id', updateStudent);    // Update Student

module.exports = router;
