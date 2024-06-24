const form = document.getElementById("formContatos");
const nomes = [];
const telefones = [];

let linhas = "";

form.addEventListener("submite", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaContatos();
});

function adicionaLinha() {
  const inputNomeContatos = document.getElementById("nomeContatos");
  const inputTelefoneContatos = document.getElementById("telefoneContatos");

  if (
    nomes.includes(inputNomeContatos.value) ||
    telefones.includes(inputTelefoneContatos.value)
  ) {
    alert(`O contato ${inputTelefoneContatos.value} já foi inserido`);
  } else {
    nomes.push(inputNomeContatos.value);
    telefones.push(inputTelefoneContatos.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeContatos.value}</td>`;
    linha += `<td>${inputTelefoneContatos.value}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputNomeContatos = "";
  inputTelefoneContatos = "";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}
