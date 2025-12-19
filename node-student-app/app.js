const express = require('express');
const studentsRoutes = require('./routes/students');

const app = express();
app.use(express.json());

app.use('/students', studentsRoutes);

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

