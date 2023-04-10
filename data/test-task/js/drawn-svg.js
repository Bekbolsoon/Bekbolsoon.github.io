let svgMan = document.getElementById('sign-up__svg-man');
let vivus = new Vivus(svgMan, {type: 'oneByOne', duration: 250, animTimingFunction: Vivus.EASE, start: 'manual'});

function drawSvg() {
  vivus.play();
  setTimeout(() => {
    svgMan.childNodes[1].style.fill = "#F9FAFF";
  }, 2300);
}

window.addEventListener('load', drawSvg);