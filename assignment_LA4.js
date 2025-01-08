// Initial customer queue with given customers
let customerQueue = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];


function displayQueue() {
    if (customerQueue.length === 0) {
        console.log("The queue is empty.");
    } else {
        console.log("Current Queue:");
        customerQueue.forEach((customer, index) => {
            console.log(`${index + 1}. ${customer}`);
        });
    }
}

// Display the initial queue
displayQueue();

// Function to add a customer to the queue
function addCustomer() {
    let customerName = prompt("Enter customer's name to add to the queue:");
    if (customerName) {
        customerQueue.push(customerName);
        let position = customerQueue.length;
        alert(`Customer added: ${customerName}. Their number in queue is: ${position}`);
        console.log(`Customer added: ${customerName}. Their number in queue is: ${position}`);
    } else {
        alert("No name entered.");
    }
}

// Function to serve a customer based on number input
function serveCustomer() {
    let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"), 10);
    if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > customerQueue.length) {
        alert("Invalid number entered. Please enter a valid number.");
    } else {
        let servicedCustomer = customerQueue.splice(serviceNumber - 1, 1)[0];
        alert(`Servicing customer: ${servicedCustomer}`);
        console.log(`Serviced: ${servicedCustomer}`);
        displayQueue();
    }
}

// Loop to handle servicing five customers
for (let i = 0; i < 5; i++) {
    serveCustomer();
    if (customerQueue.length === 0) {
        alert("All customers have been serviced.");
        break;
    }
}
