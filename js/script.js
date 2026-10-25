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
let filtroAtual = "todas";

function filtrarTarefas() {
  if (filtroAtual === "ativas") return tarefas.filter((t) => !t.concluida);
  if (filtroAtual === "concluidas") return tarefas.filter((t) => t.concluida);
  return tarefas;
}

function atualizarContador() {
  const concluidas = tarefas.filter((t) => !t.concluida); // Resolução da T-003 -> numero de tarefas pendentes que antes não coincidia com o valor agora estão de acordo (!t.concluida)
  contador.textContent = concluidas.length;
}

function alternarTarefa(id) {
  const tarefa = tarefas.find((t) => t.id === id);
  tarefa.concluida = !tarefa.concluida;
  render();
}

function criarItem(tarefa, index) {
  const li = document.createElement("li"); // criando uma tag li transparente na memoria
  li.className = "tarefa"; // adicionando o estilo css na pagina
  if (tarefa.concluida) li.classList.add("concluida"); // se estiver concluida, aplica o risco na tarefa

  const checkbox = document.createElement("input"); // clia o input de cada tarefa nova
  checkbox.type = "checkbox"; // atribui o tipo de casa input criado
  checkbox.checked = tarefa.concluida; // já nasce com mascada se estiver concluida
  checkbox.addEventListener("change", () => alternarTarefa(tarefa.id)); // fica escutando quando o user marca ou desmasca, se marcar ele chama a função alternarTarefa()

  const texto = document.createElement("span"); 
  texto.className = "texto";
  texto.textContent = tarefa.texto; // pega o nome da tarefa e exibe na lista

  const botaoExcluir = document.createElement("button");
  botaoExcluir.className = "excluir";
  botaoExcluir.textContent = "✕";
  botaoExcluir.addEventListener("click", () => {
    tarefas.splice(index, 1); // percorre o array e exclui exatamente 1 item
    render(); // redesenha a pagina apos a função ser executada
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
  tarefas.push({ id: Date.now(), texto: texto, concluida: false }); // removido o promixoid = 3 e corrigido o incremento de repetir o id 3 e colocado um id unico por item usando o Date.now()
  render();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const texto = input.value.trim(); // resolução da T-002 -> não deixar enviar o conteudo somente com espaços (.trim();)
  if (texto === "") return;
  adicionarTarefa(texto);
  input.value = ""; // resolução do T-001 -> apagar o texto do input apos adicionar a tarefa (input.value = "";)
});

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    filtroAtual = botao.dataset.filtro;
    botao.classList.add("ativo");
    render();
  });
});

render();
