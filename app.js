//app.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/productos');

const app = express();

// Middlewares
app.use(cors()); // Para evitar problemas de CORS
app.use(express.json()); // Para parsear JSON

// Conexión a MongoDB (asegúrate de tener MongoDB corriendo)
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/productos')
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Rutas
app.use('/api/productos', productRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});