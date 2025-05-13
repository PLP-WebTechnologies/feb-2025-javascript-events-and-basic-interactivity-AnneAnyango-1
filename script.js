// 1. Event Handling
const clickMeButton = document.getElementById('clickMeButton');
const clickMessage = document.getElementById('clickMessage');

clickMeButton.addEventListener('click', function() {
    clickMessage.textContent = 'You clicked the button!';
});

const hoverMeDiv = document.getElementById('hoverMe');
const hoverMessage = document.getElementById('hoverMessage');

hoverMeDiv.addEventListener('mouseover', function() {
    hoverMeDiv.classList.add('hovered');
    hoverMessage.textContent = 'You are hovering!';
});

hoverMeDiv.addEventListener('mouseout', function() {
    hoverMeDiv.classList.remove('hovered');
    hoverMessage.textContent = 'Hovering stopped.';
});

const keypressInput = document.getElementById('keypressInput');
const keypressMessage = document.getElementById('keypressMessage');

keypressInput.addEventListener('keypress', function(event) {
    keypressMessage.textContent = `You pressed the key: ${event.key}`;
});

const doubleClickMeButton = document.getElementById('doubleClickMeButton');
const doubleClickMessage = document.getElementById('doubleClickMessage');

doubleClickMeButton.addEventListener('dblclick', function() {
    doubleClickMessage.textContent = 'You double-clicked!';
});

// 2. Interactive Elements
const changeTextButton = document.getElementById('changeTextButton');
const buttonTextParagraph = document.getElementById('buttonText');

changeTextButton.addEventListener('click', function() {
    if (buttonTextParagraph.textContent === 'Initial Text') {
        buttonTextParagraph.textContent = 'Text Changed!';
        changeTextButton.textContent = 'Reset Text';
    } else {
        buttonTextParagraph.textContent = 'Initial Text';
        changeTextButton.textContent = 'Change Text';
    }
});

const galleryImage = document.getElementById('galleryImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const images = [
    "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
    "https://images.pexels.com/photos/8957675/pexels-photo-8957675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/19803588/pexels-photo-19803588/free-photo-of-surfboard-on-a-tropical-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];
let currentIndex = 0;

function updateImage() {
    galleryImage.src = images[currentIndex];
}

prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateImage();
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

updateImage(); // Initial image load

const tabButtons = document.querySelectorAll('.tab-buttons button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');

        // Deactivate all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Activate the clicked button and corresponding content
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// 3. Form Validation
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;

    // Required field check for Name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password rules (min 8 characters)
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        formMessage.textContent = 'Form submitted successfully!';
        form.reset(); // Clear the form
    } else {
        formMessage.textContent = 'Please fix the errors above.';
    }
});

// Bonus: Real-time Feedback (Email Field)
emailInput.addEventListener('input', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required.';
    } else if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email format.';
    } else {
        emailError.textContent = '';
    }
});