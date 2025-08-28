// ===== SLIDESHOW FUNCTIONALITY =====
// Initialize slide index and get all slide elements
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');

/**
 * Controls the slideshow animation
 * Cycles through images every 3 seconds
 */
function showSlides() {
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Increment slide index and reset if at end
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // Display current slide
    slides[slideIndex-1].style.display = "block";  
    
    // Call function again after 3 seconds
    setTimeout(showSlides, 3000); 
}

// Start slideshow when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (slides.length > 0) {
        showSlides();
    }
});

// ===== FORM VALIDATION =====
/**
 * Validates the contact form before submission
 * @param {Event} event - The form submission event
 */
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Get form input values
    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Simple validation checks
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    
    if (address === "") {
        alert("Please enter your address.");
        return false;
    }
    
    if (contact === "") {
        alert("Please enter your contact number.");
        return false;
    }
    
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    
    if (message === "") {
        alert("Please enter your message.");
        return false;
    }
    
    // If all validations pass, show success message
    alert("Thank you for your message! We will get back to you soon.");
    document.getElementById('contactForm').reset(); // Reset form
    return true;
}

// Add form validation to contact form if it exists
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}