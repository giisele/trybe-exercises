-- * Estrutura padrão de uma stored procedure
USE banco_de_dados; -- obrigatório para criar a procedure no banco correto
DELIMITER $$ -- definindo delimitador

CREATE PROCEDURE nome_da_procedure(@parametro1, @parametro2, ..., @parametroN) -- parâmetros
BEGIN -- delimitando o início do código SQL

END $$ -- delimitando o final do código SQL

DELIMITER ; -- muda o delimitador de volta para ; - o espaço entre DELIMITER e o ';' é necessário


-- * Procedure sem parâmetros normalmente é utilizada para realizar queries mais simples.
USE sakila;
DELIMITER $$
CREATE PROCEDURE ShowAllActors()
BEGIN
  SELECT * FROM sakila.actor;
END $$
DELIMITER ;

-- Como usar:
CALL ShowAllActors();


-- ? 1 - Delimiter
-- * A palavra-chave DELIMITER é usada para definir qual símbolo representa o final da procedure declarada. Aqui estamos usando $$ , porém é permitido usar outros símbolos como // ou até mesmo ; para retornar ao DELIMITER como padrão default. Atenção, não é permitido usar \ , pois é um caractere especial do MySQL.
-- * O DELIMITER precisa ser usado para que o MySQL não interprete o primeiro ponto e vírgula encontrado como o final da declaração na sua procedure.
-- ? 2 - Variáveis
-- * O MySQL possui a funcionalidade de criar e usar variáveis, assim como em outras linguagens de programação. Essas variáveis também podem ser usadas em procedures .
-- * No MySQL existem três principais tipos de variáveis, sendo elas:
-- User-defined variables;
-- Local Variables;
-- Server System Variables.
-- ? 3 - Tipos de dados
-- * Existem vários tipos de dados no MySQL que vão além de apenas numéricos e strings. É relevante que você tenha uma noção básica, sabendo que esses tipos no MySQL são determinados por meio de algumas características:
-- Tipo de valor que representa;
-- O espaço ocupado e se possui comprimento fixo ou variável;
-- Se os valores podem ser indexados ou não;
-- Comparação de valores de um tipo de dado específico pelo MySQL .
-- * Os principais tipos de dados do MySQL são:
-- Tipos de String
  -- VARCHAR : Uma string não binária de comprimento variável;
  -- CHAR : Uma string não binária (caractere) de comprimento fixo;
  -- TEXT : Uma pequena string não binária.
-- Tipos Numéricos
  -- TYNINT : Um número inteiro muito pequeno;
  -- INT : Um inteiro padrão;
  -- BIGINT : Um grande número inteiro;
  -- DECIMAL : Um número de ponto fixo.


-- ? Temos os seguintes tipos de stored procedures:
-- * Procedure sem parâmetros;
-- * Procedure com parâmetros de entrada (IN) ;
-- * Procedure com parâmetros de saída (OUT) ;
-- * Procedure com parâmetros de entrada e saída (IN-OUT) .


-- ? Procedure com parâmetros de entrada (IN):
-- * Para criar procedures com funcionalidades mais elaboradas, podemos passar parâmetros de entrada. Ao definir um parâmetro do tipo IN , podemos usá-lo e modificá-lo dentro da nossa procedure.
-- * Exemplo: Foi criada uma procedure que recebe como parâmetro uma sílaba (syllable) e busca na tabela actor todos atores quem contêm aquela sílaba no nome.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar:
CALL ShowActorsWithSyllable('lope');



-- ? Procedure com parâmetros de saida (OUT):
-- * O parâmetro OUT é útil quando você precisa que algo seja avaliado ou encontrado dentro de uma query e te retorne esse valor para que algo adicional possa ser feito com ele.
-- * Exemplo: Estamos recebendo aqui o título de um filme como valor de entrada e depois buscando dentro da procedure a duração média de um empréstimo daquele filme. Feito isso, ele é inserido em uma variável que pode ser usada posteriormente.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowAverageRentalDurationOfMovie(
    IN film_name VARCHAR(300),
    OUT media_aluguel_em_dias DOUBLE
)
BEGIN
    SELECT AVG(rental_duration) INTO media_aluguel_em_dias
    FROM sakila.film
    WHERE title = film_name;
END $$

DELIMITER ;

-- Como usar:
CALL ShowAverageRentalDurationOfMovie('ACADEMY DINOSAUR', @media_de_dias);
SELECT @media_de_dias;

-- ? Resultado da procedure ShowAverageRentalDurationOfMovie
-- * Procedure com parâmetros de entrada-saida (IN-OUT):
-- * O IN-OUT deve ser usado quando é necessário que um parâmetro possa ser modificado tanto antes como durante a execução de uma procedure.
-- * Exemplo: Estamos gerando um novo nome para um filme, usando como base a variável film_name , que deve ser criada e passada como parâmetro para a procedure. O parâmetro sofrerá alterações dentro da procedure, podendo ser usado posteriormente com o novo nome.
USE sakila;
DELIMITER $$

CREATE PROCEDURE NameGenerator(INOUT film_name VARCHAR(300))
BEGIN
    SELECT CONCAT('ULTRA ', film_name, ' THE BEST MOVIE OF THE CENTURY')
    INTO film_name;
END $$

DELIMITER ;

-- Como usar:
SELECT 'ACE GOLDFINGER' INTO @movie_title;
CALL NameGenerator(@movie_title);
SELECT @movie_title;


