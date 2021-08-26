-- * o INNER JOIN permite retornar todos os resultados em que a condição da cláusula ON for satisfeita
-- ! SINTAXE
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

