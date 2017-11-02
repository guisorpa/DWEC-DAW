if(navigator.cookieEnabled == "false"){
  alert("TIENES DESHABILITADOS LAS COOKIES. Habilitalas por favor ");
}

var us1 = new Usuario(producto);
us1.calcularImporte();
us1.mostrarComprar();
