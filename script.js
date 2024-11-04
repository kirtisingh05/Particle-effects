// script.js

document.querySelectorAll('.logo').forEach(logo => {
    // Generate particles for each logo
    createParticles(logo);

    // Scatter effect on mouseenter
    logo.addEventListener('mouseenter', () => {
        scatterParticles(logo);
    });

    // Reset particles on mouseleave
    logo.addEventListener('mouseleave', () => {
        resetParticles(logo);
    });
});

function createParticles(logo) {
    for (let i = 0; i < 50; i++) { // Adjust the particle count here
        const particle = document.createElement('div');
        particle.classList.add('particle');
        logo.appendChild(particle);

        // Set each particle to a random position within the logo area
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
    }
}

function scatterParticles(logo) {
    logo.style.opacity = 0; // Hide the main logo text

    // Scatter each particle randomly
    logo.querySelectorAll('.particle').forEach(particle => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 80 + 30; // Adjust the scatter distance

        particle.style.opacity = 1;
        particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
}

function resetParticles(logo) {
    logo.style.opacity = 1; // Show the main logo text

    // Move each particle back to its original position
    logo.querySelectorAll('.particle').forEach(particle => {
        particle.style.opacity = 0;
        particle.style.transform = 'translate(0, 0)';
    });
}
