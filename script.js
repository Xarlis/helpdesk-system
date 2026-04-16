let chamados = [];

function criarChamado() {
    let nome = document.getElementById("nome").value;
    let problema = document.getElementById("problema").value;

    if (nome === "" || problema === "") {
        alert("Preencha todos os campos!");
        return;
    }

    let chamado = {
        id: Date.now(),
        nome: nome,
        problema: problema,
        resolvido: false
    };

    chamados.push(chamado);
    atualizarLista();

    document.getElementById("nome").value = "";
    document.getElementById("problema").value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaChamados");
    lista.innerHTML = "";

    chamados.forEach(chamado => {
        let item = document.createElement("li");

        item.textContent = `${chamado.nome}: ${chamado.problema}: ${""}`;

        if (chamado.resolvido) {
            item.classList.add("resolvido");
        }

        let botao = document.createElement("button");
        botao.textContent = "Resolver";
        botao.onclick = () => resolverChamado(chamado.id);

        item.appendChild(botao);
        lista.appendChild(item);
    });
}

function resolverChamado(id) {
    chamados = chamados.map(ch => {
        if (ch.id === id) {
            ch.resolvido = true;
        }
        return ch;
    });

    atualizarLista();
}