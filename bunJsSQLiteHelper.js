import { Database } from "bun:sqlite";

export const db = new Database("db.sqlite", { create: true });

export const insert = async (table, attributes) => {
  const keys = Object.keys(attributes).join(", ");
  const values = Object.values(attributes);
  const placeholders = values.map(() => "?").join(", ");

  db.query(`INSERT INTO ${table} (${keys}) VALUES (${placeholders})`).run(
    ...values
  );
};

export const createTable = async (name, attributes) => {
  const attributesStr = Object.entries(attributes)
    .map(([key, value]) => `${key} ${value}`)
    .join(", ");

  const query = `CREATE TABLE IF NOT EXISTS ${name} (${attributesStr})`;
  console.log(query);
  await db.query(query).run();
};

export const remove = async (table, attributes) => {
  const keys = Object.keys(attributes);
  const values = Object.values(attributes);
  const conditions = keys.map((key) => `${key} = ?`).join(" AND ");

  db.query(`DELETE FROM ${table} WHERE ${conditions}`).run(...values);
};

export const select = async (table, attributes) => {
  const keys = Object.keys(attributes);
  const values = Object.values(attributes);
  const conditions = keys.map((key) => `${key} = ?`).join(" AND ");

  const result = db
    .query(`SELECT * FROM ${table} WHERE ${conditions}`)
    .all(...values);
  return result.length === 1 ? result[0] : result;
};

export const update = async (table, whereAttributes, attributes) => {
  const searchKeys = Object.keys(whereAttributes);
  const searchValues = Object.values(whereAttributes);
  const searchConditions = searchKeys.map((key) => `${key} = ?`).join(" AND ");

  const updateKeys = Object.keys(attributes);
  const updateValues = Object.values(attributes);
  const updateStatements = updateKeys.map((key) => `${key} = ?`).join(", ");

  db.query(
    `UPDATE ${table} SET ${updateStatements} WHERE ${searchConditions}`
  ).run(...updateValues, ...searchValues);
};