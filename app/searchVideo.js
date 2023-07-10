import { functions } from "./main.js";

const button = document.querySelector('[data-button]');


async function searchVideos(event){
    event.preventDefault();
    const listaVideos = document.querySelector('[data-list-videos]')
    const inputSearch = document.querySelector('[data-input-search]').value;
    const videosFilter = await functions.apiSearch(inputSearch)
    listaVideos.innerHTML="";
    videosFilter.forEach(video => listaVideos.appendChild(functions.criarCard(video.url, video.imagem, video.titulo, video.descricao)));
    if(videosFilter.length == 0){
        listaVideos.innerHTML=`<h2 class = "mensagem__titulo"> Não existe vídeos com esse parâmetro de busca.</h2>`;
    }
}


button.addEventListener("click", event => searchVideos(event))