import { insert, createTable, remove, select, update } from "./bunJsSQLiteHelper.js";

const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/createTable", async (req, res) => {
  const { name, attributes } = req.body;
  await createTable(name, attributes);
  res.status(201).json({ message: `Table ${name} created` });
});

app.post("/api/insert", async (req, res) => {
  const { table, attributes, autoIncrementId } = req.body;
  const createdResource = await insert(table, attributes, autoIncrementId);
  res.status(201).json(createdResource);
});

app.delete("/api/remove", async (req, res) => {
  const { table, attributes } = req.body;
  await remove(table, attributes);
  res.status(204).send();
});

app.get("/api/select", async (req, res) => {
  const { table, attributes } = req.query;
  const result = await select(table, JSON.parse(attributes));
  res.json(result);
});

app.put("/api/update", async (req, res) => {
  const { table, whereAttributes } = req.query;
  const attributes = req.body;
  await update(table, JSON.parse(whereAttributes), attributes);
  res.status(204).send();
});

app.listen(3000, () => console.log("Server started on port 3000"));