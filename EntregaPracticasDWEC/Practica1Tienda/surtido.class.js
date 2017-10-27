function ordenaMenos(n1, n2){
  return n1.precio-n2.precio;
}
function ordenaMas(n1, n2){
  return n2.precio-n1.precio;
}
function filtrarVegano(n1){
  return n1.vegano == true;
}



function Surtido(productos){
  this.productos = productos;
  this.ordenarVegano = function(){
    var v = [];
    v = this.productos.filter(filtrarVegano);
    return v;
  }

  this.ordenPorPrecioMenos = function(){
    this.productos.sort(ordenaMas);
  }

  this.ordenPorPrecioMas = function(){
    this.productos.sort(ordenaMenos);
  }
  this.dibujarSurtido = function(produ){
    cuerpo.innerHTML = "";
    var str = "";
    if(produ == undefined){
      for(var i = 0; i < this.productos.length; i++){
        str += "<div>";
        str += "<img src='" + this.productos[i].foto + "' alt='";
        str += this.productos[i].nombre + "'>";
        str += "<p>Producto: " + this.productos[i].nombre + " </p>";
        str += "<p>Descripción: " + this.productos[i].descripcion + " </p>";
        str += "<p><b>Prrecio: " + this.productos[i].precio + " €</b></p>";
        str += "</div>";
      }

    }else{
      for(var i = 0; i < produ.length; i++){
        str += "<div>";
        str += "<img src='" + produ[i].foto + "' alt='";
        str += produ[i].nombre + "'>";
        str += "<p>Producto: " + produ[i].nombre + " </p>";
        str += "<p>Descripción: " + produ[i].descripcion + " </p>";
        str += "<p><b>Prrecio: " + produ[i].precio + " €</b></p>";
        str += "</div>";
      }
    }
      cuerpo.innerHTML = str;
  }
}
