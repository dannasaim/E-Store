var correctPlacement = {
    "div6": "drag1",
    "div2": "drag2",
    "div4": "drag3",
    "div10": "drag4",
    "div8": "drag5",
};

var winSound = new Audio("music/win.mp3");

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    var dropContainer = ev.target;

    //Check if the dropped element is an image
    if (draggedElement.tagName.toLowerCase() === "img") {

        if (dropContainer.querySelector('img')) {
            return;
        }
        dropContainer.textContent = "";

        dropContainer.appendChild(draggedElement);

        checkWin();
    }
}

function checkWin() {
    var allCorrect = true;

    for (var dropId in correctPlacement) {
        var dropContainer = document.getElementById(dropId);
        var draggedElementId = correctPlacement[dropId];

        if (!dropContainer.querySelector('img') || dropContainer.querySelector('img').id !== draggedElementId) {
            allCorrect = false;
            break;
        }
    }

    var resultElement = document.getElementById('result');
    var resetBtn = document.getElementById('reset-btn');

    if (allCorrect) {

        winSound.play()

        resultElement.innerHTML = "Congratulations! You win! Enter this code: 7777 to buy ticket with -50% SALE";
        resultElement.style.color = "#4CAF50";
        resetBtn.style.display = "none";
    } else {
        resultElement.innerHTML = "Oops! Try again.";
        resultElement.style.color = "#f44336";
        resetBtn.style.display = "center";
    }
}

function resetGame() {
    //Reload the page
    location.reload();
}