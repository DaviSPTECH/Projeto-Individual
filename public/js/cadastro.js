function cadastrar() {
        // aguardar();

        //Recupere o valor da nova input pelo nome do id
        // Agora vá para o método fetch logo abaixo
        var nomeVar = inp_nome.value;
        var emailVar = inp_email.value;
        var senhaVar = inp_senha.value;
        var cf_senhaVar = inp_cf_senha.value;
        var email_formatado = emailVar.toLowerCase()
        // Verificando se há algum campo em branco
        if (
            nomeVar == "" ||
            email_formatado == "" ||
            senhaVar == "" ||
            cf_senhaVar == ""
        ) {
            alert("Preencha todos os campos corretamente!");
            // finalizarAguardar();
            return false;

        } else if (!email_formatado.includes('@') || !email_formatado.includes('.')) {
            alert("Email inválido!")
            return false;

        } else if (cf_senhaVar != senhaVar) {
            alert("Senhas diferentes!")
            return false;
        }

        else {
            setInterval(sumirMensagem, 5000);
        }


        // Enviando o valor da nova input
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                // crie um atributo que recebe o valor recuperado aqui
                // Agora vá para o arquivo routes/usuario.js
                nomeServer: nomeVar,
                emailServer: email_formatado,
                senhaServer: senhaVar,
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);

                if (resposta.ok) {
                    div_aguardar.style.display = "block";

                    mensagem_erro.innerHTML =
                        alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");

                    //       limparFormulario();
                    //       finalizarAguardar();
                } else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
                //    finalizarAguardar();
            });

        return;
    }


    function sumirMensagem() {}

    function login() {
        window.location.href = "login.html";

    }