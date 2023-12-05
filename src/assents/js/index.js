const input = document.querySelector("#list-to-do");
const btn = document.querySelector("#submit-list");
const div = document.querySelector("#resultado");
const editTodo = document.querySelector("#edit_input_to_do");
const editClose = document.querySelector("#edit_Fechar");

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
  adicionarLista(tarefa);
});

const gerarID = () => Math.floor(Math.random() * 3000);

const adicionarLista = (tarefa) => {
  let li = criarTagLi(tarefa);
  resultado.appendChild(li);
  input.value = "";
};

const criarTagLi = (tarefa) => {
  let li = document.createElement("li");
  li.id = tarefa.id;

  let span = document.createElement("span");
  span.classList.add("text-list");
  span.innerHTML =
    '<input type="checkbox" id="meuCheckbox" name="meuCheckbox" value="aceito">' +
    tarefa.nome;

  let div = document.createElement("div");

  let btnEditar = document.createElement("button");
  btnEditar.classList.add("btnAcao");
  btnEditar.innerHTML = '<i class="fa fa-pencil"></i>';
  btnEditar.setAttribute("onclick", "editar(" + tarefa.id + ")");

  let btnExcluir = document.createElement("button");
  btnExcluir.classList.add("btnAcao");
  btnExcluir.innerHTML = '<i class="fa fa-trash"></i>';
  btnExcluir.setAttribute("onclick", "excluir(" + tarefa.id + ")");

  div.appendChild(btnEditar);
  div.appendChild(btnExcluir);

  li.appendChild(span);
  li.appendChild(div);
  return li;
};

editClose.addEventListener('click', (e) => {
  edit_input_to_do()
})

const editar = (idTarefa) => {
  let li = document.getElementById(''+ idTarefa +'')
  if(li) {
    
  }
};
const excluir = (idTarefa) => {
  let confirmacao =  window.confirm('Deseja excluir essa Lista?')
  if(confirmacao) {
    let li = document.getElementById('' +idTarefa + '')
    if(li) {
      resultado.removeChild(li)
    }
  }
};
