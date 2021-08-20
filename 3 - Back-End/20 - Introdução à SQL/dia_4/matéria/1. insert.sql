-- ? SINTAXE
INSERT INTO nome_da_tabela (coluna1, coluna2)
VALUES ('valor_coluna1', 'valor_coluna2');
INSERT INTO nome_da_tabela (coluna1, coluna2) VALUES
('valor_1','valor_2'),
('valor_3','valor_4'),
('valor_5','valor_6');


-- * a tabela pessoas já tem 4 - gloria
INSERT IGNORE INTO pessoas (id, name) VALUES
(4,'Gloria'), -- Sem o IGNORE, essa linha geraria um erro e o INSERT não continuaria.
(5,'Amanda');
-- Pesquisando agora, você verá que a informação duplicada não foi inserida.
-- Porém os dados corretos foram inseridos com sucesso.
SELECT * FROM pessoas;


-- * na tabela abaixo não precisa colocar o dado de actor_id pois é um dado que possui auto_increment
INSERT INTO sakila.actor (first_name, last_name)
VALUES('Marcelo','Santos');


-- * É possível inserir dados a partir de outra tabela usando INSERT INTO SELECT
-- * extraindo a coluna1 e a coluna2 da tabelaB e as inserindo na tabelaA , de acordo com a condição que for passada no WHERE
INSERT INTO tabelaA (coluna1, coluna2)
SELECT tabelaB.coluna1, tabelaB.coluna2
FROM tabelaB
WHERE tabelaB.nome_da_coluna <> 'algumValor'
ORDER BY tabelaB.coluna_de_ordenacao;


-- * É possível usar também SELECT * FROM e copiar todos os dados de todas as colunas de uma tabela para outra, mas nessa situação a tabelaA e a tabelaB precisam obrigatoriamente possuir a mesma quantidade de colunas, e os tipos de dados das colunas correspondentes devem ser iguais
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;


