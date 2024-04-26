-- Criação da tabela de Clientes
CREATE TABLE Clientes (
    id SERIAL PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    data_nascimento DATE NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    origem VARCHAR(20) CHECK (origem IN ('Loja', 'Site')),
    score INTEGER CHECK (score >= 0),
    UNIQUE (cpf)
);

-- Criação da tabela de Produtos
CREATE TABLE Produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    categoria VARCHAR(50) NOT NULL
);

-- Criação da tabela de Vendedores
CREATE TABLE Vendedores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    matricula VARCHAR(20) NOT NULL,
    UNIQUE (matricula)
);

-- Criação da tabela de Pedidos
CREATE TABLE Pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES Clientes(id),
    produto_id INTEGER REFERENCES Produtos(id),
    quantidade INTEGER NOT NULL,
    data_pedido DATE NOT NULL
);

-- Criação da tabela de Categoria
CREATE TABLE Categoria (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- Inserção de registros na tabela de Clientes
INSERT INTO Clientes (nome_completo, data_nascimento, cpf, origem, score)
VALUES
    ('Elizabeth Melo Girão', '1975-08-10', '111.222.333-44', 'Loja', 720),
    ('Muriel Mondragão Vilarinho', '1978-05-20', '444.555.666-77', 'Site', 800),
    ('Maria Silva', '1990-05-15', '123.456.789-00', 'Loja', 800),
    ('João Santos', '1985-08-20', '987.654.321-00', 'Site', 650),
    ('Ana Pereira', '2000-03-10', '111.222.333-44', 'Loja', 720);

-- Inserção de registros na tabela de Categoria
INSERT INTO Categoria (nome)
VALUES
    ('Eletrônicos'),
    ('Roupas'),
    ('Alimentos');

-- Inserção de registros na tabela de Produtos
INSERT INTO Produtos (nome, valor, categoria)
VALUES
    ('Janela de Vidro', 350.00, 'Eletrônicos'),
    ('Tanque de Lavanderia', 450.00, 'Roupas'),
    ('Lixeira de Cozinha', 30.00, 'Alimentos'),
    ('Mesa de Jantar', 600.00, 'Roupas'),
    ('Cadeira de Escritório', 120.00, 'Eletrônicos'),
    ('Armário de Cozinha', 800.00, 'Alimentos'),
    ('Forno Elétrico', 280.00, 'Eletrônicos'),
    ('Secadora de Roupas', 350.00, 'Roupas'),
    ('Home Cinema', 1200.00, 'Eletrônicos'),
    ('Celular Modelo A', 800.00, 'Eletrônicos'),
    ('Celular Modelo B', 700.00, 'Eletrônicos');

-- Inserção de registros na tabela de Vendedores
INSERT INTO Vendedores (nome, matricula)
VALUES
    ('Carlos Silva', 'V12345'),
    ('Ana Rodrigues', 'V67890'),
    ('Pedro Santos', 'V54321');

-- Inserção de registros na tabela de Pedidos
INSERT INTO Pedidos (cliente_id, produto_id, quantidade, data_pedido)
VALUES
    (1, 1, 2, '2020-05-03'),
    (2, 3, 1, '2020-05-04');
