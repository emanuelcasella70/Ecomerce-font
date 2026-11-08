let btnoldh = document.getElementById("hold");
let cds = document.getElementById("cds");
let delate = document.getElementById("delate");
let btnoldhh = document.getElementById("holdd");
let cdss = document.getElementById("cdss");
function quit(){btnoldh.classList.add("mm");
 btnoldh.classList.remove("alert")  ;
 cds.classList.remove("opacity");}
 function addd(){btnoldh.classList.toggle("alert");  btnoldh.classList.remove("mm") ;cds.classList.toggle("opacity");}
 function add(){btnoldhh.classList.add("alert");  btnoldhh.classList.remove("mm") ;cdss.classList.toggle("opacity");}
 function quitt(){btnoldhh.classList.add("mm"); btnoldhh.classList.remove("alert")  ;cdss.classList.remove("opacity");}
let btnMenu = document.getElementById('btn');
let mainNav = document.getElementById('main-nav');
btnMenu.addEventListener('click', function(){
mainNav.classList.toggle('mostrar');
});

/// SLIDER ///

const slider = document.querySelector("#slider");
let sliderSelection = document.querySelectorAll(".slider__section");
let sliderSelectionLast = sliderSelection[sliderSelection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSelectionLast);

function Next(){
  let sliderfir = document.querySelectorAll(".slider__section")[0];
  
  slider.style.marginLeft = "-200%"; 
  slider.style.transition = "all 0.5s";

  setTimeout(function(){
      slider.style.transition= "none";
      slider.insertAdjacentElement('beforeend', sliderfir);
      slider.style.marginLeft = "-100%";
  }, 500);
}

