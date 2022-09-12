var toggleButton=document.getElementById('toggle-button');
var navList = document.getElementById('naviList')

toggleButton.addEventListener('click', ()=>{
    navList.classList.toggle('active');
})