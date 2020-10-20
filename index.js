window.addEventListener('scroll',function(){
  let nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.toggle('posisi');
  }
})
const tbody=document.querySelector('tbody');
const form =document.querySelector('form');
const studentinfo = {
  id:document.querySelector('#id'),
  name:document.querySelector('#name')
}
form.addEventListener('submit',forminput);

document.querySelector('.searchbar').addEventListener('keyup',function(){
  var nilaisearch = this.value.toUpperCase();
  var data =tbody.getElementsByTagName('tr')
  for (var i = 0; i < data.length; i++) {
    const nilai = data[i].getElementsByTagName('td')[1];
    if (nilai.textContent.toUpperCase().includes(nilaisearch)>0) {
      data[i].style.display = ''
    }else{
      data[i].style.display = 'none'
    }
  }
})

function forminput(e){
  e.preventDefault();

}
