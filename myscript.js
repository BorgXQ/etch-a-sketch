const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('grid-element');
      grid.appendChild(gridElement);
    }
  }

function trackSlider(value) {
    rangeName.innerHTML = `${value} x ${value}`;
}

function changeSize(value) {
    setCurrentSize(value);
    trackSlider(value);
    reloadGrid();
}

function reloadGrid() {
    grid.innerHTML = "";
    createGrid(currentSize);
}

const rangeName = document.getElementById("rangeName");
const slide = document.getElementById("slide");
const grid = document.getElementById("grid");

slide.onmousemove = (e) => trackSlider(e.target.value)
slide.onchange = (e) => changeSize(e.target.value)

window.onload = () => {
    createGrid(DEFAULT_SIZE);
}

// rangeName.innerHTML = `${slide.value} x ${slide.value}`;

// slide.oninput = function() {
//     rangeName.innerHTML = `${this.value} x ${this.value}`;
// };

// const tbl = document.getElementById("tbl");
// createGrid(slide.value);