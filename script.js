const map = L.map('map').setView([20, 0], 2); // Initial world view

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

const locations = {
  "Abu Dhabi": [24.4667, 54.3667],
  "New York": [40.7128, -74.0060],
  "London": [51.5074, -0.1278],
  "Tokyo": [35.6895, 139.6917]
};

document.getElementById('country-select').addEventListener('change', function() {
  const selected = this.value;
  if (locations[selected]) {
    map.setView(locations[selected], 6); // Zoom to selected location
  }
});

function updateClock(id, timeZone) {
  const now = new Date();
  const options = {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  const timeString = now.toLocaleTimeString('en-US', options);
  document.querySelector(`#${id} .time`).textContent = timeString;
}

function updateAllClocks() {
  updateClock('abu-dhabi', 'Asia/Dubai');
  updateClock('new-york', 'America/New_York');
  updateClock('london', 'Europe/London');
  updateClock('tokyo', 'Asia/Tokyo');
}

setInterval(updateAllClocks, 1000);
updateAllClocks();