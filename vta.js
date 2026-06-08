
const btnSiguiente = document.querySelector(".btn-siguiente"); 
const checkMercadoPago = document.getElementById("mp");
const checkCreditoDebito = document.getElementById("Credito-debito")

if (btnSiguiente) { 
    btnSiguiente.addEventListener("click", async (e) => {
      e.preventDefault()
      
      const datosCliente = {

           name: document.getElementById("name")?.value || "",
           nameAut: document.getElementById("nameAut")?.value || "",
           nContact: document.getElementById("nContact")?.value || "",
           lcda: document.getElementById("lcda")?.value || "",
           dc: document.getElementById("dc")?.value || "",
           etcalle: document.getElementById("etcalle")?.value || ""
        }


        if (checkMercadoPago && checkMercadoPago.checked) {
            const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
            
            if (carrito.length === 0) {
                alert("El carrito está vacío");
                return;
            }
try{

    const response = await fetch("https://ecomerce-back-sks5.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({items:carrito, cliente:datosCliente})
    });
    
    const data = await response.json();
    window.location.href = data.init_point;
}
catch (error){
    console.error("Error al procesar la orden:", error);
    alert("Hubo un problema al conectar con el servidor.")

}
}
else if(checkCreditoDebito && checkCreditoDebito.checked){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
                if (carrito.length === 0) {
                alert("El carrito está vacío");
                return;
            }
try{

    const response = await fetch("https://ecomerce-back-sks5.onrender.com/create-order/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({items:carrito, cliente:datosCliente})
    });
    
    const data = await response.json();
    if (data.url) {
    window.location.href = data.url; 
} else {
    alert("Hubo un error al generar la pasarela de pago.");
}
}
catch (error){
    console.error("Error al procesar la orden:", error);
    alert("Hubo un problema al conectar con el servidor.")

}

}
else {
    alert("Por favor, seleccione el metodo de pago");
}
});
}
// MAIL


