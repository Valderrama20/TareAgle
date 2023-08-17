
let queryString = window.location.search;

console.log(queryString)

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

