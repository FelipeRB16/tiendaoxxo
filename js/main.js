const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    toggle.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    toggle.textContent = '☰';
  }));
}


// Galería de videos: al elegir una miniatura cambia el video principal.
const videoPlayer = document.getElementById('oxxoVideoPlayer');
const videoTitle = document.getElementById('oxxoVideoTitle');
const videoDescription = document.getElementById('oxxoVideoDescription');
const videoDirectLink = document.getElementById('oxxoVideoDirectLink');
const videoThumbs = document.querySelectorAll('.video-thumb');

if (videoPlayer && videoThumbs.length) {
  videoThumbs.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const videoId = thumb.dataset.video;
      const title = thumb.dataset.title;
      const description = thumb.dataset.description;

      videoPlayer.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`;
      videoPlayer.title = title;
      videoTitle.textContent = title;
      videoDescription.textContent = description;
      videoDirectLink.href = `https://www.youtube.com/watch?v=${videoId}`;

      videoThumbs.forEach((item) => {
        item.classList.remove('is-active');
        item.setAttribute('aria-pressed', 'false');
      });
      thumb.classList.add('is-active');
      thumb.setAttribute('aria-pressed', 'true');
    });
  });
}
