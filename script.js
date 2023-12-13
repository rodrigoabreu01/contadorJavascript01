const value = document.getElementById('value');
const iniciar = document.getElementById('iniciar');
const mouseDown = document.getElementById('mousedow');
const pausar = document.getElementById('mouseup');
const contardireto = document.getElementById('contardireto');
const contarMenos  = document.getElementById('menos');

let count = 0;
let interval = 0;

// contar com um click
iniciar.addEventListener('click', () => {
    count = ++count;
    value.innerHTML = count;
});
contarMenos.addEventListener('click', () => {
    count = --count;
    value.innerHTML = count;
});

contardireto.addEventListener('click', () => {
       interval = setInterval(() => {
        count = ++count;
        value.innerHTML = count;
    },200);
});

//contar com o mouse segurando
mouseDown.addEventListener('mousedown', () => {
       interval = setInterval(() => {
        count = ++count;
        value.innerHTML = count;
    },200);
});

mouseDown.addEventListener('mouseup', () => {
       clearInterval(interval);
});


//pausar
pausar.addEventListener('click', () => {
    clearInterval(interval);
    interval = 0;
});

//zerar
zerar.addEventListener('click', () => {
    count = 0;
    value.innerHTML = count;
});
