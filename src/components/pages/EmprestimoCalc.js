const comCarencia = document.querySelector('#comCarencia');
const hiddenList = document.querySelector('#hiddenList');

comCarencia.addEventListener('change', function(){
    if(this.checked) {
        hiddenList.removeAttribute('hidden');
    } else{
        hiddenList.setAttribute('hidden', 'hidden')
    }
})