const mongoose = require("mongoose");
require("dotenv").config();
const { MongoMemoryServer } = require("mongodb-memory-server");

let mongodb = null;

exports.connectDB = async () => {
  mongoose.set("strictQuery", false);

  try {
    let dbUrl = process.env.MONGO_URL;

    if (!dbUrl) {
      throw new Error("MONGO_URL no está definida en el archivo .env");
    }

    if (process.env.NODE_ENV === "test") {
      mongodb = await MongoMemoryServer.create();
      dbUrl = mongodb.getUri();
      console.log("Usando MongoDB en memoria para pruebas");
    }

    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Conectado a la base de datos");
  } catch (e) {
    console.error("Error conectando a la base de datos:", e);
    throw e; // Opcional: volver a lanzar el error para manejo en niveles superiores
  }
};

exports.disconnectDB = async () => {
  try {
    await mongoose.connection.close();
    console.log("Desconectado de la base de datos");

    if (mongodb) {
      await mongodb.stop();
      console.log("MongoDB en memoria detenido");
    }
  } catch (err) {
    console.error("Error desconectando de la base de datos:", err);
  }
};
