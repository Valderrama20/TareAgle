import { certificate } from "./__prueba.js";


  const form = document.getElementById("wrapped");
   

  form.addEventListener("submit", function (event) {
       
    event.preventDefault();

    // Array de nombres de los campos y sus respectivos valores
    const fieldNames = [
      "numOfLightBulbs",
      "lightBulbType",
      "numOfTelevisions",
      "numOfRefrigerators",
      "heatingSystemsCount",
      "transportationType",
      "dailyKMDistance",
      "flightFrequencyYearly",
      "smallAppliancesCount"
    ];

    // Crear un objeto con los datos capturados
    const formData = {};
    fieldNames.forEach(name => {
      const value = document.querySelector(`input[name="${name}"]:checked`).value;
      formData[name] = value;
    });

    // Aquí puedes enviar los datos a tu API 
    fetch("https://tareagle-production.up.railway.app/carbon-footprint-form/people", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
       const {carbonFootprint,carbonFootprintLevel} = data
       window.location.href = `https://certificado-tareagle.netlify.app?carbonFootprin1=${carbonFootprint}&carbonFootprintLevel=${carbonFootprintLevel}/`
    })
    .catch(error => {
        console.error("Error al enviar los datos:", error);
    });
  });
;
  

