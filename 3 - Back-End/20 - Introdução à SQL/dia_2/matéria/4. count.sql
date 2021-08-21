-- Quantas senhas temos cadastradas nessa tabela?
-- 1
SELECT COUNT(password) FROM sakila.staff;

-- Quantas pessoas temos no total trabalhando para nossa empresa?
-- 2
SELECT COUNT(staff_id) FROM sakila.staff;

-- Quantos emails temos cadastrados nessa tabela?
-- 2
SELECT COUNT(email) FROM sakila.staff;