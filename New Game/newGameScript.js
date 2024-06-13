let nameInput = document.getElementById('name');
let submit = document.getElementById('submit');

const attrBaseValue = 2;
const baseSkillPoints = 15;
const baseHp = 100;
const baseExp = 100;
const inventorySize = 32;

submit.addEventListener('click', () => {
    let playerName = nameInput.value;
    playerName = playerName.replace(" ", "");
    if (playerName == "") alert("Name cannot be empty.");
    else {
        localStorage.setItem('name', playerName);
        localStorage.setItem('level', 1);
        localStorage.setItem('hp', baseHp);
        localStorage.setItem('atk', attrBaseValue);
        localStorage.setItem('def', attrBaseValue);
        localStorage.setItem('agi', attrBaseValue);
        localStorage.setItem('exp', 0);
        localStorage.setItem('maxHp', baseHp);
        localStorage.setItem('maxExp', baseExp);
        localStorage.setItem('skillPoints', baseSkillPoints);
        localStorage.setItem('deathCount', 0);
        localStorage.setItem('inventorySize', inventorySize);

        for (let i = 1; i <= inventorySize; i++) {
            localStorage.setItem('slot' + i, 0);
        }
        completionMessage.innerHTML = "Your character has been created.";
        completionBox.style.display = 'flex';
    }
});

closeCompletionBoxBtn.addEventListener('click', () => {
    location.href = '../Status/status.html';
});
