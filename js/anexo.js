let isMouseDown = false;
let timer;
x = 0;
y = 0;
let con = 1;

document.body.addEventListener('mousedown', function(event) {
    isMouseDown = true;
    timer = setTimeout(() => {
        updateCoordinates(event);
    }, 2000); // 2000 ms = 2 segundos
});

document.body.addEventListener('mouseup', function() {
    isMouseDown = false;
    clearTimeout(timer); // Cancela o temporizador se o mouse for liberado
    document.getElementById('display').innerText = 'Clique e segure por 2 segundos para ver as coordenadas!';
    console.log('tirou')
    console.log(x,y)
    const bu = document.createElement('button');
    bu.type = 'button';
    bu.id = 'b';
    bu.textContent = 'Número' + con;
    bu.style.left = x + 'px';
    bu.style.top = y + 'px';
    bu.style.borderRadius = '40%';
    bu.style.position = 'fixed';
    bu.style.background = 'blue';

    document.getElementById('display').appendChild(bu)
});

document.body.addEventListener('mousemove', function(event) {
    if (isMouseDown) {
        updateCoordinates(event);
    }
});

function updateCoordinates(event) {
    x = event.clientX;
    y = event.clientY;
    document.getElementById('display').innerText = `Coordenadas: (${x}, ${y})`;
    console.log({x},{y});
}