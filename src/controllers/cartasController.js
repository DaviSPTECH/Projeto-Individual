var cartasModel = require("../models/cartasModel");

// Insert das cartas na tabela coleção
function inserir_colecao(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;
    var fk_carta = req.body.fk_cartaServer;

    cartasModel.inserir_colecao(fk_usuario, fk_carta)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}


// Select de todas as cartas obtidas
function obter_colecao(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;

    cartasModel.obter_colecao(fk_usuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function kpi1(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;

    cartasModel.kpi1(fk_usuario)
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function kpi2(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;

    cartasModel.kpi2(fk_usuario)
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function kpi3(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;

    cartasModel.kpi3(fk_usuario)
        .then(function (resultado) {
            res.json(resultado[0]);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

function top_personagens(req, res) {
    var fk_usuario = req.body.fk_usuarioServer;

    cartasModel.top_personagens(fk_usuario)
        .then(function (resultado) {
            res.json(resultado);
        }).catch(function (erro) {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    inserir_colecao,
    obter_colecao,
    kpi1,
    kpi2,
    kpi3,
    top_personagens
}