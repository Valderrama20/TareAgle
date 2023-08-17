const divObjetivo = document.getElementById("miDiv");


 export  const certificate = () => {
   


  console.log(divObjetivo)

      //   Crear el elemento <object>
        const nuevoObject = document.createElement("object");
        nuevoObject.id = "object";
        nuevoObject.data = "./__canva.html"; // Reemplaza con la ruta adecuada
        nuevoObject.width = "100%";
        nuevoObject.height = "1000";

        // Agregar el elemento <object> al div objetivo
        divObjetivo.appendChild(nuevoObject);
}




