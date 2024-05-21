import express from "express";
import dotenv from "dotenv";

import { connectToRabbitMQ } from "./config/rabbitmq.js";

dotenv.config();

const app = express();
const PORT = process.env.BILLING_PORT;

app.use(express.json());

connectToRabbitMQ()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Billing API server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start Billing API server:", error);
  });
