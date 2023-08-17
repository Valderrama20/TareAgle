   const btnDescargar = document.getElementById("btnDescargar");
   const imagenDescargable = document.getElementById("imagenDescargable");


// Obtener la cadena de consulta de la URL
var queryString = window.location.search;
        
// Crear un objeto URLSearchParams a partir de la cadena de consulta
var parametros = new URLSearchParams(queryString);

// Obtener los valores de los parámetros de la consulta
var carbonFootprintLevel = parametros.get('carbonFootprintLevel');
var carbonFootprin1 = parametros.get('carbonFootprin1');

const changeImg = (valor = "Bajo") => {
    const carbonEmission = {
        Bajo: "./img/img1.jpeg",
        Moderado: "./img/img2.jpeg",
        Medio: "./img/img4.jpeg",
        Alto: "./img/img4.jpeg"
     }
       
    imagenDescargable.src = carbonEmission[valor]
}


changeImg(carbonFootprintLevel)


document.addEventListener("DOMContentLoaded", () => {
    
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

 



