window.addEventListener('load', loadPageWindow);

function loadPageWindow() {
    var myFormAction = document.querySelector('form'),
        writingBtn = document.getElementById('writingBtn'),
        vanishingElement = document.getElementById('vanishingElement'),
        backToSiteBtn = document.getElementById('backSiteBtn'),
        allSportCart = document.querySelector('.row'),
        linkFreeLesson = document.querySelector('.link-freelesson'),
        freeLessonBtn = document.querySelector('.btn.btn-outline-warning.btn-rounded'),
        formPageDiv = document.querySelector('.formPage');


    myFormAction.classList.add('visible');
    formPageDiv.classList.remove('formPage');

    writingBtn.addEventListener('click', openToWriting);
    backToSiteBtn.addEventListener('click', bakcToSite);

    function openToWriting() {
        // myFormAction.classList.toggle('visible');
        // formPageDiv.classList.toggle('formPage');
        // vanishingElement.style.display = 'none';
        // allSportCart.style.display = 'none';
    }

    function bakcToSite() {
        myFormAction.classList.toggle('visible');
        formPageDiv.classList.toggle('formPage')
        vanishingElement.style.display = '';                               
        allSportCart.style.display = '';
    }
    freeLessonBtn.onmouseover = function() {
        linkFreeLesson.style.color = "black"
        }
    
        freeLessonBtn.onmouseleave = function() {
            linkFreeLesson.style.color = "white"
        }
}
