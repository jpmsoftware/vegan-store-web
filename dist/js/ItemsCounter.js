
var itemsCounter = document.querySelector('.items-counter');

window.onload = () => {
    CountItems();
}

function CountItems() {
    let total = 0;
    if (sessionStorage.getItem('productos')) {
        let productos = JSON.parse(sessionStorage.getItem('productos'));
        for (var i = 0; i < productos.length; i++) {
            total += productos[i].cantidad;
        }
    }
    else {
        total = 0;
    }
    itemsCounter.innerHTML = total;
}