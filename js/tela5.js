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
const bucketTool = document.getElementById('bucket-tool');
const bucketIcon = document.getElementById('bucket-icon');

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
  },
  bucket: {
    isActive: false,
    isDrawing: false,
    selectedColor: '#000000',
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
let isBucketActive = false;
let isDrawing = false;
let eraserSize = 50;

pencilIcon.addEventListener('click', () => {
  isPencilActive = true;
  isEraserActive = false; 
  isBucketActive = false;
});

eraserIcon.addEventListener('click', () => {
  isEraserActive = true;
  isPencilActive = false;
  isBucketActive = false;
});

bucketIcon.addEventListener ('click', () => {
  isBucketActive = true;
  isEraserActive = false;
  isPencilActive = false;
})

function floodFill(x, y, targetColor, replacementColor) {
  if (targetColor.toString() === replacementColor.toString()) return;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const stack = [[x, y]];

  const getPixelIndex = (x, y) => (y * imageData.width + x) * 4;

  while (stack.length) {
    const [px, py] = stack.pop();
    const pixelIndex = getPixelIndex(px, py);

    if (data[pixelIndex] === targetColor[0] &&
        data[pixelIndex + 1] === targetColor[1] &&
        data[pixelIndex + 2] === targetColor[2] &&
        data[pixelIndex + 3] === targetColor[3]) {
      
      data[pixelIndex] = replacementColor[0];
      data[pixelIndex + 1] = replacementColor[1];
      data[pixelIndex + 2] = replacementColor[2];
      data[pixelIndex + 3] = replacementColor[3];

      stack.push([px + 1, py]);
      stack.push([px - 1, py]);
      stack.push([px, py + 1]);
      stack.push([px, py - 1]);
    }
  }

  ctx.putImageData(imageData, 0, 0);
}

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
  if (isBucketActive) {
    const x = Math.floor(e.offsetX);
    const y = Math.floor(e.offsetY);
    const targetColor = ctx.getImageData(x, y, 1, 1).data; // Captura a cor do pixel
    const replacementColor = [
      parseInt(selectedColor.slice(1, 3), 16),
      parseInt(selectedColor.slice(3, 5), 16),
      parseInt(selectedColor.slice(5, 7), 16),
      255 // Opacidade total
    ];
    floodFill(x, y, targetColor, replacementColor);
  }
});

canvas.addEventListener('mousemove', (e) => {
  if (isPencilActive && isDrawing) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
  }
  console.log("Mouse moved"); // Verifica se o evento está sendo chamado
  console.log("Eraser active:", isEraserActive); // Verifica se a borracha está ativa
  console.log("Eraser size:", eraserSize); // Verifica o tamanho da borracha

  if (isEraserActive && isDrawing) {
    // Calcula as coordenadas centralizadas
    const centerX = e.offsetX - eraserSize / 2;
    const centerY = e.offsetY - eraserSize / 2;

    // Limpa a área da borracha
    ctx.clearRect(centerX, centerY, eraserSize, eraserSize);
    
    // Limpa o canvas de sobreposição
    overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);

    // Desenha a área da borracha como um quadrado no canvas de sobreposição
    overlayCtx.strokeStyle = 'rgba(255, 0, 0, 0.5)'; // Cor da área da borracha (vermelho semi-transparente)
    overlayCtx.lineWidth = 2; // Largura da borda
    overlayCtx.strokeRect(centerX, centerY, eraserSize, eraserSize); // Desenha um quadrado
  }
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height); // Limpa a área da borracha
  ctx.drawImage(canvas, 0, 0); // Redesenha o conteúdo do canvas
});

canvas.addEventListener('mouseout', () => {
  isDrawing = false;
  overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height); // Limpa a área da borracha
  ctx.drawImage(canvas, 0, 0); // Redesenha o conteúdo do canvas
});

document.getElementById('eraser-size-slider').addEventListener('input', (e) => {
  eraserSize = e.target.value;
});
