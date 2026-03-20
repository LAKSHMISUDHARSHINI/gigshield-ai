let isLogin = true;

function toggleForm() {
    isLogin = !isLogin;

    document.getElementById("formTitle").innerText =
        isLogin ? "Login" : "Sign Up";
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    document.getElementById("auth").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}

function triggerDisruption(type) {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("claim").style.display = "block";

    let amount = 0;

    if (type === "Heavy Rain") {
        amount = 300;
    } else if (type === "Extreme Heat") {
        amount = 200;
    } else if (type === "High Pollution") {
        amount = 150;
    }

    document.getElementById("reason").innerText =
        "Disruption Detected: " + type;

    document.getElementById("amount").innerText =
        "₹" + amount + " credited instantly";
}

function goBack() {
    document.getElementById("claim").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
}