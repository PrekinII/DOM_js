//const rotator = document.querySelectorAll('.rotator__case')
const rotator = document.querySelector('.rotator').children
let i = 0
setInterval(() => {
    rotator[i].setAttribute('class', 'rotator__case')
    if (i < rotator.length-1){
        rotator[i].nextElementSibling.setAttribute('class', 'rotator__case rotator__case_active');
        i++
    }
    else {       
        i = 0;
        rotator[i].setAttribute('class', 'rotator__case rotator__case_active');
    }
},1000)
