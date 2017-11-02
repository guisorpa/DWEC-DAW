if(navigator.cookieEnabled == "false"){
  alert("TIENES DESHABILITADOS LAS COOKIES. Habilitalas por favor ");
}

var us1 = new Usuario(compra);
us1.calcularImporte();
us1.mostrarComprar();


function eliminar(){
  us1.eliminarCompra();
  us1.calcularImporte();
  us1.mostrarComprar();

}
function hacerPedido(us){
  if(us1.compra.indexOf(0) == -1){
    var respuesta = confirm("Aceptas las condiciones de compra?");
    if (respuesta) {
      open("pedidoOk.html");
    }else{
      alert("no has aceptado las condiciones, no va a pasar nada");

    }
  }
}
function condCompraOnline(){
  var v = window.open("", "_blank", "width=400, height=400");
  v.document.write("<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>");
  v.document.write("<br><button onclick='window.close()'>Cerrar</button>")
}
function inicio(){
  open("home.html");
}
function imprimir(){
  window.print();
}
