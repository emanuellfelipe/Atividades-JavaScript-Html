-- Consulta 1
SELECT p.id AS codigo_pedido, SUM(pr.valor) AS valor_total
FROM Pedidos p
JOIN Produtos pr ON p.produto_id = pr.id
GROUP BY p.id
HAVING COUNT(p.produto_id) >= 2
ORDER BY p.id;

-- Consulta 2 
SELECT v.id AS codigo_vendedor, COUNT(p.id) AS quantidade_pedidos
FROM Vendedores v
JOIN Pedidos p ON v.id = p.vendedor_id
GROUP BY v.id
HAVING COUNT(p.id) > 1
ORDER BY quantidade_pedidos DESC, codigo_vendedor;

-- Consulta 3
SELECT p.id AS codigo_pedido, SUM(pr.valor) AS valor_total
FROM Pedidos p
JOIN Produtos pr ON p.produto_id = pr.id
GROUP BY p.id
HAVING COUNT(p.produto_id) > 3 AND SUM(pr.valor) > 8000.00
ORDER BY valor_total DESC;

-- Consulta 4
SELECT nome_completo, cpf, score,
    CASE
        WHEN score >= 80 THEN 'Ouro'
        WHEN score >= 60 THEN 'Prata'
        ELSE 'Bronze'
    END AS medalha
FROM Clientes
ORDER BY medalha, nome_completo;


-- Consulta 5
SELECT c.nome_completo, c.cpf, c.score, pr.nome AS nome_produto, pr.valor
FROM Clientes c
CROSS JOIN Produtos pr
WHERE c.nome_completo IN ('Francis Borba', 'Isis Cirne Veleda')
ORDER BY c.nome_completo;


-- Consulta 6
SELECT p.id AS codigo_pedido, p.data_pedido,
    CASE WHEN p.vendedor_id IS NOT NULL THEN 'Sim' ELSE 'Não' END AS teve_vendedor,
    pr.nome AS nome_produto
FROM Pedidos p
LEFT JOIN Produtos pr ON p.produto_id = pr.id
ORDER BY p.id;


-- Consulta 7
SELECT p.id AS codigo_pedido, COUNT(p.produto_id) AS quantidade_produtos
FROM Pedidos p
WHERE p.data_pedido BETWEEN '2020-01-01' AND '2020-12-31'
GROUP BY p.id;


-- Consulta 8
SELECT nome_completo, score, EXTRACT(MONTH FROM data_nascimento) AS mes_aniversario
FROM Clientes
WHERE score > 60;
