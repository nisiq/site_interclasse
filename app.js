window.addEventListener("DOMContentLoaded", (event) => {

    var formulario = document.getElementById('form-entrar') 

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        var user = document.getElementById("user").value;
        var password = document.getElementById("password").value;

        if(user == "admin" && password == "admin"){
            window.location.href = 'cadastro.html'
        }else{
            Swal.fire(
                'informações inválidas',
                'Seu email  ou senha estão incorretos',
                'error'
              )
        }
        

    });

})