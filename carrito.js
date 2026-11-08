const contenedorProducts = document.querySelector(".conteiner-dvalert-card");
const estructuraProducts = document.querySelector(".dvAlert");
// const productsBody = document.querySelector(".container-tips");
const productsBody = document.querySelector("main");
const contadorPoducts = document.querySelector(".contadorproducts");
const totalApagar = document.querySelector("#total");
const botonpagar = document.getElementById("pay")
const confCompra = document.querySelectorAll(".slider__link")

console.log(confCompra)

// if(contadorPoducts.textContent == 0 ){
//    contadorPoducts.classList.add("mm")  
// }

document.addEventListener('DOMContentLoaded', () => {
  despertarBackend();
});

function despertarBackend() {
  fetch('https://ecomerce-back-sks5.onrender.com/ping')
    .then((res) => {
      if (res.ok) {
        console.log('⚡ Backend despierto y listo');
      }
    })
    .catch((error) => {
      console.warn('Backend aún iniciando o inaccesible:', error);
    });
}



// let allProducts = []
let allProducts = JSON.parse(localStorage.getItem("carrito")) || [];


productsBody.addEventListener("click", e =>{
   if(contadorPoducts.textContent >= 0){
    contadorPoducts.classList.remove("mm")  
}else{
  contadorPoducts.classList.add("mm")
}


  if(e.target.classList.contains("slider__linkk")){
    const product = e.target.parentElement  

     const infoProducts = {
       cantidad : 1,
       img : product.querySelector("img").textContent,
       titulo : product.querySelector("h2").textContent,
       precio : product.querySelector("p").textContent
     }
     

     const exits = allProducts.some(product => product.titulo === infoProducts.titulo)
     
     if(exits){
        const products = allProducts.map(product =>{
          if(product.titulo === infoProducts.titulo){
             product.cantidad++
             return product
          }else {
            return product
          }
        }) 
        allProducts = [...products]
     }else {
       allProducts = [...allProducts, infoProducts]
     }
     showProducts();

    }
    const btnIniciar = document.getElementById("btn-iniciar-pago");
    if(btnIniciar) {
    btnIniciar.addEventListener("click", () => {
        if(allProducts.length === 0) return alert("Carrito vacío");
        
        localStorage.setItem("carrito", JSON.stringify(allProducts));
        window.location.href = "./vta.html";
    });
}

})

contenedorProducts.addEventListener("click", e =>{{
  if(e.target.classList.contains("cio")){
    const product = e.target.parentElement.parentElement
    const title = product.querySelector("p").textContent;
    
    console.log(title);
    
    allProducts = allProducts.filter( e => 
      e.titulo !== title);
    }

    showProducts()  

    // if(contadorPoducts.textContent >= 0){
    //   contadorPoducts.classList.add("mm")
    // }
}})

/// FUNCTION PARA MOSTRAR HTML 

const buy = document.querySelector("#toll")
const small = document.querySelector("#tull")

const showProducts = ( ) =>{
  /// limpiar carrito 
 
  buy.classList.remove("mm")
  contenedorProducts.innerHTML = "";
  
  if(allProducts.length == 0){
    contenedorProducts.innerHTML = `<p class="carrito-alert">Carrito Vacio</p> ` 
    buy.classList.add("mm")
    }

let total = 0;
let totalofproducts = 0;
let orderdata = {}

///
allProducts.forEach(product =>{
    const conteinerProducts = document.createElement("div");
    conteinerProducts.classList.add("dvAlert");
    
    conteinerProducts.innerHTML = `
<div class="conteiner-img-product-card"><img src="./fots/reloj-venta.jpg"alt=""></div>
<div class="container--text--price--">
<p class="parrafo" id="titulin">${product.titulo}</p>
<div>
<p id ="precios">${product.precio}</p>
<p>Cantidad : ${product.cantidad}</p>
</div>
</div>
<div><i class="fas fa-times-circle cio"id="delate"></i></div>
<div id="wallet_container"></div> `
    
    contenedorProducts.append(conteinerProducts)
    
    // totalofproducts = totalofproducts + parseInt(product.cantidad * product.precio.slice(1));
    totalofproducts = totalofproducts + (product.cantidad * Number(product.precio.replace("$", "").replace(".", "")));
    
    total = total + product.cantidad;



    // orderdata = {
    //   titulo : document.getElementById("titulin").textContent,
    //   precios : document.getElementById("precios").textContent ,
    // }
})
  contadorPoducts.textContent = `${total}`
  totalApagar.textContent = `$${totalofproducts}`
  
  localStorage.setItem("carrito", JSON.stringify(allProducts));

};

