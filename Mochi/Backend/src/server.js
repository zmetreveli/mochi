// const express = require("express");
// const { connectDB } = require("./mongoConnection");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const app = express();

// const productRoutes = require("./router/productRoutes");

// app.use(cors());
// app.use(express.json());
// app.use(productRoutes);

// if (process.env.NODE_ENV !== "test") {
//   connectDB().then(async (error) => {
//     if (error) {
//     }
//   });
// }

// exports.app = app;
// server.js

// !----------------------
// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 3000;

// // Middlewares
// app.use(cors());
// app.use(express.json());

// // Routes
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// // MongoDB connection
// const mongoURL = process.env.MONGO_URL;

// mongoose
//   .connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//     // Start the server only after a successful connection to MongoDB
//     app.listen(port, () => {
//       console.log(`Server running on port ${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB", err);
//   });

// !---------------------------
// Backend/src/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "./Backend/src/.env" });

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MongoDB connection
const mongoURL = process.env.MONGO_URL;

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server only after a successful connection to MongoDB
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
