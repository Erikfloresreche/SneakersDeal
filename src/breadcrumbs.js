import data from './data/productos';
//Localizamos las 3 secciones de sneakers.
const nikeSeccion = document.querySelector('.nike');
const adidasSeccion = document.querySelector('.adidas');
const converseSeccion = document.querySelector('.converse');


const producto = document.getElementById('producto');
const productoNike = document.querySelector('.producto__nike');
const productoConverse = document.querySelector('.producto__converse');
const productoAdidas = document.querySelector('#producto__adidas');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');
const propiedadColor = producto.querySelector('#propiedad-color');



const breadCrumbsHandler = () => {

    //Funcionalidad nike seccion
nikeSeccion.addEventListener('click', (e) => {
    if(![...e.target.classList].includes('breadcrumbs__active')){
        e.target.classList.add('breadcrumbs__active');
        
        converseSeccion.classList.remove('breadcrumbs__active');
        converseSeccion.classList.add('breadcrumbs__link')

        adidasSeccion.classList.remove('breadcrumbs__active');
        adidasSeccion.classList.add('breadcrumbs__link')
    }
    if([...productoNike.classList].includes('producto__oculto')){
        productoNike.classList.remove('producto__oculto');

        productoConverse.classList.add('producto__oculto');
        productoAdidas.classList.add('producto__oculto');
    }
    alert('Esta página estará disponible próximamente...');
});

//Funcionalidad converse seccion
converseSeccion.addEventListener('click', (e) => {
    if(![...e.target.classList].includes('breadcrumbs__active')){
        e.target.classList.add('breadcrumbs__active');
        
        nikeSeccion.classList.remove('breadcrumbs__active');
        nikeSeccion.classList.add('breadcrumbs__link')

        adidasSeccion.classList.remove('breadcrumbs__active');
        adidasSeccion.classList.add('breadcrumbs__link')
    }
    if([...productoConverse.classList].includes('producto__oculto')){
        productoConverse.classList.remove('producto__oculto');

        productoNike.classList.add('producto__oculto');
        productoAdidas.classList.add('producto__oculto');
    }
    
});

//Funcionalidad adidas seccion
adidasSeccion.addEventListener('click', (e) => {
    if(![...e.target.classList].includes('breadcrumbs__active')){
        e.target.classList.add('breadcrumbs__active');
        
        nikeSeccion.classList.remove('breadcrumbs__active');
        nikeSeccion.classList.add('breadcrumbs__link')

        converseSeccion.classList.remove('breadcrumbs__active');
        converseSeccion.classList.add('breadcrumbs__link')
    }
    if([...productoAdidas.classList].includes('producto__oculto')){
        productoAdidas.classList.remove('producto__oculto');

        productoNike.classList.add('producto__oculto');
        productoConverse.classList.add('producto__oculto');
    }
    alert('Esta página estará disponible próximamente...')
});
}
breadCrumbsHandler();







