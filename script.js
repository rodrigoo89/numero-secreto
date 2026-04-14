// ── Estado del juego ──
let secreto, intentos, usuario, juegoActivo = false;

// ── Iniciar juego ──
function startGame() {
  const input = document.getElementById('name-input');
  const nombre = input.value.trim();
  if (!nombre) {
    input.focus();
    return;
  }

  usuario = nombre;
  secreto = Math.floor(Math.random() * 100) + 1;
  intentos = 8;
  juegoActivo = true;

  // Cambiar pantalla
  document.getElementById('screen-start').classList.remove('active');
  document.getElementById('screen-game').classList.add('active');

  // Actualizar header
  document.getElementById('greeting').textContent = `¡Hola, ${usuario}!`;
  actualizarIntentos();
  renderDots();

  // Hint inicial
  setHint('Ingresá un número entre 1 y 100', '');

  // Foco en el input
  setTimeout(() => document.getElementById('guess-input').focus(), 100);

  // Enter key
  document.getElementById('guess-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') guess();
  });
}

// ── Adivinar ──
function guess() {
  if (!juegoActivo) return;

  const input = document.getElementById('guess-input');
  const valor = parseInt(input.value);

  if (!valor || valor < 1 || valor > 100) {
    setHint('Por favor, ingresá un número entre 1 y 100.', '');
    input.focus();
    return;
  }

  if (valor === secreto) {
    const usados = 9 - intentos;
    setHint(
      `¡Felicidades, ${usuario}! Adivinaste en ${usados} intento${usados === 1 ? '' : 's'}.`,
      'win'
    );
    terminarJuego();
    return;
  }

  intentos--;
  actualizarIntentos();

  if (intentos === 0) {
    renderDots();
    setHint(`Lo siento, ${usuario}. Te quedaste sin intentos. El número era ${secreto}.`, 'lose');
    terminarJuego();
    return;
  }

  renderDots();

  if (valor < secreto) {
    setHint(`${valor} es muy bajo — el número secreto es mayor.`, 'higher');
  } else {
    setHint(`${valor} es muy alto — el número secreto es menor.`, 'lower');
  }

  input.value = '';
  input.focus();
}

// ── Reset ──
function resetGame() {
  juegoActivo = false;
  document.getElementById('screen-game').classList.remove('active');
  document.getElementById('screen-start').classList.add('active');
  document.getElementById('name-input').value = usuario || '';
  document.getElementById('name-input').focus();
}

// ── Helpers ──
function actualizarIntentos() {
  document.getElementById('attempts-count').textContent = intentos;
}

function terminarJuego() {
  juegoActivo = false;
  document.getElementById('btn-guess').disabled = true;
  document.getElementById('guess-input').disabled = true;
  renderDots();
}

function setHint(texto, tipo) {
  const box = document.getElementById('hint-box');
  box.textContent = texto;
  box.className = 'hint-box' + (tipo ? ` ${tipo}` : '');
}

function renderDots() {
  const row = document.getElementById('dots-row');
  row.innerHTML = '';
  const usados = 8 - intentos;

  for (let i = 1; i <= 8; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i <= usados) dot.classList.add('used');
    else if (i === usados + 1 && juegoActivo) dot.classList.add('current');
    dot.textContent = i;
    row.appendChild(dot);
  }
}
