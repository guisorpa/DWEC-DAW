
onload = function(){
  var form = document.forms[0];
  form.onsubmit = function(e){
    e.preventDefault();
    var most = document.getElementById('mostrar');
    var men = "";
    var dev = true;
    var name = nombre.value;
    var pass = contra.value;
    if(name.length == null || !(/^\S+[\s?\S+]*$/.test(name))){
      men += "nombre incorrecto.</br>";
      dev = false;
    }
    if(pass.length == null || !(/^\d{8}[A-Z]$/.test(pass))){
      men += "Contraseña incorrecta. </br>";
      dev = false;
    }

    if(dev){
      form.action = "trabajador.html";
      form.submit();
    }else{
      mostrar.innerHTML = men;

    }
  }
}
