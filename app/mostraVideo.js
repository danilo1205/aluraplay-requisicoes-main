import { functions } from "./main.js";

const listaVideos = document.querySelector('[data-list-videos]')

async function mostraVideo(){
    try {
        const listVideos = await functions.consomeApi();
        listVideos.forEach(video => 
            listaVideos.appendChild(
                functions.criarCard(video.url, video.imagem, video.titulo, video.descricao)
            )
        )
    } catch {
        listaVideos.innerHTML = `<h2 class = "mensagem__titulo">Não foi possível carregar a lista de videos.</h2>`
    }

}

mostraVideo()