document.addEventListener('DOMContentLoaded', () => {
  // Load Navbar first
  fetch('navbar.html')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Navbar failed to load');
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById('navbar').innerHTML = data;

      // After Navbar is loaded, load the sections
      loadSectionsContent();
      loadSection('home-section'); // Default section on load
    })
    .catch((error) => console.error('Error loading navbar:', error));
});

function loadSectionsContent() {
  const sections = {
    'home-section': 'home-section.html',
    'working-scholars-section': 'working-scholars-section.html',
    'tasks-section': 'tasks-section.html',
    'student-dtr-section': 'student-dtr-section.html',
    'profile-section': 'profile-section.html',
  };

  for (const [id, file] of Object.entries(sections)) {
    fetch(file)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`${file} failed to load`);
        }
        return response.text();
      })
      .then((data) => {
        document.getElementById(id).innerHTML = data;
      })
      .catch((error) => console.error(error));
  }
}

// Function to dynamically load sections
function loadSection(sectionId) {
  console.log('Loading section:', sectionId);  // Debug log
  // Hide all sections
  document.querySelectorAll('.main-section').forEach((section) => {
    section.classList.add('hidden');
  });

  // Show selected section
  document.getElementById(sectionId).classList.remove('hidden');
}

// Timatable storage and retrieval
document.getElementById('log-in-button').addEventListener('click', function() {
  // Get the current time when the button is clicked
  const loginTime = getCurrentTime();

  // Display the login time below the button
  document.getElementById('logged-time').textContent = 'You logged in at: ' + loginTime;

  // Save the login time to localStorage
  localStorage.setItem('loginTime', loginTime);

  // Optionally, you can also update the current time displayed at the top
  document.getElementById('current-time').textContent = loginTime;
});

