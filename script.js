document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const campanha1 = document.getElementById('campanha1');
    const campanha2 = document.getElementById('campanha2');
    const campanha3 = document.getElementById('campanha3'); 
    const dots = document.querySelectorAll('.dot'); 

    let currentCampanha = 1;

    function showCampanha(campanhaNumber) {
        campanha1.classList.remove('active');
        campanha2.classList.remove('active');
        campanha3.classList.remove('active');

        if (campanhaNumber === 1) {
            campanha1.classList.add('active');
        } else if (campanhaNumber === 2) {
            campanha2.classList.add('active');
        } else if (campanhaNumber === 3) {
            campanha3.classList.add('active');
        }

        updateDots(campanhaNumber);
    }

    function updateDots(campanhaNumber) {
        dots.forEach((dot, index) => {
            dot.classList.remove('active'); 
            if (index === campanhaNumber - 1) {
                dot.classList.add('active'); 
            }
        });
    }

    prevBtn.addEventListener('click', function() {
        if (currentCampanha === 1) {
            currentCampanha = 3; 
        } else {
            currentCampanha--; 
        }
        showCampanha(currentCampanha);
    });

    nextBtn.addEventListener('click', function() {
        if (currentCampanha === 3) {
            currentCampanha = 1; 
        } else {
            currentCampanha++; 
        }
        showCampanha(currentCampanha);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentCampanha = index + 1; // Define a campanha atual com base no índice da bolinha
            showCampanha(currentCampanha); // Exibe a campanha correspondente
        });
    });

    // Inicializa o carrossel com a primeira campanha visível
    showCampanha(currentCampanha);
});
