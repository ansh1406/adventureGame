let playerName = document.getElementById('name');
let level = document.getElementById('level');
let hp = document.getElementById('hp');
let maxHp= document.getElementById('maxHp');
let exp = document.getElementById('exp');
let maxExp = document.getElementById('maxExp');
let atk = document.getElementById('atk');
let def = document.getElementById('def');
let agi = document.getElementById('agi');
let skillPoints = document.getElementById('skillPoints');
let deathCount = document.getElementById('deathCount');

let addToAtk = document.getElementById('addToAtk');
let addToDef = document.getElementById('addToDef');
let addToAgi = document.getElementById('addToAgi');

let mainMenuBtn = document.getElementById('mainMenuBtn');

let availableSkillPoints = parseInt(localStorage.getItem('skillPoints'));

playerName.innerHTML = localStorage.getItem('name');
level.innerHTML = localStorage.getItem('level');
hp.innerHTML = localStorage.getItem('hp');
maxHp.innerHTML = localStorage.getItem('maxHp');
exp.innerHTML = localStorage.getItem('exp');
maxExp.innerHTML = localStorage.getItem('maxExp');
atk.innerHTML = localStorage.getItem('atk');
def.innerHTML = localStorage.getItem('def');
agi.innerHTML = localStorage.getItem('agi');
skillPoints.innerHTML = localStorage.getItem('skillPoints');
deathCount.innerHTML = localStorage.getItem('deathCount');
function checkIfSkillPointsAreAvailable() {
    if (availableSkillPoints <= 0) {
        addToAtk.style.opacity = '0.7';
        addToDef.style.opacity = '0.7';
        addToAgi.style.opacity = '0.7';
        addToAtk.disabled = true;
        addToDef.disabled = true;
        addToAgi.disabled = true;
    }
}

addToAtk.addEventListener('click', () => {
    if (availableSkillPoints > 0) {
        let currentAtk = parseInt(localStorage.getItem('atk'));
        currentAtk++;
        availableSkillPoints--;
        localStorage.setItem('atk', currentAtk);
        localStorage.setItem('skillPoints', availableSkillPoints);
        atk.innerHTML = currentAtk;
        skillPoints.innerHTML = availableSkillPoints;
    }
});

addToDef.addEventListener('click', () => {
    if (availableSkillPoints > 0) {
        let currentDef = parseInt(localStorage.getItem('def'));
        currentDef++;
        availableSkillPoints--;
        localStorage.setItem('def', currentDef);
        localStorage.setItem('skillPoints', availableSkillPoints);
        def.innerHTML = currentDef;
        skillPoints.innerHTML = availableSkillPoints;
    }
});

addToAgi.addEventListener('click', () => {
    if (availableSkillPoints > 0) {
        let currentAgi = parseInt(localStorage.getItem('agi'));
        currentAgi++;
        availableSkillPoints--;
        localStorage.setItem('agi', currentAgi);
        localStorage.setItem('skillPoints', availableSkillPoints);
        agi.innerHTML = currentAgi;
        skillPoints.innerHTML = availableSkillPoints;
    }
});

mainMenuBtn.addEventListener('click', () => {
    location.href = '../Main Menu/mainMenu.html';
});