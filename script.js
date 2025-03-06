//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function() {
    const message = document.getElementById("text").value;
    const delay = document.getElementById("delay").value;
    await delayMessage(delay);
    document.getElementById("output").innerText = message;
});

function delayMessage(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}