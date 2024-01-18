// employee-script.js

function employeeRegister() {
    // Placeholder function for employee registration
    var employeeName = prompt('Enter your name:');
    var employeeUsername = prompt('Enter your username:');
    var employeePassword = prompt('Enter your password:');

    if (employeeName && employeeUsername && employeePassword) {
        // Perform actions to register the employee (for example, send registration data to the server)
        console.log('Employee registered:', employeeName, employeeUsername);
        alert('Employee registration successful');
    } else {
        alert('Please fill in all registration details');
    }
}

function employeeLogin() {
    // Placeholder function for employee login
    var storedUsername = localStorage.getItem('employeeUsername');
    var storedPassword = localStorage.getItem('employeePassword');

    var enteredUsername = prompt('Enter your username:');
    var enteredPassword = prompt('Enter your password:');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Employee login successful');
        // Redirect to time slot selection or perform other employee actions
        // Example: window.location.href = 'time-slot-selection.html';
    } else {
        alert('Invalid username or password');
    }
}

function showAvailableTimeSlots() {
    // Placeholder function for displaying available time slots
    // In a real-world scenario, you might fetch time slot information from the server
    alert('Displaying available time slots');
}

function selectTimeSlot() {
    // Placeholder function for selecting a time slot
    var selectedTimeSlot = prompt('Enter the desired time slot:');
    if (selectedTimeSlot) {
        // Perform actions with the selected time slot (for example, send data to the server)
        console.log('Time slot selected:', selectedTimeSlot);
        alert('Time slot selected successfully');
    }
}
