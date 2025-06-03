window.addEventListener("load", (event) => {
  const hamburger = document.getElementById('hamburger');
  const sideNav = document.getElementById('side-nav');
  const closeSideNav = document.getElementById('close-side-nav');
  const containerDiv = document.getElementsByClassName('container')[0];
  const overlay = document.getElementById('overlay');
  const lightIcon = document.getElementById("light-icon");
  const darkIcon = document.getElementById("dark-icon");
  const workI = document.getElementById("work-i");
  const workII = document.getElementById("work-ii");

  // Load saved theme on page load
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkIcon.style.display = "none";
    lightIcon.style.display = "inline";
  } else {
    document.body.classList.remove("dark-mode");
    darkIcon.style.display = "inline";
    lightIcon.style.display = "none";
  }

  const isDarkMode = document.body.classList.contains("dark-mode");
  console.log(isDarkMode);

  // Toggle icon visibility
  lightIcon.style.display = isDarkMode ? "inline" : "none";
  darkIcon.style.display = isDarkMode ? "none" : "inline";
  document.getElementById("theme-toggle").style.display = 'block';

  if (isDarkMode) {
    document.documentElement.style.setProperty('--work-three-image', './images/work_3_dark.png');
    document.documentElement.style.setProperty('--work-one-image', './images/work_1_dark.png');
  } else {
    document.documentElement.style.setProperty('--work-three-image', './images/work_3.png');
    document.documentElement.style.setProperty('--work-one-image', './images/work_1.png');
  }
  if (workI) {
    workI.src = getComputedStyle(document.documentElement).getPropertyValue("--work-three-image");
    workII.src = getComputedStyle(document.documentElement).getPropertyValue("--work-one-image");
  }


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
    console.log('hehe');
    document.body.classList.toggle("dark-mode");

    // Save preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
      console.log('dark-moded');
      lightIcon.style.display =  "inline";
      darkIcon.style.display = "none";
      localStorage.setItem("theme", "dark");
      document.documentElement.style.setProperty('--work-three-image', './images/work_3_dark.png');
      document.documentElement.style.setProperty('--work-one-image', './images/work_1_dark.png');
    } else {
      console.log('light moded');
      lightIcon.style.display =  "none";
      darkIcon.style.display = "inline";
      localStorage.setItem("theme", "light");
      document.documentElement.style.setProperty('--work-three-image', './images/work_3.png');
      document.documentElement.style.setProperty('--work-one-image', './images/work_1.png');
    }
    if (workI) {
      workI.src = getComputedStyle(document.documentElement).getPropertyValue("--work-three-image");
      workII.src = getComputedStyle(document.documentElement).getPropertyValue("--work-one-image");
    }
  });

})
