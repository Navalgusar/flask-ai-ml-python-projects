const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);

let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);

canvas.addEventListener("mousemove", draw);

function draw(e) {
    if (!drawing) return;

    ctx.fillStyle = "white";

    const rect = canvas.getBoundingClientRect();

    ctx.beginPath();
    ctx.arc(
        e.clientX - rect.left,
        e.clientY - rect.top,
        10,
        0,
        Math.PI * 2
    );
    ctx.fill();
}

function clearCanvas() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    document.getElementById("result").innerText = "";

}

async function predictDigit() {

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = 28;
    tempCanvas.height = 28;

    const tempCtx = tempCanvas.getContext("2d");

    tempCtx.drawImage(canvas, 0, 0, 28, 28);

    const imageData =
        tempCtx.getImageData(0, 0, 28, 28).data;

    let pixels = [];

    for (let i = 0; i < imageData.length; i += 4) {
        pixels.push(imageData[i]);
    }

    const response = await fetch(
        "http://localhost:5000/predict",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ pixels })
        }
    );

    const result = await response.json();

    document.getElementById("result").innerText =
        "Prediction: " + result.prediction;
}