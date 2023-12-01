const criaStorage = () => {
    window.localStorage.setItem('titulo', 'lista')
    alert('ola')
}

document.getElementById('submit').onclick = criaStorage;