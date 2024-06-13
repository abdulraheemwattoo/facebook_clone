var createBtn = document.querySelector('.create_btn');
var popupBtn = document.querySelector('.signup_popup');
var closeBtn = document.querySelector('.fa-xmark');

if (createBtn && popupBtn) {
    createBtn.addEventListener('click', function(){
        popupBtn.classList.add('show');
    });
} else {
    console.error('Element(s) not found:', { createBtn, popupBtn });
}

if (closeBtn) {
    closeBtn.addEventListener('click', function(){
        popupBtn.classList.remove('show');
    });
} else {
    console.error('Close button not found:', { closeBtn });
}
