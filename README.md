# bunJsSQLiteCRUDApi.js Usage Guide

CRUD.js is a JavaScript module that provides a set of functions for performing basic CRUD (Create, Read, Update, Delete) operations on a SQLite database. It uses the `bunJsSQLiteHelper.js` module for interacting with the database.

## Functions

1. **insert(table, attributes)**: This function inserts a new row into the specified table. The `attributes` parameter is an object where the keys are column names and the values are the corresponding values to be inserted.

2. **createTable(name, attributes)**: This function creates a new table with the specified name and attributes. The `attributes` parameter is an object where the keys are column names and the values are the corresponding data types.

3. **remove(table, attributes)**: This function deletes rows from the specified table. The `attributes` parameter is an object where the keys are column names and the values are the corresponding values that the rows to be deleted should have.

4. **select(table, attributes)**: This function retrieves rows from the specified table. The `attributes` parameter is an object where the keys are column names and the values are the corresponding values that the rows to be retrieved should have.

5. **update(table, setAttributes, whereAttributes)**: This function updates rows in the specified table. The `setAttributes` parameter is an object where the keys are column names and the values are the new values that should be set. The `whereAttributes` parameter is an object where the keys are column names and the values are the corresponding values that the rows to be updated should have.

## Usage

First, import the CRUD.js module:

```javascript
const crud = require('./bunJsSQLiteCRUDApi.js');
```

Then, you can use the functions like this:

```javascript
// Create a table
crud.createTable('users', { id: 'INTEGER PRIMARY KEY', name: 'TEXT', email: 'TEXT' });

// Insert a row
crud.insert('users', { name: 'John Doe', email: 'john@example.com' });

// Select rows
const users = crud.select('users', { name: 'John Doe' });

// Update a row
crud.update('users', { email: 'john.doe@example.com' }, { name: 'John Doe' });

// Remove a row
crud.remove('users', { name: 'John Doe' });
```