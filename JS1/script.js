let filmes = [
    {
        titulo: "Capitão América: O Primeiro Vingador",
        ano: 2011,
        genero: "Ação, Aventura",
        nota: 8,
        poster: "imagens/poster1.jpg"
    },
    {
        titulo: "Homem-Aranha: Brand New Day",
        ano: 2026,
        genero: "Ação, Aventura",
        nota: 9,
        poster: "imagens/poster8.jpg"
    },
    {
        titulo: "Capitão América: Guerra Civil",
        ano: 2016,
        genero: "Ação, Aventura",
        nota: 8,
        poster: "imagens/poster2.jpg"
    },
    {
        titulo: "Guardiões da Galáxia Volume 2",
        ano: 2017,
        genero: "Ação, Aventura",
        nota: 8,
        poster: "imagens/poster3.jpg"
    },
    {
        titulo: "Vingadores: Doutor Destino",
        ano: 2026,
        genero: "Ação, Aventura",
        nota: 9,
        poster: "imagens/poster4.jpg"
    },
    {
        titulo: "Pantera Negra",
        ano: 2018,
        genero: "Ação, Aventura",
        nota: 8,
        poster: "imagens/poster5.jpg"
    },
    {
        titulo: "Vingadores: O filme",
        ano: 2012,
        genero: "Ação, Aventura",
        nota: 8,
        poster: "imagens/poster6.jpg"
    },
    {
        titulo: "Deadpool e Wolverine",
        ano: 2024,
        genero: "Ação, Aventura",
        nota: 9,
        poster: "imagens/poster7.jpg"
    }
];
function mostrarFilmes(lista) {
    let catalogo = document.querySelector(".catalogo");
    let contador = document.getElementById("contador");

    catalogo.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i];

        catalogo.innerHTML += `
            <div class="filme">
                <h3 style="color: rgb(48, 196, 216);">${filme.titulo}</h3>
                <img class="poster" src="${filme.poster}" alt="${filme.titulo}">
                <p style="color: rgb(48, 196, 216);">Ano: ${filme.ano}</p>
                <p style="color: rgb(48, 196, 216);">Gênero: ${filme.genero}</p>
                <p style="color: rgb(48, 196, 216);">Nota: ${filme.nota}</p>
                ${filme.nota >= 8 ? "<p style=\"color: rgb(48, 196, 216);\"> Recomendado</p>" : ""}
            </div>
        `;
    }

    contador.textContent = lista.length;

    if (lista.length === 0) {
        catalogo.innerHTML = "<p>Nenhum filme encontrado.</p>";
    }
}

mostrarFilmes(filmes);