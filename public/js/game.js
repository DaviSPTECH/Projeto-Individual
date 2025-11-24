var cartas = [
    ``,
    `assets/imgs/card_ace.png`,
    `assets/imgs/card_allmight.png`, 
    `assets/imgs/card_black.png`,
    `assets/imgs/card_jiraiya.png`,
    `assets/imgs/card_sasuke.png`,
    `assets/imgs/card_sinbad.png`,
    `assets/imgs/card_toshiro.png`,
    `assets/imgs/card_bee.png`,
    `assets/imgs/card_killua.png`,
    `assets/imgs/card_tatsumaki.png`,
    `assets/imgs/card_yoruichi.png`,
    `assets/imgs/card_morgiana.png`,
    `assets/imgs/card_sakura.png`,
    `assets/imgs/card_law.png`,
    `assets/imgs/card_shimura.png`,
    `assets/imgs/card_konan.png`,
    `assets/imgs/card_edward.png`,
    `assets/imgs/card_mihawk.png`,
    `assets/imgs/card_gon.png`,
    `assets/imgs/card_yusuke.png`
];

var total_creditos = 0;
var cartas_obtidas = [];

function atualizar_creditos(novo_valor) {

    novo_valor = Number(novo_valor);
    
    fetch("/usuarios/up_creditos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO,
            novo_valor: novo_valor
        })
    }).then(function() {
        creditos.innerHTML = novo_valor;
        sessionStorage.QTD_CREDITOS = novo_valor;
        total_creditos = novo_valor;
    });
}

function inserir_cartas(fk_carta) {
    fetch("/usuarios/inserir_carta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO,
            fk_cartaServer: fk_carta
        })
    });
}

// Abrindo e descontando os créditos do pack1
function pack1() {
    total_creditos = Number(sessionStorage.QTD_CREDITOS) || 0;
    
    if (total_creditos >= 5) {
        total_creditos -= 5;
        atualizar_creditos(total_creditos);

        var msg = ``;

        for (var i = 0; i < 3; i++) {

            var carta_id = Math.floor(Math.random() * 20) + 1;
            msg += `<img src="${cartas[carta_id]}" class="carta-img">`;
            inserir_cartas(carta_id);
            cartas_obtidas.push(cartas[carta_id]);
        }

        div_msg.innerHTML = msg;
        new_cartas.showModal();

    } else {

        alert(`Créditos insuficientes!`);
    }
}

// Mesmo procedimento do pack1, alterando alguns valores
function pack2() {
    total_creditos = Number(sessionStorage.QTD_CREDITOS) || 0;
    
    if (total_creditos >= 10) {
        total_creditos -= 10;
        atualizar_creditos(total_creditos);

        var msg = ``;

        for (var i = 0; i < 7; i++) {

            var carta_id = Math.floor(Math.random() * 20) + 1;
            msg += `<img src="${cartas[carta_id]}" class="carta-img">`;
            inserir_cartas(carta_id);
            cartas_obtidas.push(cartas[carta_id]);
        }

        div_msg.innerHTML = msg;
        new_cartas.showModal();

    } else {

        alert(`Créditos insuficientes!`);
    }
}


function obtidas() {
    fetch("/usuarios/obter_colecao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {
        return resposta.json();
    }).then(function (cartas_do_banco) {
        var msg = ``;
        
        for (var i = 0; i < cartas_do_banco.length; i++) {
            msg += `<img src="${cartas[cartas_do_banco[i].fk_carta]}" class="carta-img">`;
        }
        
        div_msg1.innerHTML = msg;
        my_cartas.showModal();
    });
}

// Redirecionando para a dashboard
function dashboard() {
    window.location.href = "./dashboard/dashboard.html";
}

function check_creditos() {
    fetch("/usuarios/creditos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    }).then(function (resposta) {
        if (resposta.ok) {
            resposta.json().then(json => {
                if (json && json.qtd_creditos !== undefined) {
                    total_creditos = Number(json.qtd_creditos);
                    sessionStorage.QTD_CREDITOS = total_creditos;
                    creditos.innerHTML = total_creditos;
                } else {
                    total_creditos = 100;
                    sessionStorage.QTD_CREDITOS = 100;
                    creditos.innerHTML = 100;
                    atualizar_creditos(100);
                }
            });
        }
    });
}

// Recarga automática de 10 créditos por minuto (limite = 100)
setInterval(() => {
    total_creditos = Number(sessionStorage.QTD_CREDITOS) || 0;
    
    if (total_creditos < 100) {
        total_creditos += 10;
        if (total_creditos > 100) {
            total_creditos = 100;
        }
        atualizar_creditos(total_creditos);
    }
}, 60000);
