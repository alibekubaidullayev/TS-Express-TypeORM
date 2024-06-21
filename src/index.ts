import express from "express";
import routers from "./routers/routers";
import { initializeDatabase } from "./core/db";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(express.json());
app.use(routers);

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
