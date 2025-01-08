// Hash function to generate a simple hash key based on customer name
function hashFunction(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i) * (i + 1);  // Basic hashing formula
    }
    return hash % 100;  // Limit hash values within a range
}

// Customer hash table
let customerHashTable = {};

// Predefined customers
let predefinedCustomers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];
let customerCount = 1;

// Insert predefined customers into the hash table
predefinedCustomers.forEach(customer => {
    let key = hashFunction(customer);
    customerHashTable[key] = customer;
    console.log(`Customer ${customer} added with number: ${customerCount}`);
    customerCount++;
});

// Display the current hash table
function displayHashTable() {
    console.log("Current Customer Hash Table:");
    for (let key in customerHashTable) {
        console.log(`Number: ${Object.keys(customerHashTable).indexOf(key) + 1}, Name: ${customerHashTable[key]}`);
    }
}

// Display the initial hash table
displayHashTable();

// Function to add a new customer to the hash table
function addCustomer() {
    let customerName = prompt("Enter customer's name to add to the hash table:");
    if (customerName) {
        let key = hashFunction(customerName);
        if (customerHashTable[key]) {
            alert("Collision detected! Try a different name.");
        } else {
            customerHashTable[key] = customerName;
            let position = Object.keys(customerHashTable).length;
            alert(`Customer added: ${customerName}. Their number in hash table is: ${position}`);
            console.log(`Customer added: ${customerName}. Their number in hash table is: ${position}`);
            displayHashTable();
        }
    } else {
        alert("No name entered.");
    }
}

// Function to service a customer based on number input
function serveCustomer() {
    let serviceNumber = parseInt(prompt("Enter the number of the customer to be serviced:"), 10);
    let keys = Object.keys(customerHashTable);
    if (isNaN(serviceNumber) || serviceNumber < 1 || serviceNumber > keys.length) {
        alert("Invalid number entered. Please enter a valid number.");
    } else {
        let key = keys[serviceNumber - 1];
        let servicedCustomer = customerHashTable[key];
        delete customerHashTable[key];
        alert(`Servicing customer: ${servicedCustomer}`);
        console.log(`Serviced: ${servicedCustomer}`);
        displayHashTable();
    }
}

// Loop to handle servicing five customers
for (let i = 0; i < 5; i++) {
    serveCustomer();
    if (Object.keys(customerHashTable).length === 0) {
        alert("All customers have been serviced.");
        break;
    }
}
