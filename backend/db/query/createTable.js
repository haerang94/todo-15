const createTodoListTable = `CREATE TABLE TODOLIST (
  id INT PRIMARY KEY AUTO_INCREMENT,
  idx INT,
  title VARCHAR(64),
  content TEXT,
  groupId VARCHAR(64),
  author VARCHAR(64)
  );`;

const createUserTable = `
CREATE TABLE USER (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(64),
  authorization BOOLEAN
  );
`;

const createLogTable = `
CREATE TABLE LOG (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(64) not null,
  actionType VARCHAR(32) not null,
  time VARCHAR(32) not null,
  previousContent VARCHAR(64),
  presentContent VARCHAR(64) not null,
  previousColumn VARCHAR(64),
  presentColumn VARCHAR(64)
  );
`;
module.exports = { createTodoListTable, createUserTable };
