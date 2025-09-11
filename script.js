// 🎉 Part 1: Event Handling
document.getElementById("messageBtn").addEventListener("click", () => {
  const msg = document.getElementById("messageText");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});

// 🎮 Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game Logic
let count = 0;
const countDisplay = document.getElementById("countDisplay");
const gameMessage = document.getElementById("gameMessage");

document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;

  // Fun messages based on score
  if (count === 5) {
    gameMessage.textContent = "🔥 You're warming up!";
  } else if (count === 10) {
    gameMessage.textContent = "🚀 You're on fire!";
  } else if (count === 20) {
    gameMessage.textContent = "🏆 Champion mode unlocked!";
  } else {
    gameMessage.textContent = "";
  }
});


// 📋✅ Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  let errors = [];

  // Name validation
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6 || !/\d/.test(password)) {
    errors.push("Password must be at least 6 characters and include a number.");
  }

  // Show feedback
  if (errors.length > 0) {
    feedback.innerHTML = `<ul>${errors.map(err => `<li>${err}</li>`).join("")}</ul>`;
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  }
});

document.getElementById("messageBtn").addEventListener("click", () => {
  const imageContainer = document.getElementById("imageContainer");
  imageContainer.style.display = imageContainer.style.display === "none" ? "block" : "none";
});

