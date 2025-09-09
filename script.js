// 🌗 Light/Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

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
});