function prev(){
    let sliderSelection = document.querySelectorAll(".slider__section");
    let sliderSelectionLast = sliderSelection[sliderSelection.length -1];
    
    slider.style.marginLeft = "0%"; 
    slider.style.transition = "all 0.5s";
  
    setTimeout(function(){
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin', sliderSelectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
  }
  


btnRight.addEventListener("click", function(){
 Next();
});

btnLeft.addEventListener("click", function(){
    prev();
   });

setInterval(function(){
    Next();   
   }, 5000);   

/// CARRITO ///

// const contenedorProducts = document.querySelector(".conteiner-dvalert-card");
// const estructuraProducts = document.querySelector(".dvAlert");

// ///PORDUCTOS DEL BODY 

// const productsBody = document.querySelector(".container-tips");

// const contadorPoducts = document.querySelector(".contadorproducts");

// const totalApagar = document.querySelector("#total");


// if(contadorPoducts.textContent == 0 ){
//    contadorPoducts.classList.add("mm")  
// }



// let allProducts = []

// productsBody.addEventListener("click", e =>{
//   if(contadorPoducts.textContent >= 0 ){
//     contadorPoducts.classList.remove("mm")  
// }
//   if(e.target.classList.contains("slider__link")){
//      const product = e.target.parentElement  

//      const infoProducts = {
//        cantidad : 1,
//        img : product.querySelector("img").textContent,
//        titulo : product.querySelector("h2").textContent,
//        precio : product.querySelector("p").textContent
//      }

//      const exits = allProducts.some(product => product.titulo === infoProducts.titulo)

//      if(exits){
//         const products = allProducts.map(product =>{
//           if(product.titulo === infoProducts.titulo){
//              product.cantidad++
//              return product
//           }else {
//             return product
//           }
//         }) 
//         allProducts = [...products]
//      }else {
//        allProducts = [...allProducts, infoProducts]
//      }
//      showProducts();
//     }
// })

// contenedorProducts.addEventListener("click", e =>{{
//   if(e.target.classList.contains("cio")){
//     const product = e.target.parentElement.parentElement
//     const title = product.querySelector("p").textContent;

//     console.log(title);

//     allProducts = allProducts.filter( e => 
//       e.titulo !== title);
//   }
//   showProducts()  
//   if(contadorPoducts.textContent === "0" ){
//     contadorPoducts.classList.add("mm")  
//  }
   

// }})

// /// FUNCTION PARA MOSTRAR HTML 

// const buy = document.querySelector("#toll")
// const small = document.querySelector("#tull")

// const showProducts = () =>{
//   /// limpiar carrito 
//   buy.classList.remove("mm")
//   contenedorProducts.innerHTML = "";
  
//   if(allProducts.length == 0){
//     contenedorProducts.innerHTML = `<p class="carrito-alert">Carrito Vacio</p> ` 
//     buy.classList.add("mm")
//     }

// let total = 0;
// let totalofproducts = 0;
// ///
// allProducts.forEach(product =>{
//     const conteinerProducts = document.createElement("div");
//     conteinerProducts.classList.add("dvAlert");
    
//     conteinerProducts.innerHTML = `
// <div class="conteiner-img-product-card"><img src="./fots/reloj-venta.jpg"alt=""></div>
// <div class="container--text--price--">
// <p class="parrafo">${product.titulo}</p>
// <div>
// <p>${product.precio}</p>
// <p>Cantidad : ${product.cantidad}</p>
// </div>
// </div>
// <div><i class="fas fa-times-circle cio"id="delate"></i></div>    
//     `
// console.log(allProducts)

//     contenedorProducts.append(conteinerProducts)
    
//     totalofproducts = totalofproducts + parseInt(product.cantidad * product.precio.slice(1));
    
//     total = total + product.cantidad;
    
//   })

// contadorPoducts.textContent = `${total}`
// totalApagar.textContent = `$${totalofproducts}`


// };

// export {allProducts};


// Delegación de eventos: Escucha el clic en las tarjetas .tip sin contaminar el HTML
// document.addEventListener('click', function(event) {
//   // Verificar si el clic fue dentro de una tarjeta .tip
//   const card = event.target.closest('.tip');
  
//   // Si hizo clic en la tarjeta pero NO en los botones de comprar/carrito
//   if (card && !event.target.closest('button')) {
//     // Extraer la descripción visible (para SEO)
//     const descriptionText = card.querySelector('.product-description-seo') 
//       ? card.querySelector('.product-description-seo').innerText 
//       : '';

//     const productData = {
//       title: card.dataset.title || card.querySelector('h2').innerText,
//       price: card.dataset.price || card.querySelector('.tip__txt').innerText,
//       description: descriptionText,
//       mainImage: card.dataset.mainImage || card.querySelector('img').src,
//       images: card.dataset.images ? card.dataset.images.split(',') : []
//     };

//     openQuickView(productData);
//   }
// });

// // Función para abrir el modal con los datos extraídos
// // function openQuickView(productData) {
// //   document.getElementById('modalTitle').innerText = productData.title;
// //   document.getElementById('modalPrice').innerText = productData.price;
// //   document.getElementById('modalDescription').innerText = productData.description;
// //   document.getElementById('modalMainImg').src = productData.mainImage;

// //   // Cargar miniaturas dinámicamente
// //   const thumbnailsContainer = document.querySelector('.modal-thumbnails');
// //   if (thumbnailsContainer && productData.images.length > 0) {
// //     thumbnailsContainer.innerHTML = '';
// //     productData.images.forEach((imgSrc, index) => {
// //       const img = document.createElement('img');
// //       img.src = imgSrc.trim();
// //       img.alt = `Vista ${index + 1}`;
// //       if (index === 0) img.classList.add('thumb-active');
      
// //       img.onclick = function() {
// //         changeMainImage(imgSrc.trim());
// //         document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('thumb-active'));
// //         img.classList.add('thumb-active');
// //       };
      
// //       thumbnailsContainer.appendChild(img);
// //     });
// //   }

// //   document.getElementById('quickViewModal').classList.add('active');
// // }

// function openQuickView(productData) {
//   // 1. Asignar título, precio y descripción
//   document.getElementById('modalTitle').innerText = productData.title;
//   document.getElementById('modalPrice').innerText = productData.price;
//   document.getElementById('modalDescription').innerText = productData.description;
  
//   // 2. FORZAR que la imagen principal sea la de este producto
//   document.getElementById('modalMainImg').src = productData.mainImage;

//   // 3. Renderizar las miniaturas dinámicamente
//   const thumbnailsContainer = document.querySelector('.modal-thumbnails');
//   if (thumbnailsContainer) {
//     thumbnailsContainer.innerHTML = ''; // Limpiar anteriores
    
//     // Unimos la imagen principal + las imágenes de detalle (si las tiene)
//     let allImages = [productData.mainImage];
//     if (productData.images && productData.images.length > 0) {
//       // Evitamos duplicar la principal si ya viene en el array
//       const extraImages = productData.images.filter(img => img !== productData.mainImage);
//       allImages = allImages.concat(extraImages);
//     }

//     allImages.forEach((imgSrc, index) => {
//       const img = document.createElement('img');
//       img.src = imgSrc.trim();
//       img.alt = `Vista ${index + 1}`;
      
//       // La primera miniatura arranca seleccionada
//       if (index === 0) {
//         img.classList.add('thumb-active');
//       }
      
//       // Al hacer clic en cualquier miniatura, cambia la grande
//       img.onclick = function() {
//         changeMainImage(imgSrc.trim());
//         document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('thumb-active'));
//         img.classList.add('thumb-active');
//       };
      
//       thumbnailsContainer.appendChild(img);
//     });
//   }

//   // 4. Mostrar el modal
//   document.getElementById('quickViewModal').classList.add('active');
// }
// // Cerrar el modal
// function closeQuickView() {
//   document.getElementById('quickViewModal').classList.remove('active');
// }

// // Cambiar imagen principal desde miniaturas
// function changeMainImage(src) {
//   document.getElementById('modalMainImg').src = src;
// }

// // Cerrar al hacer clic fuera del modal
// window.onclick = function(event) {
//   const modal = document.getElementById('quickViewModal');
//   if (event.target === modal) {
//     closeQuickView();
//   }
// };