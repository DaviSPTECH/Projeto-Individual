-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE shonentech;

USE shonentech;

CREATE TABLE usuario (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
email VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE carta (
id_carta INT PRIMARY KEY AUTO_INCREMENT,
personagem VARCHAR(45),
anime VARCHAR(45),
nivel INT
);

CREATE TABLE pack (
id_pack INT AUTO_INCREMENT,
fk_usuario INT,
fk_carta INT,
versao INT,
preco INT,
CONSTRAINT pkComposta PRIMARY KEY (id_pack, fk_usuario, fk_carta),
CONSTRAINT fk_usuario_pack FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
CONSTRAINT fk_carta_pack FOREIGN KEY (fk_carta) REFERENCES carta(id_carta)
);

CREATE TABLE colecao(
id_colecao INT AUTO_INCREMENT,
fk_usuario INT,
fk_carta INT,
CONSTRAINT pk_composta PRIMARY KEY (id_colecao, fk_usuario, fk_carta),
CONSTRAINT fk_usuario_colecao FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
CONSTRAINT fk_carta_colecao FOREIGN KEY (fk_carta) REFERENCES carta(id_carta)
);

CREATE TABLE creditos (
id_creditos INT PRIMARY KEY AUTO_INCREMENT,
qtd_creditos INT,
fk_usuario INT,
CONSTRAINT fk_usuario_creditos FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario));

INSERT INTO carta (personagem, anime, nivel) VALUES
('Ace', 'One Piece', 91),
('AllMight', 'My Hero Academia', 94),
('Black', 'Dragon Ball', 98),
('Jiraiya', 'Naruto', 91),
('Sasuke', 'Naruto', 97),
('Sinbad', 'Magi', 95),
('Toshiro', 'Bleach', 91),
('Bee', 'Naruto', 95),
('Killua', 'Hunter x Hunter', 93),
('Tatsumaki', 'One Punch Man', 97),
('Yoruichi', 'Bleach', 95),
('Morgiana', 'Magi', 92),
('Sakura', 'Naruto', 92),
('Law', 'One Piece', 96),
('Shimura', 'My Hero Academia', 93),
('Konan', 'Naruto', 95),
('Edward', 'Fullmetal Alchemist', 92),
('Mihawk', 'One Piece', 97),
('Gon', 'Hunter x Hunter', 95),
('Yusuke', 'Yu Yu Hakusho', 91);