function employeeLogin() {
    var storedUsername = localStorage.getItem('employeeUsername');
    var storedPassword = localStorage.getItem('employeePassword');

    var enteredUsername = document.getElementById('employeeLoginUsername').value;
    var enteredPassword = document.getElementById('employeeLoginPassword').value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        alert('Employee login successful');
        // Redirect to time slot selection or perform other employee actions
        // Example: window.location.href = 'time-slot-selection.html';
    } else {
        alert('Invalid username or password');
    }
}
