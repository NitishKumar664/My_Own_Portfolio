var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "SalesForce Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.querySelector('.top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
