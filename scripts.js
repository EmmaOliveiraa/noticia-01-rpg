
// Exemplo de funcionalidade de clique para navegação nos links do menu
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`Você clicou no menu: ${this.textContent}`);
    });
});

/*
// Exemplo de interação para os links de notícias relacionadas
document.querySelectorAll('.related a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert(`Abrindo notícia relacionada: ${this.textContent}`);
    });
});
*/

/*
let noticias = document.querySelector('.related a');

            noticias.addEventListener('click',()=>{
                window.location.href='https://www.brasildefato.com.br/2024/03/15/moraes-tira-sigilo-de-depoimentos-sobre-tentativa-de-golpe-acesse-a-integra-de-todos';
            });

let noticias = document.querySelector('.related a');

            noticias.addEventListener('click',()=>{
                window.location.href='https://www.brasildefato.com.br/2024/03/15/clube-militar-vai-realizar-evento-com-tom-comemorativo-aos-60-anos-do-golpe-de-1964-que-levou-a-ditadura';
            });

*/

// Log quando a página é carregada
window.addEventListener('load', () => {
    console.log("Página de notícia carregada com sucesso!");
});
