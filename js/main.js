let api_url = "https://jsonplaceholder.typicode.com/posts" ;

async function post(api){
  let obtenerpost = await fetch(api); //La función fetch consiste en consultar la función api_url
  let dato = await obtenerpost.json(); //Archivo tipo json
    objeto(dato) //Function
    cargar_post(dato)
}
post(api_url);


function objeto(dato){
    dato.forEach(post => {
        console.log("------------------------------------------------------------")
        console.log('Id:', post.id);
        console.log('Title:', post.title);
        console.log('Body:', post.body);
        console.log("------------------------------------------------------------")
      });
}

function cargar_post(data){
  let dom = document.querySelector(".root");
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

