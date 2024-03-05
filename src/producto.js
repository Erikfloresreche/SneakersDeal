
const producto = document.querySelector('.producto');
const productoImagen = document.querySelector('.producto__imagen');
const thumbs = document.querySelector('.producto__thumbs');
// const thumbsNike = producto.querySelectorAll('.producto__thumbsNike');
//Color
const propiedadColor = document.querySelector('.propiedad-color');
//Botones cantidad
const btnDisminuir = document.querySelector('.disminuir-cantidad');
const btnIncrementar = document.querySelector('.incrementar-cantidad');
//Input cantidad
const numCantidad = document.querySelector('.cantidad')
//SEGUIR INVESTIGANDO SOBRE LOS QUERYSELECTOR EN LUGAR DE GET ID



//Funcionalidad de las thumbnails / miniaturas.
thumbs.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG' && e.target.closest('.producto__thumbs')){
        const imagenSrc = e.target.src;
        const lastIndex = imagenSrc.lastIndexOf('/');
    
        // Cortamos la cadena de texto para obtener solo una parte
        const nombreImagen = imagenSrc.substring(lastIndex + 1);
        //Cambiamos la ruta de la imagen del producto 
        productoImagen.src = `./img/tennis/${nombreImagen}`;
    } 
});



//Funcionalidad cambio de color.
propiedadColor.addEventListener('click', (e) => {
    if(e.target.tagName === 'INPUT'){
        const valorColor = e.target.value;
        productoImagen.src = `./img/tennis/${valorColor}.jpg`
    }
});

//Funcionalidad botones de cantidad producto.
btnIncrementar.addEventListener('click', (e) => {
    numCantidad.value = parseInt(numCantidad.value) + 1;
});



btnDisminuir.addEventListener('click', (e) => {
    if(parseInt(numCantidad.value) > 1 ){
        numCantidad.value = parseInt(numCantidad.value) - 1;
    }
});


