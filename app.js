(function () {
    var contenido = document.getElementById('contenido'),
        agregar = document.getElementById('agregar'),
        lista = document.getElementById('lista');
    var añadir = function () {
        var texto = contenido.value,
            elemento = document.createElement('li'),
            tarea = document.createTextNode(texto);
        if (texto === "") {
            contenido.setAttribute('placeholder', 'No Añadio Tarea');
            return false;
        }
        elemento.appendChild(tarea);
        lista.appendChild(elemento);
        contenido.value = '';
        for (let i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener('click', function () {
                this.parentNode.removeChild(this);
            })

        };
    };

    var valor = function () {
        contenido.setAttribute('placeholder', 'Añada Tarea');
    }

    var eliminar = function () {
        this.parentNode.removeChild(this);
    }


    //Validar contenido
    contenido.addEventListener('click', valor);


    agregar.addEventListener('click', añadir);

    for (let i = 0; i < lista.children.length; i++) {
        lista.children[i].addEventListener('click', eliminar);

    };

}())