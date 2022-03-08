let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


document.querySelector('#hamburguer').onclick = function(){
  document.querySelector('.nav_menu2').classList.toggle('menu-hidden');
  /* document.querySelector('#navbar').style.height = '300px'; */
}
