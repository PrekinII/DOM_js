//window.addEventListener('scroll', function(event) {
    //inp.value = pageYOffset;
const divReveal = document.querySelectorAll('.reveal');

window.addEventListener('scroll', function(){
    for (let el of divReveal) {
        const {top, bottom} = el.getBoundingClientRect()
        if (bottom < window.innerHeight) {
            el.classList.add('reveal_active')
        }
        else {
            el.classList.remove('reveal_active')
        };
    };
})