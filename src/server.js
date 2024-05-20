import express from "express";
import { connectToRabbitMQ } from "./config/rabbitmq.js";

const app = express();
const PORT = process.env.PORT || 3001;

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
