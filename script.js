const productToggle = document.getElementById('productToggle');
const productMenu = document.getElementById('productMenu');

productToggle.addEventListener('click', () => {
  const isOpen = productMenu.style.display === 'flex';
  productMenu.style.display = isOpen ? 'none' : 'flex';
  productToggle.querySelector('.nav-chevron').textContent = isOpen ? '▾' : '▴';
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1120) {
    productMenu.style.display = 'flex';
    productToggle.querySelector('.nav-chevron').textContent = '▾';
  }
});
