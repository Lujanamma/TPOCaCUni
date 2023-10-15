
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