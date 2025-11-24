var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/creditos", function (req, res) {
    usuarioController.check_creditos(req, res);
});

router.post("/up_creditos", function (req, res) {
    usuarioController.up_creditos(req, res);
});

router.post("/inserir_carta", function (req, res) {
    usuarioController.inserir_colecao(req, res);
});

router.post("/obter_colecao", function (req, res) {
    usuarioController.obter_colecao_usuario(req, res);
});

module.exports = router;