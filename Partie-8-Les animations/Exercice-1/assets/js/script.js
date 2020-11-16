document.addEventListener('DOMContentLoaded', function () {
  window.onscroll = function scroll(ev) {
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  }
})

/*let toTop = document.getElementById('top');
toTop.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}*/