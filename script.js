// Smooth scroll for navigation links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Skill progress bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    const skill = bar.getAttribute('data-skill');
    bar.style.setProperty('--skill-width', skill);
});
