// ==========================================
// BELLY-STARS 💖
// Sistema de navegação e surpresas
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  // ------------------------------------------
  // TROCA DE TELAS
  // ------------------------------------------

  const screens = document.querySelectorAll(".screen");

  function showScreen(id) {
    screens.forEach(screen => {
      screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
      target.classList.add("active");
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }

  // Deixa a função disponível para os botões do HTML
  window.showScreen = showScreen;


  // ------------------------------------------
  // BOTÕES COM DATA-SCREEN
  // ------------------------------------------

  document.querySelectorAll("[data-screen]").forEach(button => {
    button.addEventListener("click", () => {
      const target = button.dataset.screen;

      if (target) {
        showScreen(target);
      }
    });
  });


  // ------------------------------------------
  // PEGADINHA DO "NÃO CLIQUE" 😂
  // ------------------------------------------

  const noButton = document.querySelector("#noButton");

  if (noButton) {

    noButton.addEventListener("click", () => {

      noButton.innerHTML = "EU AVISEI 😂";

      setTimeout(() => {
        noButton.innerHTML = "NÃO CLIQUE";
      }, 1500);

    });

  }


  // ------------------------------------------
  // BOTÃO SURPRESA
  // ------------------------------------------

  const surpriseButton =
    document.querySelector("#surpriseButton");

  if (surpriseButton) {

    surpriseButton.addEventListener("click", () => {

      const surprise =
        document.querySelector("#surpriseMessage");

      if (surprise) {

        surprise.style.display = "block";

        surprise.classList.add("surprise");

      }

    });

  }


  // ------------------------------------------
  // CORAÇÕES FLUTUANTES
  // ------------------------------------------

  function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML =
      Math.random() > 0.5 ? "💗" : "💖";

    heart.style.position = "fixed";
    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
      (15 + Math.random() * 20) + "px";

    heart.style.opacity =
      0.4 + Math.random() * 0.5;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transition =
      "transform 5s linear, opacity 5s linear";

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.style.transform =
        `translateY(-${window.innerHeight + 100}px)`;

      heart.style.opacity = "0";

    }, 100);

    setTimeout(() => {

      heart.remove();

    }, 5500);

  }


  // Cria corações de tempos em tempos
  setInterval(createHeart, 1800);


  // ------------------------------------------
  // MENSAGEM PERSONALIZADA
  // ------------------------------------------

  const messageButton =
    document.querySelector("#messageButton");

  if (messageButton) {

    messageButton.addEventListener("click", () => {

      const message =
        document.querySelector("#hiddenMessage");

      if (message) {

        message.style.display = "block";

        message.classList.add("fade-in");

      }

    });

  }


  // ------------------------------------------
  // DATA ATUAL
  // ------------------------------------------

  const dateElement =
    document.querySelector("#currentDate");

  if (dateElement) {

    const today = new Date();

    dateElement.textContent =
      today.toLocaleDateString("pt-BR");

  }


  // ------------------------------------------
  // MÚSICA
  // ------------------------------------------

  const musicButton =
    document.querySelector("#musicButton");

  const music =
    document.querySelector("#backgroundMusic");

  if (musicButton && music) {

    musicButton.addEventListener("click", () => {

      if (music.paused) {

        music.play();

        musicButton.innerHTML =
          "⏸️ Pausar música";

      } else {

        music.pause();

        musicButton.innerHTML =
          "🎵 Tocar música";

      }

    });

  }


  // ------------------------------------------
  // ANIMAÇÃO INICIAL
  // ------------------------------------------

  document.body.classList.add("fade-in");

});
