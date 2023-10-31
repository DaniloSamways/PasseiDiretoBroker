let removedModal = false;
let removedAds = false;

function removeBlur() {
  if (!removedModal) {
    const premiumModal = document.querySelector('.v--modal-overlay.scrollable');
    if (premiumModal) {
      premiumModal.remove();
      removedModal = true;
    }
  }
  
  if (!removedAds) {
    const ads = document.querySelector('.mv-content-limitation-fake-page.short-preview-version');
    if (ads) {
      ads.remove();
      removedAds = true;
    }
  }

  const elements = document.querySelectorAll('[style*="filter: blur"]');
  elements.forEach(element => {
    const style = element.getAttribute('style');
    element.setAttribute('style', style.replace(/filter: blur\(\d+px\)/, 'filter: blur(0px)'));
  });
}

window.addEventListener('scroll', removeBlur);
setInterval(removeBlur, 100);
