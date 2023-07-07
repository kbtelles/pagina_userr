let user_url = "https://jsonplaceholder.typicode.com/users";
let post_api_url = "https://jsonplaceholder.typicode.com/posts";

async function post(api) {
  let obtenerUser = await fetch(api);
  let users = await obtenerUser.json();
  let user = users[3];
  actualizarPerfil(user);
}

async function actualizarPerfil(user) {
  let codigo_perfil = `
    <div class="portada"></div>
    <section class="todo">
      <section class="caja">
        <div class="fotoperfil">
          <img class="foto" src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Pic.png" alt="">
          <h2 class="name">${user.name}</h2> 
          <h1 class="user">${user.username}</h1>
        </div>
      </section>
      <section class="caja1">
        <div class="iconos">
          <img class="mundo" src="https://cdn-icons-png.flaticon.com/512/1089/1089292.png" alt="">
          <img class="check" src="https://cdn.icon-icons.com/icons2/2368/PNG/512/check_box_double_icon_143825.png" alt="">
          <h1 class="seguir">Seguir</h1>
        </div>
      </section>
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
}

async function cargar_post(data) {
  let dom = document.querySelector(".perfil");
  data.forEach(post => {
    let item = document.createElement("div");
    item.innerHTML = `
      <div class="post">
        <h2 class="titulo">${post.title}</h2>
        <p class="cuerpo">${post.body}</p>
      </div>
    `;
    dom.appendChild(item);
  });
}

async function fetchDataAndLoadPosts() {
  try {
    let obtenerPost = await fetch(post_api_url);
    let posts = await obtenerPost.json();
    objeto(posts);
    cargar_post(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

post(user_url);
fetchDataAndLoadPosts();
