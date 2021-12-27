document.addEventListener("DOMContentLoaded", () => {
	const fecha = document.querySelector(".fecha");
	const botonNavegacion = document.querySelector(".navegacion__boton");
	const menuMovil = document.querySelector(".navegacion__opciones--movil");
	const menuMovilOpciones = document.querySelectorAll(".navegacion__opciones--movil a");

	botonNavegacion.addEventListener("click", () => {
		if (menuMovil.style.height == "185.4px") {
			menuMovil.style.height = "0rem";
			menuMovilOpciones.forEach((opcion) => (opcion.style.display = "none"));
		} else {
			menuMovil.style.height = "185.4px";
			setTimeout(
				() => menuMovilOpciones.forEach((opcion) => (opcion.style.display = "block")),
				100
			);
		}
	});

	const año = new Date();
	fecha.textContent = año.getFullYear();
});
