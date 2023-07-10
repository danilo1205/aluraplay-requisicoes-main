async function consomeApi(){
    const response = await fetch('http://localhost:3000/videos');
    const responseJson = await response.json();
    return responseJson;
}
consomeApi();

function criarCard(url, imagem, titulo, descricao){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = 
    `
        <iframe width="100%" height="72%" src="${url}"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="Logo do canal">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `;
    return video;
}

async function consomeApiPost(url, imagem, titulo, descricao){
    const response = await fetch('http://localhost:3000/videos', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({
            url:url,
            imagem:imagem,
            titulo:titulo,
            descricao:`${descricao} mil visualizações`
        })
    })
    if (!response.ok){
        throw new Error ('Erro ao enviar o video! Tente novamente.');
    }
    const responseJson = await response.json();
    return responseJson;
}

async function apiSearch(search){
    const response = await fetch(`http://localhost:3000/videos?q=${search}`);
    const responseJson = await response.json();
    return responseJson;
}

export const functions = {
    consomeApi,
    criarCard,
    consomeApiPost,
    apiSearch
}
