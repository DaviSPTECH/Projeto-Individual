CREATE DATABASE shonentech;

USE shonentech;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE carta (
id INT PRIMARY KEY AUTO_INCREMENT,
personagem VARCHAR(45),
anime VARCHAR(45),
nivel INT
);

CREATE TABLE pack (
id INT,
fk_usuario INT,
fk_carta INT,
CONSTRAINT pkComposta PRIMARY KEY (id, fk_usuario, fk_carta),
versao INT,
CONSTRAINT chk_versao CHECK (versao IN (3, 7)), -- 3 cartas ou 7 cartas
preco INT,
CONSTRAINT chk_preco CHECK (preco IN (5, 10)), -- 5 creditos ou 10 creditos
CONSTRAINT fk_usuario_pack FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
CONSTRAINT fk_carta_pack FOREIGN KEY (fk_carta) REFERENCES carta(id)
);