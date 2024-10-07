document.getElementById('colorInput').addEventListener('input', function() {
    const color = this.value;
    
    // Seleciona os slots
    const slots = [
        document.querySelector('.slot1'),
        document.querySelector('.slot2'),
        document.querySelector('.slot3'),
        document.querySelector('.slot4'),
        document.querySelector('.slot5')
    ];

    // Altera a cor de cada slot
    slots.forEach(slot => {
        slot.style.backgroundColor = color;
    });
});
function adcor () {
    
}
