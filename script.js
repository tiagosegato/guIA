// Função para alternar o acordeão (tool-card)
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.tool-card-icon');

    // Fecha todos os outros acordeões (opcional, mas mantém a página limpa)
    document.querySelectorAll('.tool-card-header').forEach(h => {
        if (h !== header && h.classList.contains('active')) {
            h.classList.remove('active');
            h.nextElementSibling.classList.remove('open');
            h.querySelector('.tool-card-icon').style.transform = 'rotate(0deg)';
        }
    });

    // Abre/Fecha o acordeão clicado
    header.classList.toggle('active');
    content.classList.toggle('open');
    icon.style.transform = header.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
}

// Anexa event listeners para todos os cabeçalhos de acordeão
document.querySelectorAll('.tool-card-header').forEach(header => {
    header.addEventListener('click', function () {
        toggleAccordion(this);
    });
});

// Função para rolagem suave dos cards de navegação
document.querySelectorAll('.nav-cards-grid .nav-card').forEach(card => {
    card.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Ajuste para o navbar fixo (70px)
            const offset = 70;
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Adiciona o script para o botão "Voltar ao Topo" (Back to Top)
// Nota: O script original do index.html já tem um botão de scroll-to-top,
// mas o CSS e a lógica do guia.html são diferentes. Vamos usar a lógica
// do guia.html e o CSS que foi movido para styles.css.

// Criação do botão (se já não existir um com a mesma lógica)
if (!document.querySelector('.back-to-top')) {
    const backToTopButton = document.createElement('button');
    backToTopButton.className = 'back-to-top';
    backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(backToTopButton);

    window.onscroll = function () {
        // Usa document.documentElement.scrollTop para maior compatibilidade
        if (document.documentElement.scrollTop > 200) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };
}
