const formulario = document.getElementById("form-login");
const usuario = document.getElementById("usuario");
const clave = document.getElementById("clave");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  usuario.classList.remove("error");
  clave.classList.remove("error");

  const faltantes = [];
  if (usuario.value.trim() === "") {
    faltantes.push("usuario");
    usuario.classList.add("error");
  }
  if (clave.value.trim() === "") {
    faltantes.push("contraseña");
    clave.classList.add("error");
  }

  if (faltantes.length > 0) {
    mensaje.textContent = "Completa el campo: " + faltantes.join(" y ");
    mensaje.className = "mensaje-error";
  } else {
    mensaje.textContent = "Bienvenido, " + usuario.value.trim();
    mensaje.className = "mensaje-ok";
  }
});
