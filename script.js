function updateLocalTime() {
  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dubai',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }).format(new Date());
  document.getElementById("local-time").textContent = time;
}

setInterval(updateLocalTime, 1000);
updateLocalTime();