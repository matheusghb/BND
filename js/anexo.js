let IsMouseDown = false;
let timer;

document.body.addEventListener('mousedown', function(event) {
    IsMouseDown = true;
    timer = setTimeout(() => {
        uc(event);
    }, 1500);
});

document.body.addEventListener('mouseup', function(){
    IsMouseDown = false;
    clearTimeout(timer);
    document.getElementById('t').innerText = 'oi';
});

document.body.addEventListener('mousemove', function(event){
    if (IsMouseDown) {
        uc(event);
    }
});

function uc(event) {
    const x = event.clientX;
    const y = event.clientY;
    document.getElementById('t').innerText = `Coordenadas: (${x}, ${y})`;
    console.log(x,y)
}
