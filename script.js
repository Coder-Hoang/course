const promoInput = document.getElementById('promo');
const enterButton = document.querySelector('.enter');
const donthaveButton = document.querySelector('.dont-have');

enterButton.addEventListener('click', function() {
  const promoCode = promoInput.value;

  if (promoCode === 'c4UZq23a5zsaP5VrMF4jJdIl8xgeEm') {
    // Redirect to first location
    promoInput.remove();
    enterButton.remove();
    donthaveButton.remove();
    window.location.href = "python/pygame_bgn/index.html";
  } else if (promoCode === 'ioAEAdYPuwhJgFucotaGKfFyU5Vxp9') {
    // Redirect to second location
    promoInput.remove();
    enterButton.remove();
    donthaveButton.remove();
    window.location.href = "python/pygame_inter/index.html";
  } else {
    // Handle invalid promo code (optional)
    alert("Invalid promo code");
  }
});
