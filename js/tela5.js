const colorBox = document.getElementById('color-box');
const circle = document.getElementById('circle');
const circleInner = circle.querySelector('div');
const colorInput = document.getElementById('color-input');

circle.addEventListener('click', (event) => {
  event.stopPropagation(); 
  colorInput.click();
});

colorInput.addEventListener('input', () => {
  const selectedColor = colorInput.value;
  circleInner.style.backgroundColor = selectedColor;
});

const colorBox2 = document.getElementById('color-box-2');
const circle2 = document.getElementById('circle-2');
const circleInner2 = circle2.querySelector('div');
const colorInput2 = document.getElementById('color-input-2');

circle2.addEventListener('click', (event) => {
  event.stopPropagation(); 
  colorInput2.click();
});

colorInput2.addEventListener('input', () => {
  const selectedColor = colorInput2.value;
  circleInner2.style.backgroundColor = selectedColor; 
});

const colorBox3 = document.getElementById('color-box-3');
const circle3 = document.getElementById('circle-3');
const circleInner3 = circle3.querySelector('div');
const colorInput3 = document.getElementById('color-input-3');

circle3.addEventListener('click', (event) => {
  event.stopPropagation();
  colorInput3.click();
});

colorInput3.addEventListener('input', () => {
  const selectedColor = colorInput3.value;
  circleInner3.style.backgroundColor = selectedColor;
});

const colorBox4 = document.getElementById('color-box-4');
const circle4 = document.getElementById('circle-4');
const circleInner4 = circle4.querySelector('div');
const colorInput4 = document.getElementById('color-input-4');

circle4.addEventListener('click', (event) => {
  event.stopPropagation();
  colorInput4.click();
});

colorInput4.addEventListener('input', () => {
  const selectedColor = colorInput4.value;
  circleInner4.style.backgroundColor = selectedColor;
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pencilTool = document.getElementById('pencil-tool');
const pencilIcon = document.getElementById('pencil-icon');
const colorInputs = document.querySelectorAll('input[type="color"]');
const lineWidthSlider = document.getElementById('line-width-slider');
const eraserTool = document.getElementById('eraser-tool');
const eraserIcon = document.getElementById('eraser-icon');

const tools = {
  pencil: {
    isActive: false,
    isDrawing: false,
    selectedColor: '#000000',
    selectedLineWidth: 5
  },
  eraser: {
    isActive: false,
    isDrawing: false,
    selectedColor: '#ffffff',
    selectedLineWidth: 5
  }
};


colorInputs.forEach((input) => {
  input.addEventListener('input', (e) => {
    selectedColor = e.target.value;
  });
});

lineWidthSlider.addEventListener('input', (e) => {
  selectedLineWidth = e.target.value;
  ctx.lineWidth = selectedLineWidth;
});

let isPencilActive = false;
let isEraserActive = false;
let isDrawing = false;

pencilIcon.addEventListener('click', () => {
  isPencilActive = true;
  isEraserActive = false; 
});

eraserIcon.addEventListener('click', () => {
  isEraserActive = true;
  isPencilActive = false;
});

canvas.addEventListener('mousedown', (e) => {
  if (isPencilActive) {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = selectedColor;
    ctx.lineWidth = selectedLineWidth;
  }
  if (isEraserActive) {
    isDrawing = true;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isPencilActive && isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
  if (isEraserActive && isDrawing) {
    ctx.clearRect(e.offsetX, e.offsetY, eraserSize, eraserSize);
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

document.getElementById('eraser-size-slider').addEventListener('input', (e) => {
  eraserSize = e.target.value;
});
