function nextQuestion(questionNumber) {
    const currentQuestion = document.querySelector('.question:not([style*="display: none"])');
    const nextQuestion = document.getElementById('question' + questionNumber);
    
    currentQuestion.style.display = 'none';
    nextQuestion.style.display = 'block';
}

function prevQuestion(questionNumber) {
    const currentQuestion = document.querySelector('.question:not([style*="display: none"])');
    const prevQuestion = document.getElementById('question' + questionNumber);
    
    currentQuestion.style.display = 'none';
    prevQuestion.style.display = 'block';
}

document.getElementById('assessmentForm').onsubmit = function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Get the current origin and path dynamically
    const baseUrl = window.location.origin;
    const path = window.location.pathname.split('/').slice(0, -2).join('/');
    
    // Redirect to the assessment page with the correct base URL
    window.location.href = `${baseUrl}${path}/result/result.html`;
};


