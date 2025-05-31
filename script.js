

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll("a[href='#top']").forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navLinks a.navlink');
    const currentPath = window.location.pathname.split('/').pop().toLowerCase();
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop().toLowerCase();
        
        // More comprehensive comparison
        if (linkPath === currentPath || 
            (currentPath === '' && linkPath === 'home.html') ||
            (currentPath === 'index.html' && linkPath === 'home.html')) {
            link.classList.add('active');
            console.log('Activated:', linkPath); // Debug logging
        }
    });
});

const modelViewer = document.querySelecter('#model');
function updateCameraDistance() {
    const minDistance = 1.5;
    const maxDistance = 4;
    const scale = Math.min(window.innerWidth/1024,1);
    const distance = minDistance + (maxDistance - minDistance) * scale;
    const orbit = modelViewer.getCameraOrbit();
    modelViewer.cameraOrbit = `${orbit.theta}deg ${orbit.phi}deg ${distance}m`;
}



