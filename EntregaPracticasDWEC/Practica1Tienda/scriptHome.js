var p = new Surtido(productos);
// var compra = [productos[0], productos[3]];
p.dibujarSurtido();


function recarga(){
  location.reload();
}
function verPorPrecioMas(p){
  p.ordenPorPrecioMas();
  p.dibujarSurtido();
}
function verPorPrecioMenos(p){
  p.ordenPorPrecioMenos();
  p.dibujarSurtido();
}
function verVegano(){
  p.dibujarSurtido(p.ordenarVegano());
}
function condCompraOnline(){
  var v = window.open("", "_blank", "width=400, height=400");
  v.document.write("<h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>");
  v.document.write("<br><button onclick='window.close()'>Cerrar</button>")
}
function navegarCarrito(){
  open("carrito.html");
}
