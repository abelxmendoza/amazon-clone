const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

// uses API test key
const stripe = require("stripe")
('sk_test_51L9CLGDEX66PEmCrOrYBy08osEdwpstDcPGVkosRdPzSruxcygEs8tnkWrDUHa8lIyqaeWNJkkqtWRnVO1imlorN003y8uLZim');


// API


// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// - Listen command
exports.api = functions.https.onRequest(app);

