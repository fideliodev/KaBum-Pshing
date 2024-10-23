document.addEventListener("DOMContentLoaded", function() {
    const openModalBtns = document.querySelectorAll('.open-modal-btn'); // Seleciona todos os botões com a classe 'open-modal-btn'
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Adiciona o evento de clique para abrir o modal a cada botão
    openModalBtns.forEach(button => {
        button.addEventListener('click', function() {
            modal.style.display = 'flex'; // Exibe o modal
        });
    });

    // Evento de clique para fechar o modal
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Fecha o modal
    });

    // Fechar o modal ao clicar fora do conteúdo do modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Fecha o modal se clicar fora dele
        }
    });
});

      // Tempo total inicial em milissegundos
      const initialTime = (5 * 24 * 60 * 60 * 1000) + (4 * 60 * 60 * 1000) + (20 * 60 * 1000);
      let totalTime;

      // Verifica se o tempo restante foi salvo no localStorage
      if (localStorage.getItem('remainingTime')) {
          totalTime = parseInt(localStorage.getItem('remainingTime'));
      } else {
          totalTime = initialTime;
      }

      // Atualiza o timer a cada segundo
      const interval = setInterval(() => {
          // Converte o tempo total em dias, horas, minutos e segundos
          const days = Math.floor(totalTime / (24 * 60 * 60 * 1000));
          const hours = Math.floor((totalTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
          const minutes = Math.floor((totalTime % (60 * 60 * 1000)) / (60 * 1000));
          const seconds = Math.floor((totalTime % (60 * 1000)) / 1000);

          // Exibe o tempo restante
          const timerElements = document.querySelectorAll('.timer');
          timerElements.forEach(element => {
              element.innerText = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
          });

          // Diminui o tempo total
          totalTime -= 1000;

          // Salva o tempo restante no localStorage
          localStorage.setItem('remainingTime', totalTime);

          // Para o timer quando chegar a 0
          if (totalTime < 0) {
              clearInterval(interval);
              localStorage.removeItem('remainingTime'); // Remove o tempo do localStorage
              timerElements.forEach(element => {
                  element.innerText = "Tempo esgotado!";
              });
          }
      }, 1000);
      function mostrarJanela() {
        const janela = document.querySelector(".janela");
        janela.style.display = "block";
    }

    // Função para fechar a janela
    function closeJanela() {
        const janela = document.querySelector(".janela");
        janela.style.display = "none";
    }

    // Ao carregar a página
    window.onload = function() {
        // Exibe a janela
        mostrarJanela();

        // Obtém elementos da janela
        const closeButtons = document.querySelector(".close");
        const fecharButton = document.querySelector(".open-modal-btn");

        // Quando o usuário clica no <span> (x) ou no botão "Comprar", fecha a janela
        closeButtons.onclick = closeJanela;
        fecharButton.onclick = closeJanela;

        // Quando o usuário clica em qualquer lugar fora da janela, fecha a janela
        window.onclick = function(event) {
            const janela = document.querySelector(".janela");
            if (event.target === janela) {
                closeJanela();
            }
        };
    }
