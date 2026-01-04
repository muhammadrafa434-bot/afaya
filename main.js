// Reveal Animation on Scroll
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // Initial call

// Heart Particle Generator
function createHeart() {
    const container = document.getElementById('heart-container');
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    
    const startPositionX = Math.random() * window.innerWidth;
    const duration = Math.random() * 3 + 3; // 3-6s
    const size = Math.random() * 1 + 0.5; // 0.5-1.5rem
    
    heart.style.left = startPositionX + 'px';
    heart.style.animationDuration = duration + 's';
    heart.style.fontSize = size + 'rem';
    
    container.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createHeart, 300);
