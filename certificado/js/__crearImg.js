
// Obtener la cadena de consulta de la URL
var queryString = window.location.search;
        
// Crear un objeto URLSearchParams a partir de la cadena de consulta
var parametros = new URLSearchParams(queryString);

// Obtener los valores de los parámetros de la consulta
var usuario = parametros.get('carbonFootprintLevel');
var id = parametros.get('carbonFootprin1');

console.log(usuario, id)

document.addEventListener("DOMContentLoaded", () => {
    const btnDescargar = document.getElementById("btnDescargar");
    const imagenDescargable = document.getElementById("imagenDescargable");

   

    btnDescargar.addEventListener("click", () => {
        // Crear un enlace temporal
        const enlaceTemporal = document.createElement("a");
        enlaceTemporal.href = imagenDescargable.src;
        enlaceTemporal.download = "Mi_huella_de_carbono.jpg"; // Nombre del archivo a descargar

        // Simular un clic en el enlace
        enlaceTemporal.click();

        // Liberar el enlace temporal
        URL.revokeObjectURL(enlaceTemporal.href);
    });
});

 

const changeImg = (valor) => {
    const carbonEmission = {
        "1": "./img/img1.jpeg",
        "2": "./img/img2.jpeg",
        "3": "./img/img4.jpeg",
        "4": "./img/img4.jpeg"
     }
       
    imagenDescargable.src = carbonEmission[valor]
}

