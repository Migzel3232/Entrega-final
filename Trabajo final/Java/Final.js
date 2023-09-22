
const imagenes = document.querySelectorAll('.ImagenCasa img');


imagenes.forEach((imagen) => {
  imagen.addEventListener('click', () => {
    
    const imagenExpandida = document.createElement('div');
    imagenExpandida.classList.add('ImagenExpandida');
    const imagenClonada = imagen.cloneNode(true);
    imagenExpandida.appendChild(imagenClonada);

    
    document.body.appendChild(imagenExpandida);

    
    imagenExpandida.addEventListener('click', () => {
      document.body.removeChild(imagenExpandida);
    });
  });
});