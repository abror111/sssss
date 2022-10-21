let toggle=document.querySelector('.menu')
let toggle2=document.querySelector('.heder_div')
let toggle1=document.querySelector('.menu_1')
toggle.addEventListener('click',(index)=>{
  // console.log('salomm')
  toggle2.classList.toggle('show')
   toggle1.classList.toggle('show')
})
