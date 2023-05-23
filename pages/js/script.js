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

// function login(){
//     let login = document.getElementById("login").value;
//     let senha = document.getElementById("senha").value;

//     if (login == senha){
//         window.location.href = "restrito.html";
//     }
// };


let btnContato = document.getElementById("btnContato");

btnContato.addEventListener("click",  () => {
    let msg = document.getElementById("frmMessageSubmited");
    let back = document.getElementById("linkBackHome");

    msg.innerHTML = "Mensagem Enviada com sucesso!";
    back.style.display = "block";
});