import {
  insert,
  createTable,
  remove,
  select,
  update,
} from "./main.js";

const express = require("express");
const app = express();

app.use(express.json());

app.post("/api/tables", async (req, res) => {
  const { name, attributes } = req.body;
  await createTable(name, attributes);
  res.status(201).json({ message: `Table ${name} created` });
});

// to be tweaked some errors appeared
app.post("/api/users", async (req, res) => {
  const { table, attributes, autoIncrementId } = req.body;

  const createdResource = await insert(table, attributes, autoIncrementId);
  res.status(201).json(createdResource);
});

app.listen(3000, () => console.log("Server started on port 3000"));