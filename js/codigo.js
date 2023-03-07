const botonPrecious = document.getElementById('mostrar-precious')
const listaPrecious = document.getElementById('lista-precious')
const botonVirtual = document.getElementById('mostrar-virtual')
const listaVirtual = document.getElementById('lista-virtual')

listaPrecious.style.display = 'none';
listaVirtual.style.display = 'none';

/* function mostrar(lista,boton) {
    if (lista.style.display == 'none') {
        lista.style.display = 'block'
        boton.innerHTML = 'Mostrar menos'
        boton.style.background = 'darkred'
    } else {
        lista.style.display = 'none'
        boton.innerHTML = 'Mostrar más'
        boton.style.background = 'red'
    }
}

botonPrecious.addEventListener('click', mostrar(listaPrecious,botonPrecious))
botonVirtual.addEventListener('click', mostrar(listaVirtual,botonVirtual)) */

botonPrecious.addEventListener('click', function() {
    if (listaPrecious.style.display == 'none') {
        listaPrecious.style.display = 'block'
        botonPrecious.innerHTML = 'Mostrar menos'
        botonPrecious.style.background = 'darkred'
    } else {
        listaPrecious.style.display = 'none'
        botonPrecious.innerHTML = 'Mostrar más'
        botonPrecious.style.background = 'red'
    }
    
})

botonVirtual.addEventListener('click', function() {
    if (listaVirtual.style.display == 'none') {
        listaVirtual.style.display = 'block'
        botonVirtual.innerHTML = 'Mostrar menos'
        botonVirtual.style.background = 'darkred'
    } else {
        listaVirtual.style.display = 'none'
        botonVirtual.innerHTML = 'Mostrar más'
        botonVirtual.style.background = 'red'
    }
    
})
