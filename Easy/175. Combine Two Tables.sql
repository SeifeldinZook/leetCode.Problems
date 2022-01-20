-- 175. Combine Two Tables

-- Create table If Not Exists Person (personId int, firstName varchar(255), lastName varchar(255))
-- Create table If Not Exists Address (addressId int, personId int, city varchar(255), state varchar(255))
-- Truncate table Person
-- insert into Person (personId, lastName, firstName) values ('1', 'Wang', 'Allen')
-- insert into Person (personId, lastName, firstName) values ('2', 'Alice', 'Bob')
-- Truncate table Address
-- insert into Address (addressId, personId, city, state) values ('1', '2', 'New York City', 'New York')
-- insert into Address (addressId, personId, city, state) values ('2', '3', 'Leetcode', 'California')

-- Table: Person
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | personId    | int     |
-- | lastName    | varchar |
-- | firstName   | varchar |
-- +-------------+---------+
-- personId is the primary key column for this table.
-- This table contains information about the ID of some persons and their first and last names.

-- Table: Address
-- +-------------+---------+
-- | Column Name | Type    |
-- +-------------+---------+
-- | addressId   | int     |
-- | personId    | int     |
-- | city        | varchar |
-- | state       | varchar |
-- +-------------+---------+
-- addressId is the primary key column for this table.
-- Each row of this table contains information about the city and state of one person with ID = PersonId.

-- Write an SQL query to report the first name, last name, city, and state of each person in the Person table.
-- If the address of a personId is not present in the Address table, report null instead.
-- Return the result table in any order.
-- The query result format is in the following example.

-- Example 1:
-- Input: 
-- Person table:
-- +----------+----------+-----------+
-- | personId | lastName | firstName |
-- +----------+----------+-----------+
-- | 1        | Wang     | Allen     |
-- | 2        | Alice    | Bob       |
-- +----------+----------+-----------+
-- Address table:
-- +-----------+----------+---------------+------------+
-- | addressId | personId | city          | state      |
-- +-----------+----------+---------------+------------+
-- | 1         | 2        | New York City | New York   |
-- | 2         | 3        | Leetcode      | California |
-- +-----------+----------+---------------+------------+
-- Output: 
-- +-----------+----------+---------------+----------+
-- | firstName | lastName | city          | state    |
-- +-----------+----------+---------------+----------+
-- | Allen     | Wang     | Null          | Null     |
-- | Bob       | Alice    | New York City | New York |
-- +-----------+----------+---------------+----------+
-- Explanation: 
-- There is no address in the address table for the personId = 1 so we return null in their city and state.
-- addressId = 1 contains information about the address of personId = 2.

-- ************************************* CORRECT ANSWER *************************************
SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM Person
LEFT JOIN Address
ON Address.personId=Person.personId
-- Output: 
-- +-----------+----------+---------------+----------+
-- | firstName | lastName | city          | state    |
-- +-----------+----------+---------------+----------+
-- | Allen     | Wang     | Null          | Null     |
-- | Bob       | Alice    | New York City | New York |
-- +-----------+----------+---------------+----------+
-- The LEFT JOIN keyword returns all records from the left table (table1), 
-- and the matching records from the right table (table2). 
-- The result is 0 records from the right side, if there is no match.

-- ************************************* NOTE RIGHT JOIN OUTPUT *************************************
SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM Person
RIGHT JOIN Address
ON Address.personId=Person.personId
-- Output: 
-- +-----------+----------+---------------+------------+
-- | firstName | lastName | city          | state      |
-- +-----------+----------+---------------+------------+
-- | Bob       | Alice    | New York City | New York   |
-- | Null      | Null     | Leetcode      | California |
-- +-----------+----------+---------------+------------+
-- The RIGHT JOIN keyword returns all records from the right table (table2), 
-- and the matching records from the left table (table1).
-- The result is 0 records from the left side, if there is no match.

-- ************************************* NOTE INNER JOIN OUTPUT *************************************
SELECT Person.firstName, Person.lastName, Address.city, Address.state
FROM Person
INNER JOIN Address
ON Address.personId=Person.personId
-- Output: 
-- +-----------+----------+---------------+------------+
-- | firstName | lastName | city          | state      |
-- +-----------+----------+---------------+------------+
-- | Bob       | Alice    | New York City | New York   |
-- +-----------+----------+---------------+------------+
-- The INNER JOIN keyword selects records that have matching values in both tables.
