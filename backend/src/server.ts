import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT ?? 3000);

app.disable("x-powered-by");

app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:4200"
  })
);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    message: "API de Turno funcionando"
  });
});

app.listen(PORT, () => {
  console.log(`API de Turno: http://localhost:${PORT}`);
});