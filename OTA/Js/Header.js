
fetch('Navber.html')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(data => {
          document.getElementById('Navber').innerHTML = data;
  
          // Add event listeners for the mobile menu toggle and dropdown functionality after loading Navber
          const menuToggle = document.getElementById('menu-toggle');
          const mobileMenu = document.getElementById('mobile-menu');
          const closeMenu = document.getElementById('close-menu');
          const togglePages = document.getElementById('toggle-pages');
          const pagesDropdown = document.getElementById('pages-dropdown');

          if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
            });
          }

          if (closeMenu && mobileMenu) {
            closeMenu.addEventListener('click', () => {
              mobileMenu.classList.add('hidden');
            });
          }

          if (togglePages && pagesDropdown) {
            togglePages.addEventListener('click', () => {
              pagesDropdown.classList.toggle('hidden');
            });
          }
        })
        .catch(err => console.error('Error loading Navber:', err));
    
