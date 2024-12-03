function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // In a real application, you would make an API call here
    // This is just a simple example
    if (username && password) {
        // Store user role in session storage (in real app, this would come from backend)
        const userRole = username.includes('admin') ? 'admin' : 'employee';
        sessionStorage.setItem('userRole', userRole);
        sessionStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    } else {
        alert('Please enter valid credentials');
    }
}

function checkAuth() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (!isLoggedIn && !window.location.href.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

function logout() {
    sessionStorage.clear();
    window.location.href = 'login.html';
} 