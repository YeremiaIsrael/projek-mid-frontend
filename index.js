window.addEventListener('scroll',function(){
  let nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.toggle('posisi');
  }
})
