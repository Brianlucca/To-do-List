const criaStorage = () => {
  const dadosLista = {
    titulo: input.value,
    list_todo: textarea.value,
  };

  window.localStorage.setItem("Lista", JSON.stringify(dadosLista));
};
const getStorage = () => {
  const dadosLista = window.localStorage.getItem("Lista");

  if (dadosLista) {
    const objDadosLista = JSON.parse(dadosLista);
    const { titulo, list_todo } = objDadosLista;

    const resumo = titulo + "<br>" + list_todo;
    document.getElementById("resultado").innerHTML = resumo;
  }
};

const removeStorage = () => {
  window.localStorage.removeItem("Lista");
};

const limpaStorage = () => {
  window.localStorage.clear();
};

document.getElementById("submit").onclick = criaStorage;
document.getElementById("remove-storage").onclick = removeStorage;
document.getElementById("limpa-storage").onclick = limpaStorage;
const input = document.getElementById("title-Todo");
const textarea = document.getElementById("list-to-do");

getStorage();
