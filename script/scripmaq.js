
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




function NavbarCelularAbre() {
  document.getElementById("minavbar").style.width = "100%";
}

function NavbarCelularCierra() {
  document.getElementById("minavbar").style.width = "0%";
}

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openMenu()
{
    document.getElementById('container').style.right='0%';
    document.getElementById('menu').style.opacity='1';
}
function closeMenu()
{
    document.getElementById('container').style.right='-100%';
    document.getElementById('menu').style.opacity='0';
}