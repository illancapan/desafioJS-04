import { propiedades_alquiler } from './propiedades.js';


console.log('El archivo JS se ha cargado correctamente') 

document.addEventListener('DOMContentLoaded', function() {
    const propiedadesAlquilerContainer = document.getElementById('propiedadesAlquilerContainer');
    for (let i = 0; i < 3; i++) {
        const propiedad = propiedades_alquiler[i];
        const propiedadHTML = construirHTMLPropiedad(propiedad);
        propiedadesAlquilerContainer.innerHTML += propiedadHTML;
    }

    // const propiedadesAlquilerContainer = document.getElementById('propiedadesAlquilerContainer');
    // for (let i = 0; i < 3; i++) {
    //     const propiedad = propiedades_alquiler[i];
    //     const propiedadHTML = construirHTMLPropiedad(propiedad);
    //     propiedadesAlquilerContainer.innerHTML += propiedadHTML;
    // }

    const verMasVentaButton = document.getElementById('verMasVentaButton');
    verMasVentaButton.addEventListener('click', function() {
        window.location.href = 'venta.html';
    });

    const verMasAlquilerButton = document.getElementById('verMasAlquilerButton');
    verMasAlquilerButton.addEventListener('click', function() {
        window.location.href = 'alquiler.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const propiedadesAlquilerContainer = document.getElementById('propiedadesAlquilerContainer');

    propiedades_alquiler.forEach(propiedad => {
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

        //  propiedad al contenedor
        propiedadesAlquilerContainer.innerHTML += propiedadHTML;
    });
});
