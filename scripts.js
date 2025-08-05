// Contador regresivo
const countdownEl = document.getElementById("countdown");
const targetDate = new Date("2025-09-20T00:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.innerHTML = "¡Es hoy!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Función para cerrar el popup
function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
    // Mostrar la ventana de regalo después de cerrar el popup
    var regalo = document.querySelector('.regalo-window');
    if (regalo) regalo.style.display = 'block';
}

// Mostrar popup al cargar la página
window.onload = function() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  document.getElementById('popup').style.display = 'flex';
  // Ocultar la ventana de regalo al inicio
  var regalo = document.querySelector('.regalo-window');
  if (regalo) regalo.style.display = 'none';
}

