const updateUTCTime = () => {
  const utcTime = new Date().toUTCString();
  document.getElementById("utc-time").textContent = utcTime;
};

updateUTCTime();
setInterval(updateUTCTime, 1000); // Update every second
