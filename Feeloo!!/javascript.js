const API_URL = "http://localhost:5000/api/feelings";

function showExpress() {
    document.getElementById("express-section").classList.remove("hidden");
    document.getElementById("listen-section").classList.add("hidden");
}

function showListen() {
    document.getElementById("listen-section").classList.remove("hidden");
    document.getElementById("express-section").classList.add("hidden");
}

async function submitFeeling() {
    const input = document.getElementById("feelingInput");
    const text = input.value;

    if (!text) {
        alert("Please write something 💙");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    });

    input.value = "";
    alert("You're heard 💙");
}

async function loadFeelings() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const list = document.getElementById("feelingsList");
    list.innerHTML = "";

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.text;
        list.appendChild(li);
    });
}