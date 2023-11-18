const bottomNav = document.querySelector('.btm-nav');
const navToggle = document.querySelector('.mobile-nav-toggle')

navToggle.addEventListener('click', ()=> {

    const visibility = bottomNav.getAttribute('data-visible');


    if(visibility === "false"){
        bottomNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }else if(visibility === "true"){
        bottomNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

});
