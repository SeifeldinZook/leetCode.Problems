-- 184. Department Highest Salary

-- Table: Employee
-- +--------------+---------+
-- | Column Name  | Type    |
-- +--------------+---------+
-- | id           | int     |
-- | name         | varchar |
-- | salary       | int     |
-- | departmentId | int     |
-- +--------------+---------+
-- id is the primary key column for this table.
-- departmentId is a foreign key of the ID from the Department table.
-- Each row of this table indicates the ID, name, and salary of an employee. It also contains the ID of their department.


-- Table: Department
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | name        | varchar |
-- +-------------+---------+
-- id is the primary key column for this table.
-- Each row of this table indicates the ID of a department and its name.

-- Write an SQL query to find employees who have the highest salary in each of the departments.
-- Return the result table in any order.
-- The query result format is in the following example.


-- Example 1:
-- Input: 
-- Employee table:
-- +----+-------+--------+--------------+
-- | id | name  | salary | departmentId |
-- +----+-------+--------+--------------+
-- | 1  | Joe   | 70000  | 1            |
-- | 2  | Jim   | 90000  | 1            |
-- | 3  | Henry | 80000  | 2            |
-- | 4  | Sam   | 60000  | 2            |
-- | 5  | Max   | 90000  | 1            |
-- +----+-------+--------+--------------+
-- Department table:
-- +----+-------+
-- | id | name  |
-- +----+-------+
-- | 1  | IT    |
-- | 2  | Sales |
-- +----+-------+
-- Output: 
-- +------------+----------+--------+
-- | Department | Employee | Salary |
-- +------------+----------+--------+
-- | IT         | Jim      | 90000  |
-- | Sales      | Henry    | 80000  |
-- | IT         | Max      | 90000  |
-- +------------+----------+--------+
-- Explanation: Max and Jim both have the highest salary in the IT department and Henry has the highest salary in the Sales department.


SELECT DISTINCT 
  Department.name AS "Department", E1.name AS "Employee", E1.salary 
FROM 
  Employee E1,
  Employee E2
JOIN
  (SELECT MAX(salary) AS "Max", departmentId FROM Employee
  GROUP BY departmentId) AS E3
JOIN
  Department
WHERE
  E1.departmentId = Department.id
AND
  E1.departmentId = E2.departmentId
AND
  E2.departmentId = E3.departmentId
AND 
  E3.max = E1.salary

-- Another Solution
SELECT
  Department.name AS 'Department',
  Employee.name AS 'Employee',
  Salary
FROM
  Employee
    JOIN
  Department ON Employee.DepartmentId = Department.Id
WHERE
  (Employee.DepartmentId , Salary) IN
  (SELECT
      DepartmentId, MAX(Salary)
    FROM
      Employee
    GROUP BY DepartmentId
  )
; 