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

var cartas_obtidas = [];

var total_creditos = 100;

function atualizar_creditos() {
    creditos.innerHTML = total_creditos;
}

// Auto recarga de 10 créditos por minuto (limite = 100)
setInterval(() => {
    if (total_creditos < 100) {
        total_creditos += 10;
        
        if (total_creditos > 100) {
            total_creditos = 100;
        }
        
        atualizar_creditos();
    }
}, 60000);


// Inserir cartas tiradas na tabela colecao do banco
function inserir_cartas(carta_id) {
    fetch("/cartas/inserir_colecao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO,
            fk_cartaServer: carta_id
        })
    });
}


function pack1() {
    if (total_creditos >= 5) {
        total_creditos -= 5;
        atualizar_creditos();

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

function pack2() {
    if (total_creditos >= 10) {
        total_creditos -= 10;
        atualizar_creditos();

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

// Exibindo todas as cartas tiradas em ambos os packs (incluindo repetidas)
function obtidas() {
    fetch("/cartas/obter_colecao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (cartas_banco) {
            var msg = "";
            for (var i = 0; i < cartas_banco.length; i++) {
                var carta_id = cartas_banco[i].fk_carta;
                msg += "<img src=" + cartas[carta_id] + " class='carta-img'>";
            }
            div_msg1.innerHTML = msg;
            my_cartas.showModal();
        });
}


// Redirecionando para a dashboard
function dashboard() {
    window.location.href = "./dashboard/dashboard.html";
}

