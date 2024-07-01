import outsideClick from "./outsideClick";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown-menu]");

  dropdownMenus.forEach((menu) => {
    // menu.addEventListener('click', handleClick);
    // menu.addEventListener('touchstart', handleClick);
    //----------- outra alternativa de chamar eventos ----------
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });

    //touchstart - é tipo o click só que a versão eé indicada para mobile
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }
}
