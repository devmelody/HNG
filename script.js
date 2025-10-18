
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// update time in milliseconds
function updateTime() {
  timeElement.textContent = Date.now();
}


updateTime();

// Update time every second
setInterval(updateTime, 1000);
