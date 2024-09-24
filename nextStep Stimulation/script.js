const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


// script.js for simulation

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const simulationId = urlParams.get('id');
    
    // Define content for each simulation
    const simulations = {
        "film-making":{
            title: "Film Making",
            description: "Learn the essentials of film making—from script to screen. Master directing, shooting, and editing to create your own films.",
            duration: "6 Weeks",
            rating: "4.5/5"
        },
        "fashion-designing":{
            title: "Fashion Designing",
            description: "Explore the world of fashion design. Create unique outfits, learn about textiles, and understand design principles to craft your own clothing line.",
            duration: "5 Weeks",
            rating: "4.6/5"

        },
        "fund-management":{
            title: "Fund Management",
            description: "Explore the world of fashion design. Create unique outfits, learn about textiles, and understand design principles to craft your own clothing line.",
            duration: "7 Weeks",
            rating: "4.2/5"

        },
        "architecture":{
            title: "Arcitecture",
            description: "Design and plan building structures. Learn architectural principles, drafting techniques, and 3D modeling to create innovative and functional designs.",
            duration: "6 Weeks",
            rating: "4.9/5"

        },
        "chartered-accountant":{
            title: "Chartered Accountant",
            description: "Get hands-on experience in accounting, auditing, and tax planning to manage financial records and provide expert advice.",
            duration: "9 Weeks",
            rating: "4.5/5"
        },
        "hospitality":{
            title: "Hospitality",
            description: "Explore the hospitality industry. Learn about guest services, event planning, and hotel management to deliver exceptional experiences.",
            duration: "2 Weeks",
            rating: "4.4/5"
        },
        "law":{
            title: "Law",
            description: "Learn legal principles, case analysis, and courtroom procedures in a hands-on legal environment.",
            duration: "9 Weeks",
            rating: "4.7/5"
        },
        "risk-management":{
            title: "Risk Management",
            description: "Learn to identify, assess, and mitigate risks. Develop strategies to manage and reduce potential threats in various scenarios.",
            duration: "6 Weeks",
            rating: "4.6/5"

        },
        "software-developer": {
            title: "Software Developer",
            description: "Learn to build and develop software applications from scratch. This simulation includes hands-on coding challenges, software development lifecycle, and team collaboration.",
            duration: "6 Weeks",
            rating: "4.5/5"
        },
        "graphic-designer": {
            title: "Graphic Designer",
            description: "Explore creative visual design and communication skills. This simulation covers Adobe Photoshop, Illustrator, and effective communication through visuals.",
            duration: "4 Weeks",
            rating: "4.3/5"
        },
        "data-scientist": {
            title: "Data Scientist",
            description: "Dive into data analysis, machine learning, and AI techniques. Learn Python, R, and advanced statistical methods in this in-depth simulation.",
            duration: "8 Weeks",
            rating: "4.8/5"
        },
        "cyber-security":{
            title: "Cyber Security",
            description: "Learn to protect systems and networks from cyber threats.",
            duration: "5 Weeks",
            rating: "4.4/5"
        },
        "digital-marketer":{
            title: "Digital Marketing",
            description: "Learn to protect systems and networks from cyber threats.",
            duration: "3 Weeks",
            rating: "3.9/5"
        },
        "project-manager":{
            title: "Project manager",
            description: "Learn to protect systems and networks from cyber threats.",
            duration: "6 Weeks",
            rating: "4.2/5"

        }
        // Add more simulations as needed
    };

    // Get the simulation content elements
    const simulationTitle = document.getElementById('simulation-title');
    const simulationDescription = document.getElementById('simulation-description');
    const simulationDuration = document.getElementById('simulation-duration');
    const simulationRating = document.getElementById('simulation-rating');

    // Display the content based on the 'id' parameter
    if (simulationId && simulations[simulationId]) {
        const simulation = simulations[simulationId];
        simulationTitle.textContent = simulation.title;
        simulationDescription.textContent = simulation.description;
        simulationDuration.textContent = "Duration: " + simulation.duration;
        simulationRating.textContent = "Rating: " + simulation.rating;
    } else {
        // Show a message if the simulation is not found
        document.getElementById('simulation-content').innerHTML = "<p>Simulation not found.</p>";
    }
});

//for images

document.addEventListener("DOMContentLoaded", function() {
    // Function to get URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the simulation ID from the URL parameters
    const simulationId = getQueryParam('id');
    
    // Default image if no valid ID is found
    const defaultImage = 'default-image.jpg'; // Update with your default image path

    // Mapping of simulation IDs to image paths
    const simulationImages = {
        'software-developer': '../assets/software-developerZ.png',
        'graphic-designer': '../assets/Graphic-DesigningZ.jpg',
        'data-scientist': '../assets/Data-ScienceZ.jpg',
        'film-making':'../assets/film-makingZ.jpg',
        'fashion-designing': '../assets/fashion-designingZ.jpeg',
        'fund-management': '../assets/fund-managementZ.jpg',
        'architecture': '../assets/architectureZ.jpg',
        'chartered-accountant': '../assets/chartered-accountantZ.png',
        'hospitality': '../assets/hospitalityZ.jpg',
        'law': '../assets/lawZ.png',
        'risk-management': '../assets/risk-managementZ.jpeg',
        'cyber-security':'../assets/cyber-securityZ.jpg',
        'digital-marketer':'../assets/digital-marketingZ.png',
        'project-manager':'../assets/project-managementZ.jpg'
        // Add more simulations as needed
    };

    // Function to update the image source
    function updateImage() {
        const imageElement = document.querySelector('.simulation-image');
        if (simulationImages[simulationId]) {
            imageElement.src = simulationImages[simulationId];
        } else {
            imageElement.src = defaultImage;
        }
    }

    // Call the function to update the image
    updateImage();
});


   

