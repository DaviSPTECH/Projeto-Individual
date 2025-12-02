var express = require("express");
var router = express.Router();

var cartasController = require("../controllers/cartasController");

router.post("/inserir_colecao", function (req, res) {
    cartasController.inserir_colecao(req, res);
});

router.post("/obter_colecao", function (req, res) {
    cartasController.obter_colecao(req, res);
});

router.post("/kpi1", function (req, res) {
    cartasController.kpi1(req, res);
});

router.post("/kpi2", function (req, res) {
    cartasController.kpi2(req, res);
});

router.post("/kpi3", function (req, res) {
    cartasController.kpi3(req, res);
});

router.post("/top_personagens", function (req, res) {
    cartasController.top_personagens(req, res);
});

module.exports = router;