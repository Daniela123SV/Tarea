window.addEventListener('load', () => {
    // Animación para las tarjetas de autos (igual que antes)
    const cars = document.querySelectorAll('.car');
    cars.forEach(car => {
        car.style.opacity = 0;
        car.style.transform = 'translateY(20px)';
    });

    let delay = 0;
    cars.forEach(car => {
        setTimeout(() => {
            car.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            car.style.opacity = 1;
            car.style.transform = 'translateY(0)';
        }, delay);
        delay += 200;
    });

    // Animación para la sección de contacto
    const contactSection = document.querySelector('.contact-section');
    contactSection.style.opacity = 0;
    contactSection.style.transform = 'translateY(20px)';

    setTimeout(() => {
        contactSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        contactSection.style.opacity = 1;
        contactSection.style.transform = 'translateY(0)';
    }, 500); // Retraso de 500ms para que aparezca después de los autos

    // Animación para el botón de contacto
    const contactBtn = document.querySelector('.contact-btn');
    contactBtn.addEventListener('mouseover', () => {
        contactBtn.style.backgroundColor = '#218838'; // Color verde más oscuro al pasar el mouse
    });
    contactBtn.addEventListener('mouseout', () => {
        contactBtn.style.backgroundColor = '#28a745'; // Color verde original
    });
});
