// Função pura para sortear os amigos sem modificar a lista original
export default function sortearAmigo(amigos) {
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos!");
        return null;
    }

    const embaralhar = (lista) => lista.slice().sort(() => 0.5 - Math.random());

    let sorteados;
    while (true) {
        sorteados = embaralhar(amigos);
        if (!amigos.some((amigo, i) => amigo === sorteados[i])) break;
    }

    return amigos.map((amigo, i) => `${amigo} tirou ${sorteados[i]}`);
}