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
}
