function voltar() {
    window.location.href = "../game.html";
}

nome_user.innerHTML = `Dashboard de ${sessionStorage.NOME_USUARIO}`;

function atualizar_KPI1() {
    fetch("/cartas/kpi1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (carta) {
            var nomes = [``, `Ace`, `All Might`, `Goku Black`, `Jiraiya`, `Sasuke`,
                `Sinbad`, `Toshiro`, `Killer Bee`, `Killua`, `Tatsumaki`,
                `Yoruichi`, `Morgiana`, `Sakura`, `Law`, `Shimura`,
                `Konan`, `Edward`, `Mihawk`, `Gon`, `Yusuke`];

            kpi1.innerHTML = `Carta mais obtida: <br> ${nomes[carta.fk_carta]} (${carta.qtd}x)`;
        });
}
atualizar_KPI1();

function atualizar_KPI2() {
    fetch("/cartas/kpi2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (carta) {
            kpi2.innerHTML = `Total de cartas: <br> ${carta.total_cartas}`;
        });
}
atualizar_KPI2();

function atualizar_KPI3() {
    fetch("/cartas/kpi3", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (carta) {
            var media = Number(carta.media_poder).toFixed(2);
            kpi3.innerHTML = `Média geral de poder: <br> ${media}`;
        });
}
atualizar_KPI3();

function grafico_pizza() {
    fetch("/cartas/top_personagens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            fk_usuarioServer: sessionStorage.ID_USUARIO
        })
    })
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (personagens) {
            var nomes = [``, `Ace`, `All Might`, `Goku Black`, `Jiraiya`, `Sasuke`,
                `Sinbad`, `Toshiro`, `Killer Bee`, `Killua`, `Tatsumaki`,
                `Yoruichi`, `Morgiana`, `Sakura`, `Law`, `Shimura`,
                `Konan`, `Edward`, `Mihawk`, `Gon`, `Yusuke`];

            var labels = [];
            var dados = [];

            for (var i = 0; i < 10 ; i++) {
                labels.push(nomes[personagens[i].fk_carta]); //Matriz
                dados.push(personagens[i].qtd);
            }

            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: `Personagens mais obtidos`,
                        data: dados,
                        borderWidth: 1
                    }]
                }
            });
        });
}

grafico_pizza();