trazerPersonagens = () => {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  for (let indice = 0; indice < 4; indice++) {
  let numeroAleatorio = Math.floor(Math.random()* 671);
  fetch (`https://rickandmortyapi.com/api/character/${numeroAleatorio}`,{
    method: "GET",
    Headers: {
      Accept: "aplication/json",
      "Content-type":"application/json",
    }, 
  })
    .then ((response) => response.json ())
    .then ((data) => {

      
      const div = document.createElement("div");
      const nomePersonagem = document.createElement ("p");
      const imagemPersonagem = document.createElement ("img")

      imagemPersonagem.src = data.image;
      imagemPersonagem.alt = data.name;
      nomePersonagem.innerHTML = data.name;
      div.appendChild(imagemPersonagem);
      div.appendChild(nomePersonagem);

      container.appendChild(div);

    });
  }
};

trazerPersonagens();