document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email.includes("@")) {
        alert("@ is missing in the email");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert('Login successful!');
    document.getElementById('login-form').reset();
    window.location.href = 'index.html'; 
});
