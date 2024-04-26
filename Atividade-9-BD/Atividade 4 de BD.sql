-- Consulta 1
SELECT p.*
FROM Pedidos p
JOIN Clientes c ON p.cliente_id = c.id
WHERE c.nome_completo IN ('Elizabeth Melo Girão', 'Muriel Mondragão Vilarinho');

-- Consulta 2 
SELECT *
FROM Pedidos
WHERE data_pedido > '2020-05-02'
ORDER BY data_pedido DESC;

-- Consulta 3
SELECT nome_completo, data_nascimento, origem
FROM Clientes
ORDER BY nome_completo ASC, data_nascimento ASC;

-- Consulta 4
SELECT DISTINCT cliente_id
FROM Pedidos
ORDER BY cliente_id;

-- Consulta 5
SELECT nome, valor
FROM Produtos
WHERE nome LIKE '%nokia%';

-- Consulta 6
SELECT DISTINCT produto_id
FROM Pedidos
ORDER BY produto_id;

-- Consulta 7
SELECT nome_completo, cpf, score
FROM Clientes
WHERE data_nascimento BETWEEN '1950-01-01' AND '2000-12-31'
    AND nome_completo LIKE '%a';

-- Consulta 8
SELECT p.id AS codigo_pedido, p.produto_id AS codigo_produto
FROM Pedidos p
JOIN Produtos pr ON p.produto_id = pr.id
WHERE pr.valor > 3000.00
ORDER BY p.id;
