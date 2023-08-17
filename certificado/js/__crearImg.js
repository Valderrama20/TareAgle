document.addEventListener("DOMContentLoaded", () => {
    const btnDescargar = document.getElementById("btnDescargar");
    const imagenDescargable = document.getElementById("imagenDescargable");

    const obtenerParametro = (nombre) => {
        const queryString = window.location.search;
        const parametros = new URLSearchParams(queryString);
        return parametros.get(nombre);
    };

    const carbonEmission = {
        Bajo: "./img/img1.jpeg",
        Moderado: "./img/img2.jpeg",
        Medio: "./img/img4.jpeg",
        Alto: "./img/img4.jpeg"
    };

    const cambiarImagen = (valor = "Bajo") => {
        imagenDescargable.src = carbonEmission[valor];
    };

    const descargarImagen = () => {
        const enlaceTemporal = document.createElement("a");
        enlaceTemporal.href = imagenDescargable.src;
        enlaceTemporal.download = "Mi_huella_de_carbono.jpg";

        enlaceTemporal.click();

        URL.revokeObjectURL(enlaceTemporal.href);
    };

    const carbonFootprintLevel = obtenerParametro('carbonFootprintLevel');

    cambiarImagen(carbonFootprintLevel);

    btnDescargar.addEventListener("click", descargarImagen);
});

 



