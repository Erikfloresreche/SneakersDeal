'use strict';

var data = {
    productos: [
        {
            id: '1',
            nombre: 'Tennis Converse Standard',
            descripcion: 'Lorem ipsum dolor sit amet.',
            precio: 120,
            colores: ['negro', 'rojo', 'amarillo'],
            tamaños: ['38', '39', '40', '41', '42', '44'],
        },
        {
            id: '2',
            nombre: 'Nike Dunk Low',
            descripcion: 'Lorem ipsum dolor sit amet.',
            precio: 170,
            colores: ['negro', 'rojo', 'amarillo'],
            tamaños: ['38', '39', '40', '41', '42', '44'],
        },
        {
            id: '3',
            nombre: 'Adidas Forum X BadBunny',
            descripcion: 'Lorem ipsum dolor sit amet.',
            precio: 330,
            colores: ['blanco', 'rosa', 'azul'],
            tamaños: ['38', '39', '40', '41', '42', '44'],
        }
    ],
};

//Localizamos las 3 secciones de sneakers.
const nikeSeccion = document.querySelector('.nike');
const adidasSeccion = document.querySelector('.adidas');
const converseSeccion = document.querySelector('.converse');


const producto$1 = document.getElementById('producto');
const productoNike = document.querySelector('.producto__nike');
const productoConverse = document.querySelector('.producto__converse');
const productoAdidas = document.querySelector('#producto__adidas');
producto$1.querySelector('.producto__imagen');
producto$1.querySelector('.producto__thumbs');
producto$1.querySelector('#propiedad-color');



const breadCrumbsHandler = () => {

    //Funcionalidad nike seccion
nikeSeccion.addEventListener('click', (e) => {
    if(![...e.target.classList].includes('breadcrumbs__active')){
        e.target.classList.add('breadcrumbs__active');
        
        converseSeccion.classList.remove('breadcrumbs__active');
        converseSeccion.classList.add('breadcrumbs__link');

        adidasSeccion.classList.remove('breadcrumbs__active');
        adidasSeccion.classList.add('breadcrumbs__link');
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
        nikeSeccion.classList.add('breadcrumbs__link');

        adidasSeccion.classList.remove('breadcrumbs__active');
        adidasSeccion.classList.add('breadcrumbs__link');
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
        nikeSeccion.classList.add('breadcrumbs__link');

        converseSeccion.classList.remove('breadcrumbs__active');
        converseSeccion.classList.add('breadcrumbs__link');
    }
    if([...productoAdidas.classList].includes('producto__oculto')){
        productoAdidas.classList.remove('producto__oculto');

        productoNike.classList.add('producto__oculto');
        productoConverse.classList.add('producto__oculto');
    }
    alert('Esta página estará disponible próximamente...');
});
};
breadCrumbsHandler();

document.querySelector('.producto');
const productoImagen = document.querySelector('.producto__imagen');
const thumbs = document.querySelector('.producto__thumbs');
// const thumbsNike = producto.querySelectorAll('.producto__thumbsNike');
//Color
const propiedadColor = document.querySelector('.propiedad-color');
//Botones cantidad
const btnDisminuir = document.querySelector('.disminuir-cantidad');
const btnIncrementar = document.querySelector('.incrementar-cantidad');
//Input cantidad
const numCantidad = document.querySelector('.cantidad');
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
        productoImagen.src = `./img/tennis/${valorColor}.jpg`;
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

const btnsAbrirCarrito = document.querySelectorAll('[data-accion="abrir-carrito"]');
const btnsCerrarCarrito = document.querySelectorAll('[data-accion="cerrar-carrito"]');
const ventanaCarrito = document.querySelector('.carrito');
const btnAgregarCarrito = document.querySelector('.agregar-al-carrito');
const producto = document.querySelector('.producto');
let carrito = [];
const formatearMoneda = new Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'});
const notificacion = document.getElementById('notificacion');


const renderCarrito = () => {
    ventanaCarrito.classList.add('carrito--active');

    //Eliminamos todos los productos anteriores para construir el carrito desde cero.
    const productosAnteriores = ventanaCarrito.querySelectorAll('.carrito__producto');
    productosAnteriores.forEach((producto) => producto.remove());

    let total = 0;


    //Comprobamos si hay productos.
    if(carrito.length < 1){
        //Ponemos la clase del carrito vacío.
        ventanaCarrito.classList.add('carrito--vacio');
    }else {
        //Eliminamos la clase del carrito vacío.
        ventanaCarrito.classList.remove('carrito--vacio');
        //Iteramos sobre cada producto del carrito y lo mostramos.
        carrito.forEach((productoCarrito) => {
            data.productos.forEach((productoBaseDatos) => {
                if(productoBaseDatos.id === productoCarrito.id){
                    productoCarrito.precio = productoBaseDatos.precio;

                    total += productoBaseDatos.precio * productoCarrito.cantidad;

                }
            });
    
            //Establecemos la ruta de la imagen que vamos a querer mostrar.
            let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
            if(productoCarrito.color === 'rojo'){
                thumbSrc = './img/thumbs/rojo.jpg'; 
            }else if(productoCarrito.color === 'amarillo'){
                thumbSrc = './img/thumbs/amarillo.jpg';
            }
            //Creamos una platilla de codigo HTML:
            const plantillaProducto = `
            <div class="carrito__producto-info">
                <img src="${thumbSrc}" alt="" class="carrito__thumb" />
                <div>
                    <p class="carrito__producto-nombre">
                        <span class="carrito__producto-cantidad">${productoCarrito.cantidad} x </span>${productoCarrito.nombre}
                    </p>
                    <p class="carrito__producto-propiedades">
                        Tamaño:<span>${productoCarrito.tamaño}</span> Color:<span>${productoCarrito.color}</span>
                    </p>
                </div>
            </div>
            <div class="carrito__producto-contenedor-precio">
                <button class="carrito__btn-eliminar-item" data-accion="eliminar-item-carrito">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"
                        />
                    </svg>
                </button>
                <p class="carrito__producto-precio">${formatearMoneda.format(productoCarrito.precio * productoCarrito.cantidad)}</p>
            </div>
            `;
            
            const itemCarrito = document.createElement('div');
    
            itemCarrito.classList.add('carrito__producto');
    
            itemCarrito.innerHTML = plantillaProducto;
    
            ventanaCarrito.querySelector('.carrito__body').appendChild(itemCarrito);
        });
    }

    ventanaCarrito.querySelector('.carrito__total').innerText = formatearMoneda.format(total);
};

