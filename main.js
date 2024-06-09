document.addEventListener('DOMContentLoaded', function() {
  const switchLangButton = document.getElementById('switch-lang');
  if (switchLangButton) {
    switchLangButton.addEventListener('click', function() {
      let content;
      if (document.getElementById('about-content')) {
        content = document.getElementById('about-content');
        if (switchLangButton.innerText === 'Switch to Spanish') {
          content.innerHTML = '<p>Ofrecemos una amplia variedad de tours y paquetes de viaje para todos los presupuestos.</p><p>Nuestra misión es proporcionar experiencias de viaje inolvidables.</p>';
          switchLangButton.innerText = 'Switch to English';
        } else {
          content.innerHTML = '<p>We offer a wide variety of tours and travel packages to suit every budget.</p><p>Our mission is to provide unforgettable travel experiences.</p>';
          switchLangButton.innerText = 'Switch to Spanish';
        }
      } else if (document.getElementById('tours-content')) {
        content = document.getElementById('tours-content');
        if (switchLangButton.innerText === 'Switch to Spanish') {
          content.innerHTML = '<p>Explore nuestros principales destinos turísticos.</p>';
          switchLangButton.innerText = 'Switch to English';
        } else {
          content.innerHTML = '<p>Explore our top travel destinations.</p>';
          switchLangButton.innerText = 'Switch to Spanish';
        }
      } else if (document.getElementById('contact-content')) {
        content = document.getElementById('contact-content');
        if (switchLangButton.innerText === 'Switch to Spanish') {
          content.innerHTML = '<p>¡Nos encantaría saber de ti!</p>';
          switchLangButton.innerText = 'Switch to English';
        } else {
          content.innerHTML = '<p>We would love to hear from you!</p>';
          switchLangButton.innerText = 'Switch to Spanish';
        }
      }
    });
  }
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('mouseover', function() {
    card.classList.add('shadow-lg');
  });
  card.addEventListener('mouseleave', function() {
    card.classList.remove('shadow-lg');
  });
});

let audio;
document.getElementById('play-sound-btn').addEventListener('click', function() {
if(!audio) {
  const audio = new Audio('mp3/city.mp3');
  audio.play();
} else {
audio.pause();
audio = null;
}
});
