document.getElementById("comparisonForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const material = document.getElementById("material").value;
    const style = document.getElementById("style").value;

    alert(`You selected: Material - ${material}, Style - ${style}.`);
});
 

// JavaScript to toggle the navigation menu visibility
document.getElementById("hamburger").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none"; // Hide menu
    } else {
        navLinks.style.display = "block"; // Show menu
    }
});
