window.addEventListener("load", (event) => {
  
  const hamburger = document.getElementById('hamburger');
  const sideNav = document.getElementById('side-nav');
  const closeSideNav = document.getElementById('close-side-nav');
  const containerDiv = document.getElementsByClassName('container')[0];
  const overlay = document.getElementById('overlay');

  hamburger.addEventListener('click', (event) => {
    console.log('hamburger cliced');
    sideNav.style.display = 'flex';
    overlay.style.display = 'block';
  });

  closeSideNav.addEventListener('click', (event) => {
    console.log('close clicked');
    sideNav.style.display = 'none';
    overlay.style.display = 'none';
  });
})
