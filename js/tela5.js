const colorBox = document.getElementById('color-box');
const circle = document.getElementById('circle');
const circleInner = circle.querySelector('div'); // Get the child div element
const colorInput = document.getElementById('color-input');

circle.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up
  colorInput.click();
});

colorInput.addEventListener('input', () => {
  const selectedColor = colorInput.value;
  circleInner.style.backgroundColor = selectedColor; // Set the background color of the child div element
});

const colorBox2 = document.getElementById('color-box-2');
const circle2 = document.getElementById('circle-2');
const circleInner2 = circle2.querySelector('div'); // Get the child div element
const colorInput2 = document.getElementById('color-input-2');

circle2.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up
  colorInput2.click();
});

colorInput2.addEventListener('input', () => {
  const selectedColor = colorInput2.value;
  circleInner2.style.backgroundColor = selectedColor; // Set the background color of the child div element
});

const colorBox3 = document.getElementById('color-box-3');
const circle3 = document.getElementById('circle-3');
const circleInner3 = circle3.querySelector('div'); // Get the child div element
const colorInput3 = document.getElementById('color-input-3');

circle3.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up
  colorInput3.click();
});

colorInput3.addEventListener('input', () => {
  const selectedColor = colorInput3.value;
  circleInner3.style.backgroundColor = selectedColor; // Set the background color of the child div element
});

const colorBox4 = document.getElementById('color-box-4');
const circle4 = document.getElementById('circle-4');
const circleInner4 = circle4.querySelector('div'); // Get the child div element
const colorInput4 = document.getElementById('color-input-4');

circle4.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up
  colorInput4.click();
});

colorInput4.addEventListener('input', () => {
  const selectedColor = colorInput4.value;
  circleInner4.style.backgroundColor = selectedColor; // Set the background color of the child div element
});

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const pencilTool = document.getElementById('pencil-tool');
const pencilIcon = document.getElementById('pencil-icon');

let isDrawing = false;
let lastX, lastY;

pencilIcon.addEventListener('click', () => {
  isDrawing = true;
});

canvas.addEventListener('mousedown', (e) => {
  if (isDrawing) {
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY;
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});

const colorBox3 = document.getElementById('color-box-3');
const circle3 = document.getElementById('circle-3');
const circleInner3 = circle3.querySelector('div'); // Get the child div element
const colorInput3 = document.getElementById('color-input-3');

circle3.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up
  colorInput3.click();
});

colorInput3.addEventListener('input', () => {
  const selectedColor = colorInput3.value;
  circleInner3.style.backgroundColor = selectedColor; // Set the background color of the child div element
});

const colorBox4 = document.getElementById('color-box-4');
const circle4 = document.getElementById('circle-4');
const circleInner4 = circle4.querySelector('div'); // Get the child div element
const colorInput4 = document.getElementById('color-input-4');

circle4.addEventListener('click', (event) => {
  event.stopPropagation(); // Prevent the event from bubbling up
  colorInput4.click();
});

colorInput4.addEventListener('input', () => {
  const selectedColor = colorInput4.value;
  circleInner4.style.backgroundColor = selectedColor; // Set the background color of the child div element
});
