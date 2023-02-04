let btn = document.querySelector('.nav-toggle');
let sidebar = document.querySelector('.sidebar')


btn.addEventListener('click', function(){
if(btn.firstElementChild.classList.contains('fa-bars')){
    btn.firstElementChild.classList.replace('fa-bars', 'fa-xmark');
}else{
    btn.firstElementChild.classList.replace('fa-xmark', 'fa-bars');
}

btn.classList.toggle('nav-toggle-left')
sidebar.classList.toggle('showsidebar')
})