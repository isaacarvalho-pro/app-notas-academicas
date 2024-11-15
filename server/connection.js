const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Carrega variáveis de ambiente do arquivo .env

const uri = process.env.MONGO_URI; // Pega a URI do MongoDB do .env

// Cria o cliente MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Conexão ao banco de dados
async function connectToDatabase() {
  try {
    if (!client.isConnected) { // Verifica se já está conectado
      await client.connect();
      console.log("Conexão com MongoDB estabelecida com sucesso!");
    }
    return client;
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
    throw error; // Para lidar com erros no app principal
  }
}

module.exports = {
  connectToDatabase,
  client,
};
