import express from "express";
import routers from "./routers/routers";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(routers);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
