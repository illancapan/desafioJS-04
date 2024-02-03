import { propiedades_venta } from './propiedades.js';


console.log('el archivo js cargado correctamente LOLOLOL') 

// document.addEventListener('DOMContentLoaded', function() {
//     const propiedadesVentaContainer = document.getElementById('propiedadesVentaContainer');
//     for (let i = 0; i < 3; i++) {
//         const propiedad = propiedades_venta[i];
//         const propiedadHTML = construirHTMLPropiedad(propiedad);
//         propiedadesVentaContainer.innerHTML += propiedadHTML;
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const propiedadesVentaContainer = document.getElementById('propiedadesVentaContainer');

    propiedades_venta.forEach(propiedad => {
        // Construir el HTML de cada propiedad utilizando template strings
        const propiedadHTML = `
        <div class="col-md-4 mb-4">
        <div class="propiedad card">
            <img src="${propiedad.src}" class="card-img-top" alt="${propiedad.nombre}">
            <div class="card-body">
                <h5 class="card-title">${propiedad.nombre}</h5>
                <p class="card-text">${propiedad.descripcion}</p>                
                <p>
                    <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                    <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                <p class="text-danger"><i class="fas fa-smoking-ban"></i> ${propiedad.permiteFumar ? 'Se permite fumar' : 'No se permite fumar'}</p>
                <p class="text-danger"><i class="fa-solid fa-ban"></i> ${propiedad.permiteMascotas ? 'Se permiten mascotas' : 'No se permiten mascotas'}</p>
            
                </div>
        </div>
        `;
        propiedadesVentaContainer.innerHTML += propiedadHTML;
    });
});
