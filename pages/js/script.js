function scrollChangeColor () {
    // let header = document.querySelector ("header");
    let seta = document.querySelector(".seta")
    if (scrollY > 80) {
        // header.classList.add("style-background");
        seta.classList.add("show-seta");
    }
    else {
        // header.classList.remove("style-background");
        seta.classList.remove("show-seta"); 
    }
}

window.addEventListener('scroll', scrollChangeColor);