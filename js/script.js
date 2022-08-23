function cambiar_btn(palabra) {
    console.log(palabra);
    palabra.innerText = "Logout"
}

function eliminar (btn3) {
    var elemento_eliminar = document.querySelector(btn3);
    elemento_eliminar.remove();
}

function like (btn1) {
    alert("Ninja was liked")
}