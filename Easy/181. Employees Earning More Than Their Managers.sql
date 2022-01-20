-- 181. Employees Earning More Than Their Managers

-- Table: Employee
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | id          | int     |
-- | name        | varchar |
-- | salary      | int     |
-- | managerId   | int     |
-- +-------------+---------+
-- id is the primary key column for this table.
-- Each row of this table indicates the ID of an employee, their name, salary, and the ID of their manager.

-- Write an SQL query to find the employees who earn more than their managers.
-- Return the result table in any order.
-- The query result format is in the following example.


-- Example 1:
-- Input: 
-- Employee table:
-- +----+-------+--------+-----------+
-- | id | name  | salary | managerId |
-- +----+-------+--------+-----------+
-- | 1  | Joe   | 70000  | 3         |
-- | 2  | Henry | 80000  | 4         |
-- | 3  | Sam   | 60000  | Null      |
-- | 4  | Max   | 90000  | Null      |
-- +----+-------+--------+-----------+
-- Output: 
-- +----------+
-- | Employee |
-- +----------+
-- | Joe      |
-- +----------+
-- Explanation: Joe is the only employee who earns more than his manager.

-- Approach 1: Using WHERE clause [Accepted]
SELECT
    tb1.Name AS 'Employee'
FROM
    Employee AS tb1,
    Employee AS tb2
WHERE
    tb1.ManagerId = tb2.Id
    AND tb1.Salary > tb2.Salary

-- Approach 2: Using JOIN clause [Accepted]
SELECT tb1.Name as Employee
FROM Employee as tb1
LEFT JOIN Employee as tb2
ON tb1.ManagerId = tb2.Id
WHERE tb1.Salary > tb2.Salary ;