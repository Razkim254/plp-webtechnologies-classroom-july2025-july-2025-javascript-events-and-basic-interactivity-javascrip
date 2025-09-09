<<<<<<< HEAD
// 🌗 Light/Dark Mode Toggle
=======
// 🎮 Light/Dark Mode Toggle
>>>>>>> 63a7f57f9fb588862b575e8bd5b37fd68316568e
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

<<<<<<< HEAD
// 🔢 Counter Game
let count = 0;
document.getElementById('incrementBtn').addEventListener('click', () => {
    count++;
    document.getElementById('count').textContent = count;
});

// ❓ Collapsible FAQ
const faqQuestion = document.querySelector('.faq-question');
const faqAnswer = document.querySelector('.faq-answer');

faqQuestion.addEventListener('click', () => {
    faqAnswer.classList.toggle('hidden');
});

// ✅ Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const feedback = document.getElementById('formFeedback');

    let errors = [];

    // Name validation
    if (name.length < 2) {
        errors.push('Name must be at least 2 characters.');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Enter a valid email.');
    }

    // Password validation
    if (password.length < 6) {
        errors.push('Password must be at least 6 characters.');
    }

    // Show feedback
    if (errors.length > 0) {
        feedback.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>`;
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Form submitted successfully!';
        feedback.style.color = 'green';
        this.reset();
    }
=======
// 🎮 Counter Button
let count = 0;
document.getElementById('counterBtn').addEventListener('click', () => {
    count++;
    document.getElementById('clickCount').textContent = count;
});

// 🎮 Collapsible FAQ
document.querySelector('.faq-question').addEventListener('click', () => {
    document.querySelector('.faq-answer').classList.toggle('hidden');
});

// 📋 Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    let message = '';

    // Validate name
    if (name.length < 2) {
        message = 'Name must be at least 2 characters long.';
    }
    // Validate email using regex
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message = 'Please enter a valid email address.';
    }
    // Validate password
    else if (password.length < 6) {
        message = 'Password must be at least 6 characters.';
    } else {
        message = 'Form submitted successfully!';
        document.getElementById('formMessage').style.color = 'green';
    }

    document.getElementById('formMessage').textContent = message;
>>>>>>> 63a7f57f9fb588862b575e8bd5b37fd68316568e
});
