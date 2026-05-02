// MOSTRA MENSAGEM
function mostrarMensagem() {

  const mensagem =
    document.getElementById("mensagem");

  const container =
    document.getElementById("container");

  const blur =
    document.getElementById("blurOverlay");

  // mostra mensagem
  mensagem.innerHTML =
    "Espero que goste ❤️";

  // espera 5 segundos
  setTimeout(() => {

    // limpa mensagem
    mensagem.innerHTML = "";

    // remove blur
    blur.style.backdropFilter = "blur(0px)";
    blur.style.background = "rgba(255,255,255,0)";

    // esconde caixa
    container.style.display = "none";

  }, 5000);
}

// CORAÇÕES
function criarEmoji() {

  const emoji =
    document.createElement("div");

  emoji.classList.add("emoji");

  // emojis possíveis
  const emojis = ["❤️", "🎂"];

  // escolhe aleatoriamente
  emoji.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

  // posição aleatória
  emoji.style.left =
    Math.random() * 100 + "vw";

  // tamanho aleatório
  emoji.style.fontSize =
    (Math.random() * 20 + 20) + "px";

  // duração aleatória
  emoji.style.animationDuration =
    (Math.random() * 2 + 3) + "s";

  document.body.appendChild(emoji);

  // remove depois
  setTimeout(() => {
    emoji.remove();
  }, 5000);
}

setInterval(criarEmoji, 400);

setInterval(criarEmoji, 400);