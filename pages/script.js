let depoimentos = [
  {
    nome: "Pedro Santos",
    cargo: "Estudante, 21 anos",
    texto: "Uso o split-screen para estudar e anotar. Mudou minha rotina, super super uau 👌!",
    foto: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    nome: "Luiza Fernandes",
    cargo: "Fotógrafa, 34 anos",
    texto: "Tela incrível e 5G ultrarrápido. Perfeito para editar fotos!",
    foto: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    nome: "Clara Martins",
    cargo: "Professora, 27 anos",
    texto: "Leve, rápido e fácil de usar. Meus alunos amaram!🧡",
    foto: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

// Função para renderizar depoimentos
function renderizarDepoimentos() {
  const container = document.getElementById("container-depoimentos");

  depoimentos.forEach((depoimento) => {
    const divDepoimento = document.createElement("div");
    divDepoimento.className = "depoimento rounded";

    divDepoimento.innerHTML = `
        <img src="${depoimento.foto}" alt="${depoimento.nome}"class="foto-perfil ">
        <div class="texto-container">
            <div class="nome-container">
                <h4 class="nome-depoimento">${depoimento.nome}</h4>
                <p class="text-muted cargo-depoimento">${depoimento.cargo}</p>
            </div>   
            <blockquote class="texto-depoimento">
            "${depoimento.texto}"
            </blockquote>
        </div>
      `;

    container.appendChild(divDepoimento);
  });
}

// Chama a função quando a página carregar
document.addEventListener("DOMContentLoaded", renderizarDepoimentos);


//TypeWriter effect. efeito de digitação

document.addEventListener("DOMContentLoaded", function() {
  const section = document.querySelector(".section2");
  typeWriterCursor(
    document.querySelector(".typewriter"), //elemento
    "Tela ultra fina e leve, perfeita para produtividade em movimento.", //texto
    50 //velocidade
  );

  function typeWriterCursor(elemento, texto, velocidade) {
    let i = 0;
    elemento.innerHTML = "";
    animationStarted = false;
    function digitar() {
      if (i < texto.length) {
        elemento.innerHTML =
          texto.substring(0, i + 1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(digitar, velocidade);
      } else {
        elemento.innerHTML = texto + '<span class="cursor">|</span>';
      }
    }
    
  const observar = new IntersectionObserver(
    (entries) => {
      entries.forEach((entrada) => {
        if (entrada.isIntersecting && !animationStarted) {
          digitar(); // Inicia a animação quando a seção está visível
          animationStarted = true;

          if (!entrada.isIntersecting) {
            texto.innerHTML = ""; // Limpa o texto
            i = 0; // Reinicia o contador
            animationStarted = false;
          }
        }
      });
    },
    { threshold: 0.5 }
  ); // Quando 50% da seção estiver visível

  observar.observe(section);
  }
  
});

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  ); // Dispara quando 10% do elemento está visível

  elementos.forEach((el) => observer.observe(el));
});




