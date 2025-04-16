function showMessage() { 
    alert("Hello! Welcome to my website."); 
}

function changeBgColor() { 
    document.body.style.backgroundColor = "lightpink"; 
    }

function displayGreeting() {
    let name = document.getElementById("nameInput").value;
    document.getElementByld("greeting").innerHTML = "Hello, " + name + "! Welcome to my website!";
}

function changeBgColorUser() { 
    let color = document.getElementById("colorInput").value;
    document.body.style.backgroundColor = color; 
}

function checkAge() {
    let age = document.getElementById("ageInput").value;
    if (age >= 18) {
        alert("You are an adult ;>");
    } else {
        alert("You're still a kid :<");
    }
}

function zoomIn(img) {
    img.style.transform = "scale(1.2)";
}

function zoomOut(img) {
    img.style.transform = "scale(1)";
}

function favorite() {
   let favorite = document.getElementById("Insta").innerText = ("You favorite this!");
}

function unfavorite() {
    let unfavorite = document.getElementById("Insta").innerText = ("You unfavorite this!");
}