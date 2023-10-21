
function FuncionResponsiveNavbar() {
    var x = document.getElementById("minavbar");
    if (x.className === "navbar_lista_links") {
      x.className += " responsive";
    } else {
      x.className = "navbar_lista_links";
    }
}

function FuncionMuestraNoticias() {
  var x = document.getElementById("deslizador_id");
  if (x.className === "deslizador") {
    x.className += " mas_noticias";
  } else {
    x.className = "deslizador";
  }
}

function CambioTramite(evt, TramiteActivo ){
  var i, contenido_pestania, pestania_link;

  contenido_pestania = document.getElementsByClassName("contenido_pestania");
  for (i = 0; i < contenido_pestania.length; i++) {
    contenido_pestania[i].style.display = "none";
  } 

  pestania_link = document.getElementsByClassName("pestania_link");
  for (i = 0; i < pestania_link.length; i++) {
    pestania_link[i].className = pestania_link[i].className.replace("active", "");
  }

  document.getElementById(TramiteActivo).style.display = "block";
  evt.currentTarget.className += " active";
}







function validarPreinscripcion() {
  let apellido = document.forms["pre-inscripcion_form"]["apellido"].value;
  let nombre = document.forms["pre-inscripcion_form"]["nombre"].value;
  let dni = document.forms["pre-inscripcion_form"]["dni"].value;
  let cuil = document.forms["pre-inscripcion_form"]["cuil"].value;
  let email = document.forms["pre-inscripcion_form"]["email"].value;
  let genero = document.forms["pre-inscripcion_form"]["genero"].value;
  let alumno_existente = document.forms["pre-inscripcion_form"]["alumno_existente"].value;
  let id_curso = document.forms["pre-inscripcion_form"]["id_curso"].value;

  if (apellido=="" || nombre=="" || dni=="" || cuil=="" || email=="" || genero=="" || alumno_existente=="" || id_curso=="") {
    alert("Todos los campos son obligatorios")
  } 
  

}