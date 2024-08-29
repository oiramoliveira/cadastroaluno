const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/alunoRoutes');
const swaggerSetup = require('./swagger/swagger');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', alunoRoutes);
swaggerSetup(app);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
