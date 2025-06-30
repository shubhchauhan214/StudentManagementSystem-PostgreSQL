const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Connect to DB and create table
require('./models');

// Middlewares
app.use(cors());
app.use(express.json());

//Load routes
const studentRoutes = require('./routes');
app.use('/api', studentRoutes);

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});