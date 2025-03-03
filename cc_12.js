// Task 1 - Create Revenue Metric Card

document.addEventListener('DOMContentLoaded', () => {

    // Selecting the dashboard container using getElementById and querySelector

    const dashboard = document.getElementById('dashboard');
    const dashboardQuery = document.querySelector('#dashboard');

    // Creating the new div element for the revenue card

    const revenueCard = document.createElement('div');
    revenueCard.setAttribute('class', 'metric-card');
    revenueCard.setAttribute('id', 'revenueCard');

    // Adding the content to the card

    revenueCard.innerHTML = `
        <h3>Revenue</h3>
        <p>$0</p>
    `;

    // Appending the card to the dashboard

    dashboard.appendChild(revenueCard);
});



// Task 2 - Update Metric Cards via Array Conversion

document.addEventListener('DOMContentLoaded', () => {
   
    // Selecting all metric cards

    const metricCards = document.querySelectorAll('.metric-card');

    // Converting NodeList to array

    const metricCardsArray = Array.from(metricCards);

    // Updating each metric card's inner text
    
    metricCardsArray.forEach(card => {
        card.innerHTML += ' - Updated';
        card.style.backgroundColor = 'lightblue'; // Optional style change
    });
});
