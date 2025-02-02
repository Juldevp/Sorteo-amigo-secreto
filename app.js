// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = []; 
let sorteoRealizado = false; // Bandera para saber si ya se realizó el sorteo

// Función para agregar amigos
function agregarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nombreAmigo = inputAmigo.value.trim();

    // Validar la entrada
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar que solo contenga letras y espacios
    if (!/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/.test(nombreAmigo)) {
        alert("Por favor, ingrese solo letras y espacios. No se permiten números ni caracteres especiales.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos
function sortearAmigo() {
    // Si ya se realizó un sorteo, reiniciar todo
    if (sorteoRealizado) {
        reiniciarSorteo();
        return;
    }

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;

    // Marcar que el sorteo ya se realizó
    sorteoRealizado = true;
}

// Función para reiniciar el proceso
function reiniciarSorteo() {
    amigos = []; // Vaciar el array de amigos
    sorteoRealizado = false; // Restablecer la bandera
    document.getElementById('listaAmigos').innerHTML = ""; // Limpiar la lista de amigos
    document.getElementById('resultado').innerHTML = ""; // Limpiar el resultado del sorteo
    document.getElementById('amigo').value = ""; // Limpiar el campo de entrada
    alert("Lo siento, el programa se ha reiniciado. Puedes agregar nuevos amigos y sortear nuevamente.");
}