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
