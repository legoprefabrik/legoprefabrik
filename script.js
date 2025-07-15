// script.js

document.addEventListener('DOMContentLoaded', () => {
  // Tümünü İncele butonları ürünler sayfasına yönlendirsin
  document.querySelectorAll('.btn-view-all').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.href = 'urunler.html';
    });
  });

  // Menü linkleri için örnek: "Ürünlerimiz" sayfası açılır
  const menuLinks = document.querySelectorAll('nav.main-menu ul li a');
  menuLinks.forEach(link => {
    if(link.textContent.trim().toLowerCase() === 'ürünlerimiz') {
      link.href = 'urunler.html';
    }
    if(link.textContent.trim().toLowerCase() === 'blog') {
      link.href = 'blog.html';
    }
  });

  // Modal açma - blog yazılarındaki "Devamını Oku"
  const modalOverlay = document.getElementById('modal-overlay');
  const modalContent = document.getElementById('modal-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  document.querySelectorAll('.blog-card .read-more').forEach(link => {
    link.addEventListener('click', () => {
      const fullText = link.getAttribute('data-fulltext');
      modalContent.textContent = fullText;
      modalOverlay.style.display = 'flex';
      
    });
  });

  // Modal kapatma
  modalCloseBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });

  // Modal dışına tıklayınca da kapat
  modalOverlay.addEventListener('click', (e) => {
    if(e.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });
});