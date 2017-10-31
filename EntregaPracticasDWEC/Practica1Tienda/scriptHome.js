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
  
}
