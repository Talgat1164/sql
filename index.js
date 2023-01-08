// Показать базы данных
SHOW DATABASES; 

// Создать базу данных
CREATE DATABASE sql_course;

// Удалить базу данных 
DROP DATABASE sql_course;

// Использовать базу данных
USE sql_course;

// Показать таблицы бд 
show tables

// Создать таблицу
CREATE TABLE teachers ( Id INT AUTO_INCREMENT PRIMARY KEY, surname VARCHAR(255));

// Показать структуру таблицы
show columns FROM teachers

// Создание таблицы 1 ко многим 
CREATE TABLE lesson (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  name VARCHAR(255) NOT NULL, 
  teachers_id INT NOT NULL,
  FOREIGN KEY (teachers_id) references teachers(id)
)

// Добавить записи в таблицу 
INSERT INTO teachers (surname) values ('Токаев')

// Добавить колонку в таблицу 
ALTER TABLE teachers ADD age INT

// Обновление данных UPDATE
UPDATE teachers SET age = 22 where id=1;
UPDATE teachers SET age = 22; // изменится у всех 

// Запрос на получение данных таблицы
SELECT * FROM teachers; 
SELECT id FROM teachers; 
SELECT id, surname, surname FROM teachers; 

// Показать данные без повторения 
SELECT DISTINCT surname FROM teachers

// Показать данные с условием 
SELECT DISTINCT surname FROM teachers WHERE id = 1; 
SELECT DISTINCT * FROM teachers WHERE id < 4; 
SELECT DISTINCT * FROM teachers WHERE surname = "Бибер"; 
// LIMIT 
SELECT DISTINCT * FROM teachers WHERE surname = "Токаев" LIMIT 1; 

// Переименовать названия столбцов (только при выводе) 
SELECT id AS 'Идентифекатор', surname as 'Фамилия' FROM teachers; 

// ,,,,,,,,,,,,,,
// СОРТИРОВКА  ORDER BY
// ,,,,,,,,,,,,,,
SELECT * FROM teachers ORDER BY surname; 
SELECT * FROM teachers ORDER BY id DESC; // reverse

//LIKE - выборка по добавочному условию  шаблоны
SELECT * FROM teachers WHERE surname LIKE '%ев'; // % - шаблоны

// AND OR NOT
SELECT * FROM teachers WHERE id > 1 AND age > 30;
SELECT * FROM teachers WHERE id > 3 OR age < 24;
SELECT * FROM teachers WHERE NOT id = 4; 

// BETWEEN
SELECT * FROM teachers WHERE age BETWEEN 25 and 35; 

// DELETE 
DELETE FROM teachers WHERE id = 4; DELETE FROM teachers WHERE id = 4;

//  ДОБАВИТЬ несколько INSERT multi
INSERT INTO lesson (name, teachers_id) VALUES ('Математика',1), ('Физика',2), ('химия',3), ('Физра',1);

// INNER JOIN 
SELECT teachers.surname, lesson.name FROM teachers INNER JOIN lesson ON teachers.id = lesson.teachers_id

// LEFT OUTER JOIN 
SELECT teachers.surname, lesson.name FROM teachers LEFT OUTER JOIN lesson ON teachers.id = lesson.teachers_id

// RIGHT OUTER JOIN 
SELECT teachers.surname, lesson.name FROM teachers RIGHT OUTER JOIN lesson ON teachers.id = lesson.teachers_id

// ОБЕДИНЕНИЕ ТАБЛИЦ UNION 
SELECT * FROM lesson UNION SELECT * FROM teachers;
SELECT * FROM teachers UNION SELECT * FROM lesson;

//  ......................
// АГРЕГАТНЫЕ ФУНКЦИИ 
// .......................
// AVG
SELECT AVG(age) from teachers;

// MAX, MIN 
SELECT MAX(age), MIN(age) from teachers;

// SUM 
SELECT SUM(age) from teachers;

// COUNT 
SELECT age, COUNT(age) FROM teachers GROUP BY age