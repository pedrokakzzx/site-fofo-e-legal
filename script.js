// Aguarda o clique do usuário para tocar a música
document.getElementById("playButton").addEventListener("click", () => {
    const music = document.getElementById("music");
    music.play().catch((error) => {
        console.log("Erro ao tentar tocar a música:", error);
    });
});
