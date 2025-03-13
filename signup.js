document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const name = document.getElementById('name');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!email.includes("@")) {
        alert("@ is missing in the email");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    alert('Signup successfull!');
    document.getElementById('signup-form').reset();
    window.location.href = 'Login.html'; 
});
