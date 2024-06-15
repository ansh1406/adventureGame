let level = localStorage.getItem('level');

let forestBtn = document.getElementById('forest');
let swampBtn = document.getElementById('swamp');
let riverBtn = document.getElementById('river');
let mountainBtn = document.getElementById('mountain');
let peakBtn = document.getElementById('peak');
let freeZoneBtn = document.getElementById('freeZone');
let mainMenuBtn = document.getElementById('mainMenuBtn');

if (level < 6) {
    swampBtn.disabled = true;
    swampBtn.style.opacity = "0.8";
    swampBtn.innerHTML = ' <span>Defeat previous Boss first.</span><img class="lockImg" src="../Assets/general/areaLock.png" />';
}
if (level < 11) {
    riverBtn.disabled = true;
    riverBtn.style.opacity = '0.8';
    riverBtn.innerHTML = '<span>Defeat previous Boss first.</span> <img class="lockImg" src="../Assets/general/areaLock.png" />';
}
if (level < 16) {
    mountainBtn.disabled = true;
    mountainBtn.style.opacity = "0.8";
    mountainBtn.innerHTML = ' <span>Defeat previous Boss first.</span><img class="lockImg" src="../Assets/general/areaLock.png" />';
}
if (level < 21) {
    peakBtn.disabled = true;
    peakBtn.style.opacity = '0.8';
    peakBtn.innerHTML = '<span>Defeat previous Boss first.</span> <img class="lockImg" src="../Assets/general/areaLock.png" />';
}
if (level < 26) {
    freeZoneBtn.disabled = true;
    freeZoneBtn.style.opacity = "0.8";
    freeZone.innerHTML = '<span>Defeat previous Boss first.</span> <img class="lockImg" src="../Assets/general/areaLock.png" />';
}

forestBtn.addEventListener('click', () => {
    selectAction(1);
});

swampBtn.addEventListener('click', () => {
    selectAction(2);
});

riverBtn.addEventListener('click', () => {
    selectAction(3);
});

mountainBtn.addEventListener('click', () => {
    selectAction(4);
});

peakBtn.addEventListener('click', () => {
    selectAction(5);
});

freeZoneBtn.addEventListener('click', () => {
    selectAction(6);
});

function selectAction(areaCode) {
    localStorage.setItem('currentArea', areaCode);
    let random = Math.random();
    if (random < 0.5)
        location.href = '../Gather Item/gatherItem.html';
    else
        location.href = '../Battle/battle.html';
}

mainMenuBtn.addEventListener('click', () => {
    location.href = '../Main Menu/mainMenu.html';
});