let codigo_perfil = `
    <div class="portada"></div>
    <div class="fotoperfil">
    <img class="foto" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Pic.png" alt="">
    </div>
    <section class="caja1">
        <div class="info">
        <h2 class="name">Leanne Graham</h2>
        <h1 class="user">@Bret</h1>
        </div>
        <div class="iconos">
        <img class="mundo" src="https://cdn-icons-png.flaticon.com/512/1089/1089292.png" alt="">
        <img class="check" src="https://cdn-icons-png.flaticon.com/512/44/44796.png" alt="">
        <img class="seguir" src="https://png.pngtree.com/png-clipart/20230124/ourmid/pngtree-follow-button-png-image_6571180.png" alt="">
        </div>
    </section>
    <div class="secciones">
        <div class="posit"> 
        <h1 class="text">Post</h1>
        </div>
        <div class="useri"> 
        <h1 class="text">User</h1>
        </div>
        <div class="photos">
        <h1 class="text">Photos</h1>
        </div>
    </div>
`;

let perfil = document.querySelector(".perfil");
perfil.innerHTML = codigo_perfil;
