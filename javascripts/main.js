document.addEventListener("DOMContentLoaded", function () {
  // Load navigation bar onto the page
  fetch("../navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar-container").innerHTML = data;
      });
});

document.addEventListener("DOMContentLoaded", function () {
    // Load navigation bar onto the page
    fetch("../../navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container-projectPages").innerHTML = data;
        });
});

document.addEventListener("DOMContentLoaded", function () {
    // Load navigation bar onto the page
    fetch("../navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container-otherPages").innerHTML = data;
        });
});