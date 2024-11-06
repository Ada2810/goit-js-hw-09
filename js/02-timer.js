const startButton = document.querySelector('[data-start]');
const daysSpan = document.querySelector('[data-days]');
const hoursSpan = document.querySelector('[data-hours]');
const minutesSpan = document.querySelector('[data-minutes]');
const secondsSpan = document.querySelector('[data-seconds]');

let selectedDate = null;
let countdownInterval = null;

flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    // Verificăm dacă data selectată este în viitor
    if (selectedDate <= new Date()) {
      alert("Please choose a date in the future");
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
});

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  countdownInterval = setInterval(updateCountdown, 1000);
});

function updateCountdown() {
  const now = new Date();
  const timeRemaining = selectedDate - now;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    updateDisplay(0, 0, 0, 0);
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeRemaining);
  updateDisplay(days, hours, minutes, seconds);
}

function convertMs(ms) {
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const second = 1000;
  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);
  
  return { days, hours, minutes, seconds };
}

// Funcția de actualizare a afișajului
function updateDisplay(days, hours, minutes, seconds) {
  daysSpan.textContent = String(days).padStart(2, '0');
  hoursSpan.textContent = String(hours).padStart(2, '0');
  minutesSpan.textContent = String(minutes).padStart(2, '0');
  secondsSpan.textContent = String(seconds).padStart(2, '0');
}
