document.addEventListener('DOMContentLoaded', function() {
  fetch('/getDateTime')
    .then(response => response.text())
    .then(dateTime => {
      document.getElementById("server-timestamp").innerHTML = dateTime.toLocaleString();
      document.getElementById("browser-timestamp").innerHTML = new Date().toLocaleString();
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