botonpagar.addEventListener("click", async ()=>{
  const response = await fetch("https://ecomerce-back-sks5.onrender.com/create-order",{
    method: "POST",
    headers:{
      "Content-Type":"application/json",
    },
    body : JSON.stringify(allProducts)
  });

  const data = await response.json()
  window.location.href = data.init_point;

  
})


confCompra.forEach(boton => {
    boton.addEventListener("click", async (e) => {
        const indProduct =  e.target.parentElement
        
      const Products = {
       cantidad : 1, 
      //  img : indProduct.querySelector("img").textContent,
       titulo : indProduct.querySelector("h2").textContent,
       precio : indProduct.querySelector("p").textContent
     }
      localStorage.setItem("carrito", JSON.stringify([Products]));  

        window.location.href = "./vta.html";
    });
}); 

// Variable para almacenar el producto seleccionado en el modal
let activeProduct = null;


// function openQuickView(productData) {
//   activeProduct = productData; // <--- Guardamos los datos aquí
  
//   document.getElementById('modalTitle').innerText = productData.title;
//   document.getElementById('modalPrice').innerText = productData.price;
//   document.getElementById('modalDescription').innerText = productData.description;
//   document.getElementById('modalMainImg').src = productData.mainImage;

//   const thumbnailsContainer = document.querySelector('.modal-thumbnails');
//   if (thumbnailsContainer) {
//     thumbnailsContainer.innerHTML = '';
    
//     let allImages = [productData.mainImage];
//     if (productData.images && productData.images.length > 0) {
//       const extraImages = productData.images.filter(img => img !== productData.mainImage);
//       allImages = allImages.concat(extraImages);
//     }

//     allImages.forEach((imgSrc, index) => {
//       const img = document.createElement('img');
//       img.src = imgSrc.trim();
//       img.alt = `Vista ${index + 1}`;
      
//       if (index === 0) {
//         img.classList.add('thumb-active');
//       }
      
//       img.onclick = function() {
//         changeMainImage(imgSrc.trim());
//         document.querySelectorAll('.modal-thumbnails img').forEach(t => t.classList.remove('thumb-active'));
//         img.classList.add('thumb-active');
//       };
      
//       thumbnailsContainer.appendChild(img);
//     });
//   }

//   document.getElementById('quickViewModal').classList.add('active');
// }



// Escuchar el clic en el botón "Comprar" dentro del modal
const modalBuyBtn = document.querySelector(".btn-buy-modal");
if (modalBuyBtn) {
  modalBuyBtn.addEventListener("click", () => {
    if (!activeProduct) return;

    const Product = {
      cantidad: 1,
      titulo: activeProduct.title,
      precio: activeProduct.price
    };

    // Guardamos exactamente igual que el botón de la tarjeta
    localStorage.setItem("carrito", JSON.stringify([Product]));
    
    // Redirigimos a la pasarela/formulario de ventas
    window.location.href = "./vta.html";
  });
}

// 1. Escuchar el clic en las tarjetas para abrir el modal con todos los datos
// // 1. Escuchar el clic en las tarjetas para abrir el modal con todos los datos
// 1. Event listener para abrir el modal
document.querySelectorAll(".tip").forEach(card => {
  card.addEventListener("click", (e) => {
    if (e.target.closest(".slider__link") || e.target.closest(".slider__linkk")) return;

    const productData = {
      title: card.dataset.title || card.querySelector(".tip__title")?.innerText || "",
      price: card.dataset.price || card.querySelector(".tip__txt")?.innerText || "",
      description: card.dataset.description || "Máquina de extrusión industrial para reciclaje de plástico y fabricación de filamento de 1,75 mm.",
      mainImage: card.dataset.mainImage || card.querySelector("img")?.src || "",
      images: card.dataset.images ? card.dataset.images.split(',').map(img => img.trim()) : [],
      video: card.dataset.video ? card.dataset.video.trim() : null
    };

    openQuickView(productData);
  });
});

