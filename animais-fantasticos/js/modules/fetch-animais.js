import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimal() {
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  function createAnimal(animal) {
    const animalElement = document.createElement("div");
    animalElement.classList.add("numero-animal");

    animalElement.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;

    return animalElement;
  }

  fetchAnimais("./animaisapi.json");
}
