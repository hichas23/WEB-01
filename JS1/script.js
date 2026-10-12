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
        genero: "Ação, Aventura,Drama",
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
        genero: "Ação, Aventura,Comédia",
        nota: 9,
        poster: "imagens/poster7.jpg"
    }
];
let favoritos = [];
function mostrarFilmes(lista) {
    let catalogo = document.querySelector(".catalogo");
    let contador = document.getElementById("contador");

    catalogo.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let filme = lista[i];

        catalogo.innerHTML += `
            <div class="filme">
           <button onclick="favoritar('${filme.titulo.replace(/'/g, "\\'")}')">♥ Favoritar</button>
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
let campoBusca = document.getElementById("busca");

campoBusca.addEventListener("input", function () {
    let texto = campoBusca.value.toLowerCase();
    let filmesFiltrados = [];

    for (let i = 0; i < filmes.length; i++) {
        if (filmes[i].titulo.toLowerCase().includes(texto)) {
            filmesFiltrados.push(filmes[i]);
        }
    }

    mostrarFilmes(filmesFiltrados);
});

let filtroGenero = document.getElementById("filtro-genero");

filtroGenero.addEventListener("change", function () {
    let generoSelecionado = filtroGenero.value;
    let filmesFiltrados = [];

    if (generoSelecionado === "Todos") {
        filmesFiltrados = filmes;
    } else {
        for (let i = 0; i < filmes.length; i++) {
            if (filmes[i].genero.includes(generoSelecionado)) {
                filmesFiltrados.push(filmes[i]);
            }
        }
    }

    mostrarFilmes(filmesFiltrados);
});
let botaoInverter = document.getElementById("btn-inverter");

botaoInverter.addEventListener("click", function () {
    filmes.reverse();
    mostrarFilmes(filmes);
});


function favoritar(titulo) {
    if (!favoritos.includes(titulo)) {
        favoritos.push(titulo);
    }

    mostrarFavoritos();
}

function mostrarFavoritos() {
    let listaFavoritos = document.getElementById("lista-favoritos");
    let contadorFavoritos = document.getElementById("contador-favoritos");

    listaFavoritos.innerHTML = "";

    for (let i = 0; i < favoritos.length; i++) {
        listaFavoritos.innerHTML += `
    <li style="color: rgb(48, 196, 216);">
        ${favoritos[i]}
    </li>`;
    }

    contadorFavoritos.textContent = favoritos.length;
}
let botaoLimpar = document.getElementById("btn-limpar-favoritos");

botaoLimpar.addEventListener("click", function () {
    favoritos = [];
    mostrarFavoritos();
});

let destaque = document.getElementById("titulo-destaque");

destaque.addEventListener("mouseenter", function () {
    destaque.style.color = "black";
});

destaque.addEventListener("mouseout", function () {
    destaque.style.color = "white";
});

