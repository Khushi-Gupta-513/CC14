// Select the HTML elements for displaying tickets and error messages
const customerTickets = document.getElementById('customerTickets');
const errorMessage = document.getElementById('errorMessage');

// Async function to fetch unresolved tickets
async function unresolvedTickets() {
    // Create a loading message while fetching data
    const loadingMessage = document.createElement('li');
    loadingMessage.textContent = "Loading ticket data...";
    customerTickets.appendChild(loadingMessage);

    try {
        // Fetch ticket data from the API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Unable to fetch ticket data');
        }

        // Parse the JSON data from the response
        const tickets = await response.json();
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available');
        }

        // Add the following line for Commit 3 here:


