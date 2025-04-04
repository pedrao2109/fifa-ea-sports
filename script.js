document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector(".marquee");
    const marqueeContent = document.querySelector(".marquee-content");

    // Duplicar o conteúdo do marquee para criar um efeito contínuo
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    // Configurar a animação
    let currentPos = 0;
    const speed = 1; // Ajuste a velocidade conforme necessário

    function animateMarquee() {
        currentPos -= speed;
        if (currentPos <= -marqueeContent.scrollWidth) {
            currentPos = 0;
        }
        marqueeContent.style.transform = `translateX(${currentPos}px)`;
        clone.style.transform = `translateX(${currentPos + marqueeContent.scrollWidth}px)`;
        requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
});