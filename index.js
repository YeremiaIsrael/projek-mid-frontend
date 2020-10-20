window.addEventListener('scroll',function(){
  let nav = document.querySelector('nav');
  if (window.scrollY > 0) {
    nav.classList.toggle('posisi');
  }
})
const tbody=document.querySelector('tbody');
const form =document.querySelector('form');
const show = document.querySelector('.tampilkan');
const studentinfo = {
  id:document.querySelector('#id'),
  name:document.querySelector('#nama'),
  gender:[document.querySelector('#r1'),document.querySelector('#r2')],
  fakultas:document.querySelector('#fakultas'),
  prodi:document.querySelector('#prodi')
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
form.style.display = 'none'
function tampilsembunyi(){
  if (form.style.display == 'none') {
    form.style.display = 'block'
  }else{
    form.style.display = 'none'
  }
}
function forminput(e){
  e.preventDefault();
  const rows =[
   document.createElement('tr'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('td'),
   document.createElement('button')
 ];
 let jenisK = studentinfo.gender.map(i=>{
   if (i.checked) {
    return i.value;
   }
 })
 rows[1].textContent=studentinfo.id.value;
 rows[2].textContent=studentinfo.name.value;
 rows[3].textContent=jenisK;
 rows[4].textContent=studentinfo.fakultas.value;
 rows[5].textContent=studentinfo.prodi.value;
 rows[6].className='btn bg-lg btn-primary'
 rows[6].textContent='delete'
 rows[6].addEventListener('click',function(){
   const row =  this.parentNode.parentNode;
   row.parentNode.removeChild(row);
 })

 rows[0].appendChild(rows[1]);
 rows[0].appendChild(rows[2]);
 rows[0].appendChild(rows[3]);
 rows[0].appendChild(rows[4]);
 rows[0].appendChild(rows[5]);
 rows[0].appendChild(rows[6]);

 studentinfo.id.value = ''
 studentinfo.name.value = ''
 studentinfo.fakultas.value = ''
 studentinfo.prodi.value = ''

 tbody.appendChild(rows[0]);
}
