const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const closeButton = document.querySelector(".sidebar h1");

toggleBtn.addEventListener("click", function() {
    sidebar.classList.toggle("open");
});

closeButton.addEventListener("click", function() {
    sidebar.classList.remove("open");
});
