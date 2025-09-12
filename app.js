import express from "express";
const app = express();
export default app;
import employee from "./api/employees.js";

app.use(express.json());

app.use("/employees", employee);
