document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const campanhas = [document.getElementById('campanha1'), document.getElementById('campanha2'), document.getElementById('campanha3')];
    const dots = document.querySelectorAll('.dot');
    let currentCampanha = 0;

    function showCampanha(index) {
        campanhas.forEach(campanha => campanha.classList.remove('active'));
        campanhas[index].classList.add('active');
        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', function () {
        currentCampanha = (currentCampanha - 1 + campanhas.length) % campanhas.length;
        showCampanha(currentCampanha);
    });

    nextBtn.addEventListener('click', function () {
        currentCampanha = (currentCampanha + 1) % campanhas.length;
        showCampanha(currentCampanha);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            currentCampanha = index;
            showCampanha(currentCampanha);
        });
    });

    showCampanha(currentCampanha);

    const avaliacaoFooter = document.querySelector('#avaliacao footer'); // Seleciona o footer da seção de avaliações
    const prevAvalButton = avaliacaoFooter ? avaliacaoFooter.querySelector('.prev') : null; // Botão "Anterior"
    const nextAvalButton = avaliacaoFooter ? avaliacaoFooter.querySelector('.next') : null; // Botão "Próximo"
    const pageIndicator = avaliacaoFooter ? avaliacaoFooter.querySelector('#page') : null; // Indicador de página

    const AvalPAG1 = document.querySelector('.quadrante-avaliacao'); // Página 1
    const AvalPAG2 = document.querySelector('.quadrante-avaliacao2'); // Página 2
    const AvalPAG3 = document.querySelector('.quadrante-avaliacao3'); // Página 3

    const avaliacoes = [AvalPAG1, AvalPAG2, AvalPAG3]; // Array com todas as páginas de avaliações
    let currentAvalPAG = 0; // Página atual (começa na primeira página)

    // Função para mostrar a página de avaliação ativa
    function showAvaliacao(index) {
        avaliacoes.forEach(avaliacao => avaliacao.classList.remove('active'));
        avaliacoes[index].classList.add('active');

        // Atualiza o indicador de página
        if (pageIndicator) {
            pageIndicator.textContent = index + 1; // Mostra o número da página (1, 2 ou 3)
        }

        // Mostra ou oculta os botões de navegação
        if (prevAvalButton && nextAvalButton) {
            prevAvalButton.classList.toggle('hidden', index === 0); // Oculta o botão "Anterior" na primeira página
            nextAvalButton.classList.toggle('hidden', index === avaliacoes.length - 1); // Oculta o botão "Próximo" na última página
        }
    }

    // Evento para o botão "Anterior"
    if (prevAvalButton) {
        prevAvalButton.addEventListener('click', () => {
            if (currentAvalPAG > 0) {
                currentAvalPAG--;
                showAvaliacao(currentAvalPAG);
            }
        });
    }

    // Evento para o botão "Próximo"
    if (nextAvalButton) {
        nextAvalButton.addEventListener('click', () => {
            if (currentAvalPAG < avaliacoes.length - 1) {
                currentAvalPAG++;
                showAvaliacao(currentAvalPAG);
            }
        });
    }

    // Inicializa o carrossel mostrando a primeira página
    showAvaliacao(currentAvalPAG);
});