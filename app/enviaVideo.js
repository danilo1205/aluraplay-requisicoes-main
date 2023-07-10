import { functions } from "./main.js";

const formulario = document.querySelector('[data-form]');

async function criarVideo(event){
    try{
        event.preventDefault();
        const url = document.querySelector('[data-input-url]').value;
        const titulo = document.querySelector('[data-input-title]').value;
        const imagem = document.querySelector('[data-input-image]').value;
        const descricao = Math.round(Math.random(0, 1) * 1000);
        await functions.consomeApiPost(url, imagem, titulo, descricao);
        window.location.href="/pages/envio-concluido.html";
    } catch (e){
        alert(e);
    }

}


formulario.addEventListener("submit", event => criarVideo(event))
