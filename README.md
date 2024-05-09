# bunJsSQLiteCRUDApi

# API Usage Guide

This API provides endpoints for performing basic CRUD (Create, Read, Update, Delete) operations on a SQLite database.

## Endpoints

1. **POST /api/createTable**: This endpoint creates a new table. Send a JSON body with `name` as the table name and `attributes` as an object where the keys are column names and the values are the corresponding data types.

2. **POST /api/insert**: This endpoint inserts a new row into a table. Send a JSON body with `table` as the table name, `attributes` as an object where the keys are column names and the values are the corresponding values to be inserted.

3. **DELETE /api/remove**: This endpoint deletes rows from a table. Send a JSON body with `table` as the table name and `attributes` as an object where the keys are column names and the values are the corresponding values that the rows to be deleted should have.

4. **GET /api/select**: This endpoint retrieves rows from a table. Send query parameters with `table` as the table name and `attributes` as a JSON string where the keys are column names and the values are the corresponding values that the rows to be retrieved should have.

5. **PUT /api/update**: This endpoint updates rows in a table. Send query parameters with `table` as the table name and `whereAttributes` as a JSON string where the keys are column names and the values are the corresponding values that the rows to be updated should have. Send a JSON body with the new values to be set.
