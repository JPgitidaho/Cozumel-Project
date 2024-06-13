// Function to toggle the visibility of the menu
function toggleMenu() {
  // Get the menu container and the burger icon
  const menuContainer = document.getElementById("nav");
  const burgerMenu = document.getElementById("burger-icon");

  // Toggle the 'show' class to display or hide the menu
  menuContainer.classList.toggle("show");
  // Toggle the 'active' class to change the appearance of the burger icon
  burgerMenu.classList.toggle("active");
}




