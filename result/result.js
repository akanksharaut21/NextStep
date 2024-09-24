const ctx = document.getElementById('careerChart').getContext('2d');

const careerChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Software Developer', 'Data Scientist', 'Cybersecurity Specialist'],
        datasets: [{
            label: 'Career Interest',
            data: [40, 35, 25],
            backgroundColor: ['#ffe082', '#ffb74d', '#ff8a65'],
            borderColor: ['#ffe082', '#ffb74d', '#ff8a65'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }
});


const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});



document.getElementById('printButton').addEventListener('click', () => {
    window.print();  // Opens the print dialog
});


