const input = document.querySelector("#list-to-do");
const btn = document.querySelector("#submit-list");
const resultado = document.querySelector("#resultado");
const janelaEdicao = document.querySelector("#edit_input_to_do");
const janelaFundo = document.querySelector("#edit_list_back");
const janelaFechar = document.querySelector("#edit_Fechar");
const janelaSalvar = document.querySelector("#btn_Edit");
const idEdicaoJanela = document.querySelector("#idEdicao");
const inputEdicao = document.querySelector("#edit_input");
let idCounter = 1;

const gerarID = () => {
  return idCounter++;
};

input.addEventListener("keypress", (e) => {
  if (e.keyCode == 13) {
    let tarefa = {
      nome: input.value,
      id: gerarID(),
    };
    adicionarLista(tarefa);
  }
});

btn.addEventListener("click", (e) => {
  let tarefa = {
    nome: input.value,
    id: gerarID(),
  };
  tarefaAtual = tarefa;
  adicionarLista(tarefa);
});

const adicionarLista = (tarefa) => {
  let li = criarTagLi(tarefa);
  resultado.appendChild(li);
  input.value = "";
};

const criarTagLi = (tarefa) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  const span = document.createElement("span");
  const btnEditar = document.createElement("button");
  const btnExcluir = document.createElement("button");
  li.id = tarefa.id;

  span.classList.add("text-list");
  span.innerHTML = tarefa.nome;

  btnEditar.classList.add("btnAcao");
  btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
  btnEditar.setAttribute("onclick", "editar(" + tarefa.id + ")");

  btnExcluir.classList.add("btnAcao");
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.setAttribute("onclick", "excluir(" + tarefa.id + ")");

  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);
  li.appendChild(span);
  li.appendChild(div);
  return li;
};
const alternarJanelaEdicao = () => {
  janelaEdicao.classList.toggle("abrir");
  janelaFundo.classList.toggle("abrir");
};

const editar = (idTarefa) => {
  let li = document.getElementById("" + idTarefa + "");
  if (li) {
    let span = li.querySelector(".text-list");
    if (span) {
      let nomeTarefa = span.textContent;
      inputEdicao.value = nomeTarefa.trim();
      idEdicaoJanela.innerHTML = "#" + idTarefa;
      alternarJanelaEdicao();
    }
  }
};

const excluir = (idTarefa) => {
  let li = document.getElementById("" + idTarefa + "");
  if (li) {
    resultado.removeChild(li);
  }
};

janelaSalvar.addEventListener("click", (e) => {
  e.preventDefault();
  let idTarefaEdicao = idEdicaoJanela.innerHTML.replace("#", "");

  let tarefaEdicao = {
    nome: inputEdicao.value,
    id: idTarefaEdicao,
  };

  let novaTarefa = document.getElementById("" + idTarefaEdicao + "");
  if (novaTarefa) {
    let span = novaTarefa.querySelector(".text-list");
    if (span) {
      span.innerHTML = tarefaEdicao.nome;
    }
  }
  alternarJanelaEdicao();
});

janelaFechar.addEventListener("click", (e) => {
  alternarJanelaEdicao();
});
