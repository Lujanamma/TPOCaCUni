
function FuncionResponsiveNavbar() {
    var x = document.getElementById("minavbar");
    if (x.className === "navbar_lista_links") {
      x.className += " responsive";
    } else {
      x.className = "navbar_lista_links";
    }
}