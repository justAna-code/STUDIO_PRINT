document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('quickView');
  const toast = bootstrap.Toast.getOrCreateInstance('#cartToast');
  const counter = document.querySelector('[data-cart-count]');

  modal.addEventListener('show.bs.modal', (event) => {
    const { title, price, img, desc } = event.relatedTarget.dataset;
    const photo = modal.querySelector('img');

    modal.querySelector('.modal-title').textContent = title;
    modal.querySelector('[data-modal-title]').textContent = title;
    modal.querySelector('[data-price]').textContent = price;
    modal.querySelector('[data-modal-desc]').textContent = desc;
    
    photo.src = img;
    photo.alt = title;
  modal.addEventListener('hide.bs.modal', () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('[data-add-to-cart]')) return;
    counter.textContent = Number(counter.textContent) + 1;
    toast.show();
  });

  const priceRange = document.getElementById('priceRange');
  const priceOut = document.getElementById('priceOut');

  if (priceRange && priceOut) {
    priceRange.addEventListener('input', (e) => {
      priceOut.textContent = e.target.value + ' ₽';
    });
  }
});