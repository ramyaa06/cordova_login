document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    document.getElementById("submit").addEventListener("click", submitForm);
    document.getElementById("reset").addEventListener("click", resetForm);
}

function submitForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Implement your login logic here

    // For now, just show an alert
    alert(`Username: ${username}\nPassword: ${password}`);
}

function resetForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}
