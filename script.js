// Add JavaScript animations or interactions if needed
document.addEventListener("DOMContentLoaded", function() {
  // Create a popup element
  var popup = document.createElement("div");
  popup.classList.add("popup");

  // Create a close button
  var closeButton = document.createElement("span");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", function() {
    popup.style.display = "none";
  });

  // Create content for the popup
  var popupContent = document.createElement("div");
  popupContent.classList.add("popup-content");
  
  // Apply gradient background
  popupContent.style.background = "linear-gradient(to right, #00ff00, #0000ff)";
  
  // Add text and paragraph
  popupContent.innerHTML = "<h2>Looking for ZonikyoMC?</h2><p>ZonikyoMC is located at <a href='https://smp.zonikyo.com' target='_blank'>smp.zonikyo.com</a>, this website is the Main Zonikyo Website NOT the Minecraft Server</p>";

  // Append close button and content to the popup
  popup.appendChild(closeButton);
  popup.appendChild(popupContent);

  // Append the popup to the body
  document.body.appendChild(popup);
});
