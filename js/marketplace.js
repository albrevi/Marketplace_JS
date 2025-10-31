const destacados = document.querySelector('#destacados ul');
const todos = document.querySelector('#todos ul');

function pintarUnProducto(producto, seccion) {
    const li = document.createElement('li');
    li.textContent = producto.title

    ul.appendChild(li);
}

function pintarTodosLosProductos(array, seccion) {
    for (let arrayElement of array) {
        pintarUnProducto(arrayElement, seccion);
    }
}
pintarTodosLosProductos(TodosLosProductos,todos);