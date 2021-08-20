-- 1. Insira um novo funcionário na tabela sakila.staff .
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Marcelo', 'Santos', 3, 'marcelosantos@gmail.com', 1, 1, 'masantos', 'asodjasodijfg');

-- 2. Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione "Table Inspector". Clique na aba "columns" e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa explorada!
-- * staff_id é primary_key e incrementado automaticamente, email e password podem ser nulos e active tem default 1

-- 3. Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query .
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES
('Maria', 'das Graças', 7, 1, 'mariazinha'),
('Fernando', 'Albuquerque', 9, 1, 'srfernando');

-- 4. Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
INSERT INTO sakila.actor (first_name, last_name)
SELECT sakila.customer.first_name, sakila.customer.last_name
FROM sakila.customer
ORDER BY sakila.customer.first_name
LIMIT 5;

-- 5. Cadastre três categorias de uma vez só na tabela sakila.category .
INSERT INTO sakila.category (name)
VALUES ('Category1'), ('Category2'), ('Category3');

-- 6. Cadastre uma nova loja na tabela sakila.store .
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (6, 1);
