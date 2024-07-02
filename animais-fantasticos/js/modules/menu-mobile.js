import outsideClick from "./outsideClick";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu(e) {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, eventos, () => {});
    menuList.classList.remove("active");
    menuButton.classList.remove("active");
  }
  eventos.forEach((e) => menuButton.addEventListener(e, openMenu));
}
