export default function initModal() {}

const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

function abrirModal(event) {
  event.preventDefault();
  container.classList.add("ativo");
}

function fecharModal(event) {
  event.preventDefault();
  container.classList.remove("ativo");
}

function cliqueForaModal(event) {
  console.log(event);
  if (event.target === this) fecharModal(event);
}
botaoAbrir.addEventListener("click", abrirModal);
botaoFechar.addEventListener("click", fecharModal);
containerModal.addEventListener("click", cliqueForaModal);