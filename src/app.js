import adicionarAmigo from "./hooks/adicionarAmigo.js";
import atualizarLista from "./hooks/atualizarLista.js";
import sortearAmigo from "./hooks/sortearAmigo.js";

let amigos = [];

document.getElementById("adicionar").addEventListener("click", () => {
    const input = document.getElementById("amigo");
    amigos = adicionarAmigo(amigos, input.value);
    atualizarLista("listaAmigos", amigos);
    input.value = ""; // Limpar o campo após adicionar
});

document.getElementById("sortear").addEventListener("click", () => {
    const resultado = sortearAmigo(amigos);
    if (resultado) {
        atualizarLista("resultado", resultado);
    }
});