function openQuickView(productData) {
  activeProduct = productData;
  document.getElementById('modalTitle').innerText = productData.title;
  document.getElementById('modalPrice').innerText = productData.price;
  document.getElementById('modalDescription').innerText = productData.description;

  const thumbnailsContainer = document.querySelector('.modal-thumbnails');
  thumbnailsContainer.innerHTML = '';

  // Miniatura de video primero
  if (productData.video) {
    const videoThumb = document.createElement('div');
    videoThumb.className = 'thumb-video-container thumb-active';
    videoThumb.innerHTML = `
      <img src="${productData.mainImage}" alt="Video">
      <div class="play-overlay"><i class="fas fa-play"></i></div>
    `;
    videoThumb.onclick = function () {
      showMainVideo(productData.video);
      clearActiveThumbs();
      videoThumb.classList.add('thumb-active');
    };
    thumbnailsContainer.appendChild(videoThumb);
  }

  // Miniaturas de imágenes
  let allImages = [productData.mainImage];
  if (productData.images.length > 0) {
    allImages = allImages.concat(
      productData.images.filter(img => img !== productData.mainImage)
    );
  }

  allImages.forEach((imgSrc, index) => {
    const img = document.createElement('img');
    img.src = imgSrc.trim();
    img.alt = `Vista ${index + 1}`;
    img.onerror = () => img.remove();

    if (!productData.video && index === 0) img.classList.add('thumb-active');

    img.onclick = function () {
      showMainImage(imgSrc.trim());
      clearActiveThumbs();
      img.classList.add('thumb-active');
    };
    thumbnailsContainer.appendChild(img);
  });

  // Abrir el modal y al final mostrar video o imagen
  document.getElementById('quickViewModal').classList.add('active');

  if (productData.video) {
    showMainVideo(productData.video);
  } else {
    showMainImage(productData.mainImage);
  }
}

function showMainImage(src) {
  const imgEl = document.getElementById('modalMainImg');
  const videoEl = document.getElementById('modalMainVideo');

  videoEl.pause();
  videoEl.style.display = 'none';

  imgEl.src = src;
  imgEl.style.display = 'block';
}

// function showMainVideo(videoSrc) {
//   const imgEl = document.getElementById('modalMainImg');
//   const videoEl = document.getElementById('modalMainVideo');

//   imgEl.style.display = 'none';
//   videoEl.style.display = 'block';

//   if (!videoEl.src.endsWith(videoSrc.replace('./', ''))) {
//     videoEl.src = videoSrc;
//     videoEl.load();
//   }
//   videoEl.muted = true;
//   videoEl.play().catch(() => {});
// }

function showMainVideo(videoSrc) {
  //  console.trace('showMainImage llamada con:', src);
  const imgEl = document.getElementById('modalMainImg');
  const videoEl = document.getElementById('modalMainVideo');

  imgEl.style.display = 'none';
  videoEl.style.display = 'block';
  videoEl.muted = true;

  // Asignar src ya dispara la carga, no hace falta load()
  if (!videoEl.src.endsWith(videoSrc.replace('./', ''))) {
    videoEl.src = videoSrc;
  }

  videoEl.currentTime = 0;
  const p = videoEl.play();
  if (p !== undefined) {
    p.catch(err => console.log('No pudo reproducir:', err.name, err.message));
  }
}

function clearActiveThumbs() {
  document.querySelectorAll('.modal-thumbnails img, .modal-thumbnails .thumb-video-container')
    .forEach(t => t.classList.remove('thumb-active'));
}

function closeQuickView() {
  const videoEl = document.getElementById('modalMainVideo');
  videoEl.pause();
  videoEl.currentTime = 0;
  document.getElementById('quickViewModal').classList.remove('active');
}
