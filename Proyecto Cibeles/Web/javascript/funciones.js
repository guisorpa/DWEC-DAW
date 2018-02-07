/* Calendario */
onload = function(){
  document.getElementsByTagName('button')[0].addEventListener("click", calendario);
  function calendario(){
    var mes_text = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var dia_text = ["Dom", "Lun", "Mar", "Mie", "Juv", "Vie", "Sab"];
    var t = new Date();
    var ac = t.getMonth();
    estructurar();

    function estructurar() {
      for (m = 0; m <= 11; m++) {

        if(m == ac){
            //Mes
          var mes = document.createElement("DIV");
          mes.className = "mes";
          document.body.appendChild(mes);
          //Tabla
          var tabla_mes = document.createElement("TABLE");
          tabla_mes.className = "tabla_mes";
          mes.appendChild(tabla_mes);
          //Título
          var titulo = document.createElement("CAPTION");
          titulo.className = "titulo";
          titulo.innerText = mes_text[ac];
          tabla_mes.appendChild(titulo);
          //Cabecera
          var cabecera = document.createElement("THEAD");
          tabla_mes.appendChild(cabecera);
          var fila = document.createElement("TR");
          cabecera.appendChild(fila);
          for (d = 0; d < 7; d++) {
            var dia = document.createElement("TH");
            dia.innerText = dia_text[d];
            fila.appendChild(dia);
          }
          //Cuerpo
          var cuerpo = document.createElement("TBODY");
          tabla_mes.appendChild(cuerpo);
          for (f = 0; f < 6; f++) {
            var fila = document.createElement("TR");
            cuerpo.appendChild(fila);
            for (d = 0; d < 7; d++) {
              var dia = document.createElement("TD");
              dia.innerText = "";
              fila.appendChild(dia);
            }
          }
        }
      }
    }

    numerar();

    function numerar() {
      for (i = 1; i < 366; i++) {
        var fecha = fechaPorDia(2018, i);
        var mes = fecha.getMonth();
        var select_tabla = document.getElementsByClassName('tabla_mes')[ac];
        var dia = fecha.getDate()
        var dia_semana = fecha.getDay();
        if (dia == 1) {var sem = 0;}
        if(mes == ac){
          console.log(select_tabla.children[2]);
          console.log(select_tabla.children[2].children[sem]);
          console.log(select_tabla.children[2].children[sem].children[dia_semana]);
          select_tabla.children[2].children[sem].children[dia_semana].innerText = dia;
        }

        if (dia_semana == 6) { sem = sem + 1; }
      }
    }

    function fechaPorDia(año, dia) {
      var date = new Date(año, 0);
      return new Date(date.setDate(dia));
    }

  }
var x = true;
/*Botones menu*/
document.getElementsByClassName("desple0")[0].onclick= function(){
  $("#ver").slideToggle();
}
/*  */

}
