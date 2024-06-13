let newGameButton = document.getElementById('newGameBtn');
let oldGameButton = document.getElementById('oldGameBtn');

newGameButton.addEventListener('click', () => {
    location.href = "../New Game/newGame.html";
});
oldGameButton.addEventListener('click', () => {
    if (localStorage.getItem('name'))
        location.href = "../Main menu/mainMenu.html";
    else {
        alert("No saved inctances found.");
        location.href = "../New Game/newGame.html";
    }
});