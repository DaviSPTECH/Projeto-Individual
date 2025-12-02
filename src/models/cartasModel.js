var database = require("../database/config")

function inserir_colecao(fk_usuario, fk_carta) {
    var instrucaoSql = `
        INSERT INTO colecao (fk_usuario, fk_carta) VALUES (${fk_usuario}, ${fk_carta});
    `;
    
    return database.executar(instrucaoSql);
}

function obter_colecao(fk_usuario) {
    var instrucaoSql = `
        SELECT fk_carta FROM colecao WHERE fk_usuario = ${fk_usuario};
    `;
    return database.executar(instrucaoSql);
}

function kpi1(fk_usuario) {
    var instrucaoSql = `
        SELECT fk_carta, COUNT(*) AS qtd FROM colecao WHERE fk_usuario = ${fk_usuario} GROUP BY fk_carta 
        ORDER BY qtd DESC;
    `;
    return database.executar(instrucaoSql);
}

function kpi2(fk_usuario) {
    var instrucaoSql = `
        SELECT COUNT(*) AS total_cartas FROM colecao JOIN usuario
        WHERE fk_usuario = id_usuario AND id_usuario = ${fk_usuario};
    `;
    return database.executar(instrucaoSql);
}

function kpi3(fk_usuario) {
    var instrucaoSql = `
        SELECT AVG(c.nivel) AS media_poder FROM colecao JOIN carta c ON colecao.fk_carta = c.id_carta
        WHERE colecao.fk_usuario = ${fk_usuario};
    `;
    return database.executar(instrucaoSql);
}

function top_personagens(fk_usuario) {
    var instrucaoSql = `
        SELECT fk_carta, COUNT(*) as qtd FROM colecao WHERE fk_usuario = ${fk_usuario} 
        GROUP BY fk_carta ORDER BY qtd DESC;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    inserir_colecao,
    obter_colecao,
    kpi1,
    kpi2,
    kpi3,
    top_personagens
};