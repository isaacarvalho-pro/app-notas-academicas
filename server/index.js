const express = require('express');
const { connectToDatabase } = require('./connection');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDatabase() // Estabelece conexão com o banco
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Não foi possível iniciar o servidor:", error);
  });
