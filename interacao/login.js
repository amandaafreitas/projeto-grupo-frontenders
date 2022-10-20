
    
        // formulario.style.display = "none";
        // mensagem.innerHTML = "<p> Login efetuado com sucesso! </p>"
        function Enviar(){
    
            
            var email = document.getElementById("ilogin");
            var senha = document.getElementById("isenha");
            
            
        
        
            if(senha.value != "" &&  email.value !=""){
                alert(`Login efetuado com sucesso!`); 
            }else{
                alert(`\tERRO \nPreencha todos os campos corretamente`);
            }
        }

    
