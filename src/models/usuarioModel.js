var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id_usuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function check_creditos(fk_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function check_creditos():", fk_usuario);
    var instrucaoSql = `
    SELECT qtd_creditos FROM creditos WHERE fk_usuario = ${fk_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function up_creditos(fk_usuario, novo_valor) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function up_creditos():", fk_usuario, novo_valor);
    var instrucaoSql = `
    UPDATE creditos SET qtd_creditos = ${novo_valor} WHERE fk_usuario = ${fk_usuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserir_colecao(fk_usuario, fk_carta) {
    var instrucaoSql = `
        INSERT INTO colecao (fk_usuario, fk_carta) 
        VALUES (${fk_usuario}, ${fk_carta});
    `;
    return database.executar(instrucaoSql);
}

function inicializar_creditos(fk_usuario) {
    var instrucaoSql = `
        INSERT INTO creditos (qtd_creditos, fk_usuario) 
        VALUES (100, ${fk_usuario});
    `;
    return database.executar(instrucaoSql);
}

function obter_colecao_usuario(fk_usuario) {
    var instrucaoSql = `
        SELECT fk_carta FROM colecao 
        WHERE fk_usuario = ${fk_usuario};
    `;
    return database.executar(instrucaoSql);
}


module.exports = {
    autenticar,
    cadastrar,
    check_creditos,
    up_creditos,
    inserir_colecao,
    inicializar_creditos,
    obter_colecao_usuario
};
