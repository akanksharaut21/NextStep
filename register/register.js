document.getElementById('registerForm').onsubmit = function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the current origin and path dynamically
    const baseUrl = window.location.origin;
    const path = window.location.pathname.split('/').slice(0, -2).join('/');
    
    // Redirect to the assessment page with the correct base URL
    window.location.href = `${baseUrl}${path}/assessment/assessment.html`;
};