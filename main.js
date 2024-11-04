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

        // Loop through the fetched tickets and display them
        tickets.forEach(ticket => {
            const listItem = document.createElement('li');
            listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: User ${ticket.userId}, Issue Description: ${ticket.title}, Details: ${ticket.body}`;
            customerTickets.appendChild(listItem);
        });
    } catch (error) {
        // Handle errors by displaying a message and logging to console
        console.error('Error:', error.message);
        errorMessage.textContent = error.message; // Show error message on the webpage
    } finally {
        // Add this final block for Commit 4


