
function entrar(){
    let user = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (user == senha){
        window.location.href = "restrito.html";
    }
};
