var removedModal = false;
var removedAds = false;

function removerBlur() {
  if (removedModal === false) {
    const premiumModal = document.getElementsByClassName('v--modal-overlay scrollable');
    if (premiumModal.length > 0) {
      premiumModal[0].remove();
      removedModal = true;
    }
  }
  if (removedAds === false) {
    const ads = document.getElementsByClassName('mv-content-limitation-fake-page short-preview-version');
    if (ads.length > 0) {
      ads[0].remove();
      removedAds = true;
    }

  }
  const elementos = document.querySelectorAll('[style*="filter: blur(10px)"]');
  const elementos5 = document.querySelectorAll('[style*="filter: blur(5px)"]');
  for (let i = 0; i < elementos.length; i++) {
    let estilo = elementos[i].getAttribute('style');
    estilo = estilo.replace('filter: blur(10px)', 'filter: blur(0px)');
    elementos[i].setAttribute('style', estilo);
  }

  for (let i = 0; i < elementos5.length; i++) {
    let estilo = elementos5[i].getAttribute('style');
    estilo = estilo.replace('filter: blur(5px)', 'filter: blur(0px)');
    elementos5[i].setAttribute('style', estilo);
  }
}
window.addEventListener('scroll', removerBlur);

setInterval(removerBlur, 100)