// 🎮 Light/Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

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
});
