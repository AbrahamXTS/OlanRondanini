document.addEventListener("DOMContentLoaded", () => {
	const botonNavegacion = document.querySelector(".navegacion__boton");
	const menuMovil = document.querySelector(".navegacion__opciones--movil");
	const menuMovilOpciones = document.querySelectorAll(".navegacion__opciones--movil a");

	botonNavegacion.addEventListener("click", () => {
		if (menuMovil.style.height == "230.4px") {
			menuMovil.style.height = "0rem";
			menuMovilOpciones.forEach((e) => (e.style.display = "none"));
		} else {
			menuMovil.style.height = "230.4px";
			setTimeout(() => menuMovilOpciones.forEach((e) => (e.style.display = "block")), 100);
		}
	});
});
