// Função para atualizar dinamicamente o nome do usuário
function atualizarNomeUsuario() {
    var nome = "Willian";
    var spanNomeUsuario = document.getElementById("nomeUsuario");
    spanNomeUsuario.textContent = nome;
}

window.onload = function() {
    atualizarNomeUsuario();
};