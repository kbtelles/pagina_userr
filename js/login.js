/**let user_url = "https://jsonplaceholder.typicode.com/users";


    async function post(api) {
    let obteneruser = await fetch(api);
    let user = await obteneruser.json();
    ingresoDatos(user);
    }
    post(user_url);


async function ingresoDatos(user) {
    let evaluar_usuario = document.querySelector(".ingresar1").value;

    let usernameExists = false;

    for (let userData of user) {
      if (userData.username === evaluar_usuario) {
        usernameExists = true;
        break;
      }
    }
  
    if (usernameExists) {
      console.log("Hello");
      window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
      console.log("Buu");
    }
  }



    async function ingresarContraseña() {
        let evaluar_contra = document.querySelector(".ingresar2").value;
    
        let contraseña123 = "123";
      
        if (evaluar_contra === contraseña123) {
          console.log("wii");
          window.location.href = "http://127.0.0.1:5500/index.html";

        } else {
          console.log("juasjuas");
        }
      }

      document.querySelector(".boton").addEventListener("click", function() {
        post(user_url);
        ingresarContraseña();
        actualizarPerfil();
        });*/