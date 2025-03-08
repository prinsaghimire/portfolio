window.addEventListener("load", (event) => {
  const hamburger = document.getElementById('hamburger');
  const sideNav = document.getElementById('side-nav');
  const closeSideNav = document.getElementById('close-side-nav');
  const containerDiv = document.getElementsByClassName('container')[0];
  const overlay = document.getElementById('overlay');
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");

  const isDarkMode = document.body.classList.contains("dark-mode");
  // Toggle icon visibility
  lightIcon.style.display = isDarkMode ? "inline" : "none";
  darkIcon.style.display = isDarkMode ? "none" : "inline";





  hamburger.addEventListener('click', (event) => {
    sideNav.style.display = 'flex';
    overlay.style.display = 'block';
  });

  closeSideNav.addEventListener('click', (event) => {
    sideNav.style.display = 'none';
    overlay.style.display = 'none';
  });

  const yearSpan = document.getElementById("year");
  yearSpan.innerHTML = new Date().getFullYear();

  const homeBtn = document.getElementsByClassName('nav-home')[0];
  homeBtn.addEventListener('click', (event) => {
    window.scrollTo(0, 0);
  })

  const toggleButton = document.getElementById("theme-toggle");
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      lightIcon.style.display =  "inline";
      darkIcon.style.display = "none";
    } else {
      lightIcon.style.display =  "none";
      darkIcon.style.display = "inline";
      localStorage.setItem("theme", "light");
    }
  });

  // Load saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    lightIcon.style.display = isDarkMode ? "none" : "inline";
    darkIcon.style.display = isDarkMode ? "inline" : "none";
  }
})
