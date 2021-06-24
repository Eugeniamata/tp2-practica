// Chequeo si el browser puede usar Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../service-worker.js')
      .then(reg => {
        console.log("Service worker esta listo!");
      });
}
else {
  console.log("Service worker no soportado.");
}

// Event Listener para Offline/ Online Status
window.addEventListener('offline', event => {
  document.querySelector('body').classList.add('offline');
  main.innerHTML = "No obtener los partidos! La aplicacion esta offline!"
});

window.addEventListener('online', event => {
  document.querySelector('body').classList.remove('offline');
  openSoccerApi();
});
