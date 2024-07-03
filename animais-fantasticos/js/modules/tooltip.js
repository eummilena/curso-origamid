export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  tooltips.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this); //cria a tooltip dentro do mapa

    onMouseMove.tooltipBox = tooltipBox; //propiedade atribuida ao obj onMouseMove
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox; //propiedade atribuida ao obj onMouseLeave
    onMouseLeave.element = this; //propiedade atribuida ao obj onMouseLeave
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    //objeto criado para remover o tooltip
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    //objeto criado para tooltip aparecer dentro do mapa
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + "px";
      this.tooltipBox.style.left = event.pageX + 20 + "px";
    },
  };

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
