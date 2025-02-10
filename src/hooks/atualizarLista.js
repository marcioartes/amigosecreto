// Função auxiliar que atualiza a lista no DOM
export default function atualizarLista(id, itens) {
    document.getElementById(id).innerHTML = itens.join(", ");
}
