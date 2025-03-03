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
        card.style.backgroundColor = 'lightblue';
    });
});



// Task 3 - Implement Dynamic Inventory List

document.addEventListener('DOMContentLoaded', () => {
    const inventoryList = document.getElementById('inventoryList');
    const addProductButton = document.getElementById('addProductButton');

    // Function to add a product to the list

    function addProduct() {
        const productItem = document.createElement('li');
        productItem.setAttribute('class', 'product-item');
        productItem.setAttribute('data-product', 'new-product');
        productItem.innerText = 'New Product';
        
        // Adding event listener for removal

        productItem.addEventListener('click', removeProduct);

        // Appending product item to the inventory list

        inventoryList.appendChild(productItem);
    }

    // Function to remove a product from the list

    function removeProduct(event) {
        event.target.remove(); // Removes clicked product item
    }

    // Event listener to add product on button click

    addProductButton.addEventListener('click', addProduct);
});



// Task 4 - Demonstrated Event Bubbling in Customer Section

document.addEventListener('DOMContentLoaded', () => {
    const customerSection = document.getElementById('customerSection');
    const customerCards = document.querySelectorAll('.customer-card');

    // Event listener for the parent container (customerSection)

    customerSection.addEventListener('click', () => {
        console.log('Customer Section clicked');
    });

    // Event listener for individual customer cards
    
    customerCards.forEach(card => {
        card.addEventListener('click', (event) => {
            console.log('Customer card clicked');
            event.stopPropagation(); // Prevents event bubbling to the parent container
        });
    });
});
