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





















