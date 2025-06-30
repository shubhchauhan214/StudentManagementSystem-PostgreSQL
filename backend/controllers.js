const pool = require('./database');

// Add Student
const addStudent = async (req, res) => {
    const {name, email, class: studentClass, section} = req.body;

    try{
        const result = await pool.query(
            `INSERT INTO students (name, email, class, section) VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, email, studentClass, section]
        );
        res.status(201).json(result.rows[0]);
    }catch(err){
        console.error('Error Adding student:', err);
        res.status(500).json({error: 'Failed to add Student'});
    }
};

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM students ORDER BY created_at DESC`
    );
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
};

// Delete Student
const deleteStudent = async (req, res) => {
    const {id} = req.params;
    try{
        await pool.query(`DELETE FROM students WHERE id = $1`, [id]);
        res.status(200).json({message: 'Student deleted'});
    }catch(err){
        console.error('Error deleting student:', err);
        res.status(500).json({error: 'Failed to delete student'});
    }
};

// Update Student
const updateStudent = async (req, res) => {
    const {id} = req.params;
    const {name, email, class: studentClass, section} = req.body;

    try{
        const result = await pool.query(
            `UPDATE students SET name=$1, email=$2, class=$3, section=$4 WHERE id=$5 RETURNING *`,
            [name, email, studentClass, section, id]
        );
    }catch(err){
        console.error('Error updating student:', err);
        res.status(500).json({error: 'Failed to update student'});
    }
};

module.exports = {
    addStudent,
    getAllStudents,
    deleteStudent,
    updateStudent
};