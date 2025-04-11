const burger = document.querySelector('#burer');
const menu = document.querySelector('burger');


burger.addEventListener('click,',() =>{
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');

    }
})