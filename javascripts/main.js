document.addEventListener("DOMContentLoaded", function () {
  // Load navigation bar onto the page
  fetch("/pages/partials/navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar-container").innerHTML = data;
      });
});

//back button
function goBack() {
    history.back();
}