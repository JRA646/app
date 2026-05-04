const targetDate = new Date('2026-12-12T14:00:00').getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = targetDate - now;

  if (diff <= 0) {
    ['days', 'hours', 'minutes', 'seconds'].forEach((id) => {
      document.getElementById(id).textContent = '0';
    });
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days);
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelector('form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! Your RSVP has been noted.');
  e.target.reset();
});
