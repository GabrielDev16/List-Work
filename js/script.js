const form = document.getElementById("form-tarefa");
const input = document.getElementById("input-tarefa");
const lista = document.getElementById("lista-tarefas");
const contador = document.getElementById("contador");
const botoesFiltro = document.querySelectorAll(".filtro");

let tarefas = [
  { id: 1, texto: "Estudar arrays", concluida: false },
  { id: 2, texto: "Praticar DOM", concluida: true },
  { id: 3, texto: "Revisar funções", concluida: false },
];
let proximoId = 3;
let filtroAtual = "todas";

function filtrarTarefas() {
  if (filtroAtual === "ativas") return tarefas.filter((t) => !t.concluida);
  if (filtroAtual === "concluidas") return tarefas.filter((t) => t.concluida);
  return tarefas;
}

function atualizarContador() {
  const concluidas = tarefas.filter((t) => t.concluida);
  contador.textContent = concluidas.length;
}

function alternarTarefa(id) {
  const tarefa = tarefas.find((t) => t.id === id);
  tarefa.concluida = !tarefa.concluida;
  render();
}

function criarItem(tarefa, index) {
  const li = document.createElement("li");
  li.className = "tarefa";
  if (tarefa.concluida) li.classList.add("concluida");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarefa.concluida;
  checkbox.addEventListener("change", () => alternarTarefa(tarefa.id));

  const texto = document.createElement("span");
  texto.className = "texto";
  texto.textContent = tarefa.texto;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.className = "excluir";
  botaoExcluir.textContent = "✕";
  botaoExcluir.addEventListener("click", () => {
    tarefas.splice(index, 1);
    render();
  });

  li.append(checkbox, texto, botaoExcluir);
  return li;
}

function render() {
  lista.innerHTML = "";
  filtrarTarefas().forEach((tarefa, index) => {
    lista.appendChild(criarItem(tarefa, index));
  });
  atualizarContador();
}

function adicionarTarefa(texto) {
  tarefas.push({ id: proximoId++, texto: texto, concluida: false });
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const texto = input.value;
  if (texto === "") return;
  adicionarTarefa(texto);
  input.value = ""; // resolução do T-001 -> apagar o texto do input apos adicionar a tarefa
});

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtroAtual = botao.dataset.filtro;
    botao.classList.add("ativo");
    render();
  });
});

render();
