'use strict';
const dataTraigger = document.querySelector('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

dataTraigger.addEventListener('click', () =>{
    modal.classList.add('show');
    modal.classList.remove('hide');
});

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    
    document.body.style.overflow = 'hidden';
}

modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) =>{
    if(e.target === modal){
        closeModal('hidden');
    }
});