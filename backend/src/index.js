const express = require('express');

const cors = require('cors');

require('dotenv').config();

const productosRoutes = require('./routes/productos');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/productos', productosRoutes);

const PORT = 3001;

app.listen(PORT, () => {

  console.log(`
Servidor funcionando:
http://localhost:${PORT}
  `);
});