//Funcionalidad abrir carrito
btnsAbrirCarrito.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		renderCarrito();
	});
});
//Funcionalidad cerrar carrito
btnsCerrarCarrito.forEach((boton) => {
	boton.addEventListener('click', (e) => {
		ventanaCarrito.classList.remove('carrito--active');
	});
});
//Funcionalidad agregar producto al carrito

    btnAgregarCarrito.addEventListener('click', (e) => {
        const id = producto.dataset.productoId;
        const nombre = producto.querySelector('.producto__nombre').innerText;
        const cantidad = parseInt(producto.querySelector('.cantidad').value);
        const color = producto.querySelector('#propiedad-color input:checked').value;
        const tamaño = producto.querySelector('#propiedad-tamaño input:checked').value;
    
        if(carrito.length > 0){
            let productoEnCarrito = false;
    
            carrito.forEach((item) => {
                if(item.id === id && item.nombre === nombre && item.color === color && item.tamaño === tamaño){
                    item.cantidad += cantidad;
                    productoEnCarrito = true;
                }
            });
    
            if(!productoEnCarrito) {
                carrito.push({
                    id: id,
                    nombre: nombre,
                    cantidad: cantidad,
                    color: color,
                    tamaño: tamaño,
                });
            }        } else {
            carrito.push({
                id: id,
                nombre: nombre,
                cantidad: cantidad,
                color: color,
                tamaño: tamaño,
            });
        }
        //Establecemos la ruta de la imagen que queremos mostrar en la notificacion.
        let thumbSrc = producto.querySelectorAll('.producto__thumb-img')[0].src;
        if(color === 'rojo') {
            thumbSrc = './img/thumbs/rojo.jpg';
        }else if (color === 'amarillo') {
            thumbSrc = './img/thumbs/amarillo.jpg';
        }
        notificacion.querySelector('img').src = thumbSrc;
        //Mostramos la notificacion.
        notificacion.classList.add('notificacion--active');
        //Despues de 3seg la ocultamos.
        setTimeout(() => notificacion.classList.remove('notificacion--active'),3000);
});


//Botones eliminar producto del carrito.
    ventanaCarrito.addEventListener('click', (e) => {
        if(e.target.closest('button')?.dataset.accion === 'eliminar-item-carrito'){
            const producto = e.target.closest('.carrito__producto');
            const indexProducto = [...ventanaCarrito.querySelectorAll('.carrito__producto')].indexOf(producto);
            
            carrito = carrito.filter((item, index) => {
                if(index !== indexProducto){
                    return item;
                }
                
            });
            renderCarrito();
        }
});


//Boton de enviar carrito. (PENDIENTE)********************
// ventanaCarrito.querySelector('#carrito__btn-comprar').addEventListener('click', (e) => {
//     //******COMO NO TENEMOS BASE DE DATOS NI SERVIDOR (CREAREMOS UN POPUP DICIENDO AL USUARIO QUE LA COMPRA HA SIDO REALIZADA)*************

//     // console.log('enviando peticion de comprar');
// });

class Tabs {
    constructor(idElemento) {
        this.tabs = document.getElementById(idElemento);
        this.nav = this.tabs.querySelector('.tabs');
        //Comprobamos que el elemento que hacemos click tenga la clase de tabs__button.
        this.nav.addEventListener('click', (e) => {
            if([...e.target.classList].includes('tabs__button')){
                //Obtenemos la tab que queremos mostrar.
                const tab = e.target.dataset.tab;

                //Quitamos la clase active de otras tabs que la tengan.
                if(this.tabs.querySelector('.tab--active')){
                    this.tabs.querySelector('.tab--active').classList.remove('tab--active');
                }
                //Quitamos la clase active de otros buttons que lo tengan.
                if(this.tabs.querySelector('.tabs__button--active')){
                    this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
                }

                //Agregamos la clase tab--active al tab.
                this.tabs.querySelector(`#${tab}`).classList.add('tab--active');
                
                //Agregamos la clase active la button.
                e.target.classList.add('tabs__button--active');
            }        });
    }
}

new Tabs('mas-informacion');
