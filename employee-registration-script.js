function employeeRegister() {
    // Dummy registration logic (replace with actual registration logic)
    var name = document.getElementById('employeeName').value;
    var username = document.getElementById('employeeUsername').value;
    var password = document.getElementById('employeePassword').value;

    // Perform validation if needed

    // Example: Store user data in local storage (replace with server-side logic)
    localStorage.setItem('employeeName', name);
    localStorage.setItem('employeeUsername', username);
    localStorage.setItem('employeePassword', password);

    alert('Employee registration successful');
    // Redirect to employee login page or perform other actions
    // Example: window.location.href = 'employee-login.html';
}
