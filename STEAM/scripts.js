function toggleDropdown() {
  document.getElementById("dropdownContent1").classList.toggle("show");
}

// Optional: Close dropdown if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    const dropdowns = document.getElementsByClassName("dropdown-content1");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}