function adicionarTarefa() {
    let input = document.getElementById("tarefa");
    let texto = input.value;

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    let lista = document.getElementById("lista");

    let li = document.createElement("li");
    li.innerHTML = `
        ${texto}
        <span class="remover" onclick="this.parentElement.remove()">X</span>
    `;

    lista.appendChild(li);
    input.value = "";
}
