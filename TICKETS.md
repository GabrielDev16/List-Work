# TICKETS — Lista de Tarefas

**De:** Carlos Sá (gerente do projeto)
**Para:** Gabriel (dev)

## Regras do jogo
1. Abra o projeto no navegador, use o app e **reproduza o bug antes de mexer no código**.
2. Trabalhe **um ticket por vez**, na ordem. Um commit por ticket, com mensagem clara (ex.: `fix: T-001 limpar input após adicionar`).
3. Use o DevTools (F12): Console, `console.log` e a aba Elements são seus aliados.
4. Travou? Volte aqui e me diga: o que você esperava, o que aconteceu e o que já tentou. Não vou dizer onde está o bug, só vou te ajudar a investigar.
5. Terminou um ticket? Me mande o trecho que você alterou e explique, com suas palavras, **por que o bug acontecia**.

---

## Sprint 1 — Bugs simples

**T-001** — Depois de adicionar uma tarefa, o texto continua escrito no campo de entrada. O usuário reclama que precisa apagar na mão toda vez.

**T-002** — É possível criar uma tarefa digitando apenas espaços. Ela aparece na lista como um item "vazio".

**T-003** — O rodapé diz "X tarefa(s) pendente(s)", mas o número não bate com o que está pendente na tela.

## Sprint 2 — Bugs chatos

**T-004** — Adicione uma tarefa nova e marque ela como concluída. A tarefa errada é marcada.

**T-005** — Ao clicar nos botões de filtro, mais de um botão aparece destacado ao mesmo tempo.

**T-006** — Com o filtro "Concluídas" ou "Ativas" ligado, clicar em ✕ às vezes apaga uma tarefa diferente da que foi clicada.

## Sprint 3 — Features novas (só depois de fechar os bugs)

**F-001** — Mostrar uma mensagem amigável ("Nenhuma tarefa aqui") quando a lista visível estiver vazia.

**F-002** — Botão "Limpar concluídas" que remove todas as tarefas concluídas de uma vez.

**F-003** — Editar o texto de uma tarefa com duplo clique. Enter confirma, Esc cancela.

**F-004** — As tarefas e o filtro escolhido devem continuar lá depois de recarregar a página.
(Dica de pesquisa: `Web Storage API`, `JSON.stringify`, `JSON.parse`.)
