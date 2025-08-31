//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

// função para adicionar nome
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado!");
    return;
  }

  amigos.push(nome);
  input.value = ""; // limpa o campo
  atualizarLista();
}

// atualiza a lista de nomes na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

// função para sortear um amigo
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 nomes para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>Seu amigo secreto é: <strong>${sorteado}</strong></li>`;
}