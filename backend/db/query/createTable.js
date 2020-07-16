const createTodoListTable =
`CREATE TABLE TODOLIST (
  id INT PRIMARY KEY AUTO_INCREMENT,
  idx INT,
  title VARCHAR(64),
  content TEXT,
  status VARCHAR(64),
  author VARCHAR(64)
  );`;

const createUserTable = 
`
CREATE TABLE USER (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(64),
  authorization BOOLEAN
  );
`;

module.exports =  {createTodoListTable, createUserTable};