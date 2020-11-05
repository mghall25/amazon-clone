const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HfavqBUrbahukMMzhA810yjN2LJac06pk3nV8lSnBq6JGl6rasuMyHdkXj0bwxl0dG1EJMOiPQgX1rYmuJ8mLfm00g8Ng1LQQ"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received!!! This is the amount: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  }); // status 201 = OK - created.
});

// - Listen command
exports.api = functions.https.onRequest(app);

//example endpoint
// (http://localhost:5001/clone-1035b/us-central1/api)

// // FROM FIREBASE: Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
