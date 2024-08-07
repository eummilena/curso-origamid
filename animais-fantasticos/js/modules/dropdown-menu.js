import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  // menu.addEventListener('click', handleClick);
  // menu.addEventListener('touchstart', handleClick);
  //----------- outra alternativa de chamar eventos ----------

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  //touchstart - é tipo o click só que a versão eé indicada para mobile

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
