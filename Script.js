function signup() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username && password) {
        localStorage.setItem(username, password);
        document.getElementById("message").innerText = "Account created successfully! Please log in.";
    } else {
        document.getElementById("message").innerText = "Please enter both username and password.";
    }
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (localStorage.getItem(username) === password) {
        document.getElementById("auth-container").style.display = "none";
        document.getElementById("shop-container").style.display = "block";
    } else {
        document.getElementById("message").innerText = "Invalid credentials!";
    }
}

function buyDog(dogName, price) {
    alert(`You have successfully purchased a ${dogName} for $${price}!`);
}
