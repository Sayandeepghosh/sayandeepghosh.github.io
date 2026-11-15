// Sayandeep Ghosh Portfolio Scripts

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 2. Project Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active class on buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
      navbar.style.borderBottomColor = 'rgba(56, 189, 248, 0.2)';
    } else {
      navbar.style.boxShadow = 'none';
      navbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
  });
});

// 4. Contact Form Handler with mailto fallback
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const service = document.getElementById('projectType').value;
  const message = document.getElementById('message').value;
  const feedback = document.getElementById('formFeedback');

  const subject = encodeURIComponent(`Project Inquiry: ${service} (from ${name})`);
  const body = encodeURIComponent(
    `Hello Sayandeep,\n\nMy name is ${name} (${email}).\n\nI am contacting you regarding: ${service}\n\nProject details:\n${message}\n\nBest regards,\n${name}`
  );

  feedback.className = 'form-feedback success';
  feedback.innerHTML = `<i class="fa-solid fa-circle-check"></i> Opening email client... If it doesn't open automatically, write directly to <strong>sayandeepghosh2023@gmail.com</strong>.`;

  setTimeout(() => {
    window.location.href = `mailto:sayandeepghosh2023@gmail.com?subject=${subject}&body=${body}`;
  }, 600);
}
