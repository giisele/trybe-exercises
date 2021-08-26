-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
USE sakila;
DELIMITER $$

CREATE FUNCTION GetPaymentByCustomer(customer_id INT)
RETURNS INT READS SQL DATA
BEGIN
  DECLARE total_amount INT;
  SELECT COUNT(*)
  FROM payment
  WHERE payment.customer_id = customer_id INTO total_amount;
  RETURN total_amount;
END $$

DELIMITER ;

-- Como usar:
SELECT GetPaymentByCustomer(1);

-- 2. Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
USE sakila
DELIMITER $$

CREATE FUNCTION GetRelatedFilm (inventory_id INT)
RETURNS VARCHAR(200) READS SQL DATA
BEGIN
  DECLARE related_film VARCHAR(200);
  SELECT DISTINCT f.title FROM film f
  INNER JOIN inventory i
  ON i.film_id = f.film_id
  WHERE i.inventory_id = inventory_id
  INTO related_film;
  RETURN related_film;
END $$

DELIMITER ;

SELECT GetRelatedFilm(3);

-- 3. Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
USE sakila
DELIMITER $$

CREATE FUNCTION GetQuantityOfFilmsByCategory (category VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
  DECLARE quantity_films INT;
  SELECT COUNT(*) FROM category c
  INNER JOIN film_category fc
  ON fc.category_id = c.category_id
  WHERE c.name = category
  INTO quantity_films;
  RETURN quantity_films;
END $$

DELIMITER ;

SELECT GetQuantityOfFilmsByCategory('Action');
