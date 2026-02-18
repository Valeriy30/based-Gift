import express from "express";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Вызываем регистрацию роутов БЕЗ await в корне, 
// либо внутри асинхронного обработчика, если это критично.
registerRoutes(httpServer, app);

// ГЛАВНОЕ: Никаких listen() и никаких IIFE (async () => {})
export default app;