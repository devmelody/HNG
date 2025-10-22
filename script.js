const form = document.getElementById('contact-form');
const timeElement = document.querySelector('[data-testid="test-user-time"]');
const successMsg = document.getElementById('success-message');

// Update time in milliseconds
function updateTime() {
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

updateTime();

// Update time every second
setInterval(updateTime, 1000);

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Input fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message'); // ✅ fixed

    // Error message elements
    const errors = {
      name: document.getElementById('error-name'),
      email: document.getElementById('error-email'),
      subject: document.getElementById('error-subject'),
      message: document.getElementById('error-message'),
    };

    let isValid = true;

    // Reset error messages
    Object.values(errors).forEach(el => (el.textContent = ''));

    // Name validation
    if (name.value.trim() === '') {
      errors.name.textContent = 'Full name is required.';
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === '') {
      errors.email.textContent = 'Email is required.';
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      errors.email.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Subject validation
    if (subject.value.trim() === '') {
      errors.subject.textContent = 'Subject is required.';
      isValid = false;
    }

    // Message validation
    if (message.value.trim().length < 10) {
      errors.message.textContent = 'Message must be at least 10 characters.';
      isValid = false;
    }

    if (isValid) {
      successMsg.hidden = false;
      form.reset();
    } else {
      successMsg.hidden = true;
    }
  });
}
