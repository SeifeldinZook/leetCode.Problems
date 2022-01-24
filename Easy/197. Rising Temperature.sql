-- 197. Rising Temperature

-- Table: Weather
-- +---------------+---------+
-- | Column Name   | Type    |
-- +---------------+---------+
-- | id            | int     |
-- | recordDate    | date    |
-- | temperature   | int     |
-- +---------------+---------+
-- id is the primary key for this table.
-- This table contains information about the temperature on a certain day.

-- Write an SQL query to find all dates' Id with higher temperatures compared to its previous dates (yesterday).
-- Return the result table in any order.
-- The query result format is in the following example.


-- Example 1:
-- Input: 
-- Weather table:
-- +----+------------+-------------+
-- | id | recordDate | temperature |
-- +----+------------+-------------+
-- | 1  | 2015-01-01 | 10          |
-- | 2  | 2015-01-02 | 25          |
-- | 3  | 2015-01-03 | 20          |
-- | 4  | 2015-01-04 | 30          |
-- +----+------------+-------------+
-- Output: 
-- +----+
-- | id |
-- +----+
-- | 2  |
-- | 4  |
-- +----+
-- Explanation: 
-- In 2015-01-02, the temperature was higher than the previous day (10 -> 25).
-- In 2015-01-04, the temperature was higher than the previous day (20 -> 30).

-- Step 1
-- W1 is Yesterday, W2 is Today
-- Hence We want to know an information of one row based on another row IN THE SAME TABLE,
-- We use self JOIN
SELECT Today.id FROM Weather Today JOIN Weather Yesterday
-- Step 2
-- MySQL uses DATEDIFF to compare two date type values.
-- So, we can get the result by joining this table weather with itself and use this DATEDIFF() function.
ON DATEDIFF(Today.recordDate, Yesterday.recordDate) = 1
-- Step 3
WHERE Today.temperature > Yesterday.temperature

-- Another Solution
SELECT W2.id FROM Weather W1 JOIN Weather W2
ON DATEDIFF(W1.recordDate, W2.recordDate) = -1
AND W2.temperature > W1.temperature