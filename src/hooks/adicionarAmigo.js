export default function adicionarAmigo(amigos, nome) {
    const nomeFormatado = nome.trim();

    if (!nomeFormatado || amigos.includes(nomeFormatado)) {
        alert("Nome inválido ou já adicionado!");
        return amigos; // Retorna o array sem alterações
    }

    return [...amigos, nomeFormatado]; // Retorna um novo array sem modificar o original
}