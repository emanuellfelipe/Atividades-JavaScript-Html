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
