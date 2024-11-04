const customerTickets = document.getElementById('customerTickets');
const errorMessage = document.getElementById('errorMessage');

async function unresolvedTickets() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Unable to fetch ticket data');
        }

        const tickets = await response.json();
        if (tickets.length === 0) {
            throw new Error('No unresolved tickets available');
        }

        // If there are tickets, proceed to display them
        tickets.forEach(ticket => {
            const listItem = document.createElement('li');
            listItem.textContent = `Ticket ID: ${ticket.id}, Customer Name: User ${ticket.userId}, Issue Description: ${ticket.title}, Details: ${ticket.body}`;
            customerTickets.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error.message);
        errorMessage.textContent = error.message; // Display error message to the user
    }
}

// Fetch unresolved tickets
unresolvedTickets();

