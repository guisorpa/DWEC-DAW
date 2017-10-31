function Usuario(prod){
  this.id = Math.floor(Math.Random() * 1000)+1;
  this.idioma = navigator.language;
  this.navegador = navigator.userAgent;
  this.compra = prod;
  this.importe = 0;

  this.eliminarCompra = function(){
    if(this.compra.length > 0){
      delete this.compra[length];

    }else{
      alert("No tienes compra.")
    }
  }
  this.calcularImporte = function(){
    if(this.compra.length > 0){
      var total = this.compra.reduce(function(suma,valor){
          return suma + valor.precio;
      },0);
      this.importe = total;
    }else{
      alert("No tienes compra.");
    }

  }
  this.mostrarComprar = function(prod){
    var str = "";
    if(produ == undefined){
      for(var i = 0; i< this.compra.length;i++){
        str += "<div>";
        str += "<img src='" + this.compra[i].foto + "' alt='";
        str += this.compra[i].nombre + "'>";
        str += "<p>Producto: " + this.compra[i].nombre + " </p>";
        str += "<p>Descripción: " + this.compra[i].descripcion + " </p>";
        str += "<p><b>Prrecio: " + this.compra[i].precio + " €</b></p>";
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
  }
}
