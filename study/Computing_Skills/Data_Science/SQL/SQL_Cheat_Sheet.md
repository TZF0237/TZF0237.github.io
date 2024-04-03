---
layout: simple
title: SQL Cheat Sheet
---

# SQL Command Cheat Sheet

|  Command   | Syntax | Description | Example |
|  --------  | ---------------------------------------------  | ------------------------------------------ | -------------------------------------- |
| SELECT     | `SELECT column1, column2, ... FROM table_name;`  | `SELECT` statement is used to select data from a database. |`SELECT * FROM Customers;` |
| WHERE      | `SELECT column1, column2, ... FROM table_name WHERE condition;` | `WHERE` clause is used to extract only those records that fulfill a specified condition | `SELECT * FROM Customers WHERE Country='Mexico';` | 
| COUNT | `SELECT COUNT * FROM table_name;` | `COUNT` is a function that takes the name of a column as argument and counts the number of rows when the column is not NULL | `SELECT COUNT(country) FROM placeofinterest WHERE country = 'Canada'` |
| DISTINCT | `SELECT DISTINCT columnname FROM table_name;` | `DISTINCT` function is used to specify that the statement is a query which returns unique values in specified columns. | `SELECT DISTINCT country FROM placeofinterest WHERE type='historical';`|
| LIMIT | `SELECT * FROM table_name LIMIT number;` | `LIMIT`  is a clause to specify the maximum number of rows the result set must have. | `SELECT * FROM placeofinterest WHERE airport="pearson" LIMIT 5;` |
|INSERT| `INSERT INTO table_name (column1,column2,column3...) VALUES(value1,value2,value3...);` | `INSERT` is used to insert new rows in the table. | `INSERT INTO placeofinterest (name,type,city,country,airport) VALUES('Niagara Waterfalls','Nature','Toronto','Canada','Pearson');`|
|UPDATE | `UPDATE table_name SET[[column1]=[VALUES]] WHERE [condition];` | `UPDATE` used to update the rows in the table. | `UPDATE placeofinterest SET name = 'Niagara Falls' WHERE name = "Niagara Waterfalls";` |
|DELETE | `DELETE FROM table_name WHERE [condition]; ` | `DELETE` statement is used to remove rows from the table which are specified in the WHERE condition. | `DELETE FROM placeofinterest WHERE city IN ('Rome','Vienna');` |
|CREATE TABLE | ` CREATE TABLE table_name (col1 datatype optional keyword, col2 datatype optional keyword,col3 datatype optional keyword,..., coln datatype optional keyword) ` | `CREATE TABLE` statement is to create the table. Each column in the table is specified with its name, data type and an optional keyword which could be PRIMARY KEY, NOT NULL, etc., | `CREATE TABLE employee ( employee_id char(2) PRIMARY KEY, first_name varchar(30) NOT NULL, mobile int);` |
|ALTER TABLE ADD COLUMN | `ALTER TABLE table_name ADD COLUMN column_name_1 datatype....ADD COLUMN column_name_n datatype;` | `ALTER TABLE` statement is used to add the columns to a table. | `ALTER TABLE employee ADD COLUMN income bigint;` |
|ALTER TABLE ALTER COLUMN | ` ALTER TABLE table_name ALTER COLUMN column_name_1 SET DATA TYPE datatype;` | `ALTER TABLE ALTER COLUMN` statement is used to modify the data type of columns. | `ALTER TABLE employee ALTER COLUMN mobile SET DATA TYPE CHAR(20);`|
|ALTER TABLE DROP COLUMN | ` ALTER TABLE table_name DROP COLUMN column_name_1 ;` | `ALTER TABLE DROP COLUMN` statement is used to remove columns from a table. | `ALTER TABLE employee DROP COLUMN mobile ;` |
|ALTER TABLE - RENAME COLUMN| `ALTER TABLE table_name RENAME COLUMN current_column_name TO new_column_name;` | `ALTER TABLE RENAME COLUMN` statement is used to rename the columns in a table. | `ALTER TABLE employee RENAME COLUMN first_name TO name ;` |
|TRUNCATE TABLE | `TRUNCATE TABLE table_name IMMEDIATE;` | `TRUNCATE` statement is used to delete all of the rows in a table. The IMMEDIATE specifies to process the statement immediately and that it cannot be undone. | `TRUNCATE TABLE employee IMMEDIATE ;` |
|DROP TABLE | `DROP TABLE table_name ;	` | Use the `DROP TABLE`  statement to delete a table from a database. If you delete a table that contains data, by default the data will be deleted alongside the table.| `DROP TABLE employee;` |
