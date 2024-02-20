
 // Creation d'une fonction pour definir verifier la validiter des adresses e-mail
 function emailValidation(email){
     var re = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
     return re.test(email);
 }
 // Creation d'une fonction pour gerer les cas de validites et d'invalidites des adresses e-mail
 export function validation(){
    const submit = document.querySelector("main div form .submit");

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        var email = $("#e-mail").val();
        console.log(email);

        if (emailValidation(email)){
            window.location.href="Success/index.html";
        } else {

            // Changement de la couleur de l'adresse e-mail en cas d'erreur
            
            $("#e-mail").css("color", "red");
            $("#e-mail").css("background-color", "#FFE8E6");



            // affichage du message d'erreur

            let p = `
                    <p>
                        Email address
                    </p>
                    <p class="error-message">
                        Valid email required
                    </p>
            
            `;

            let div = document.querySelector("form label");
            div.innerHTML = p;
            document.getElementById("e-mail").className = "horizontal-shaking";

        }

        
        function stopShake(){
            document.getElementById("e-mail").className = "";
        }
        function hideErrorMessage(){
            let p = `
                    <p>
                        Email address
                    </p>
            `;
            let div = document.querySelector("form label");
            div.innerHTML = p;
        }

        const textbox = document.getElementById("e-mail");
        textbox.addEventListener("click", () => {
            $("#e-mail").css("color", "black");
            $("#e-mail").css("background-color", "white");

        })

        setTimeout(stopShake,300);
        setTimeout(hideErrorMessage,800);
    })

     
 }