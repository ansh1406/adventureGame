let player = {
    name: localStorage.getItem('name'),
    level: parseInt(localStorage.getItem('level')),
    hp: parseInt(localStorage.getItem('hp')),
    maxHp: parseInt(localStorage.getItem('maxHp')),
    exp: parseInt(localStorage.getItem('exp')),
    maxExp: parseInt(localStorage.getItem('maxExp')),
    atk: parseInt(localStorage.getItem('atk')),
    def: parseInt(localStorage.getItem('def')),
    agi: parseInt(localStorage.getItem('agi')),
    skillPoints: parseInt(localStorage.getItem('skillPoints')),
    deathCount: parseInt(localStorage.getItem('deathCount'))
}

const baseSkillPoints = 15;
const skillPointsPerLevel = 5;
const attrBaseValue = 2;

let monsters = [
    { name: "Slime", level: 1, hp: 20, atk: 5, def: 1, agi: 2, exp: 20 },
    { name: "Goblin", level: 1, hp: 50, atk: 4, def: 5, agi: 5, exp: 50 },
    { name: "Skeleton", level: 1, hp: 40, atk: 4, def: 6, agi: 3, exp: 40 },

    { name: "Slime", level: 2, hp: 25, atk: 7, def: 3, agi: 3, exp: 25 },
    { name: "Goblin", level: 2, hp: 58, atk: 6, def: 6, agi: 7, exp: 58 },
    { name: "Skeleton", level: 2, hp: 46, atk: 5, def: 8, agi: 5, exp: 46 },

    { name: "Slime", level: 3, hp: 30, atk: 9, def: 5, agi: 4, exp: 30 },
    { name: "Goblin", level: 3, hp: 66, atk: 8, def: 7, agi: 9, exp: 66 },
    { name: "Skeleton", level: 3, hp: 52, atk: 6, def: 10, agi: 7, exp: 52 },

    { name: "Slime", level: 4, hp: 35, atk: 11, def: 7, agi: 5, exp: 35 },
    { name: "Goblin", level: 4, hp: 74, atk: 10, def: 8, agi: 11, exp: 74 },
    { name: "Skeleton", level: 4, hp: 58, atk: 7, def: 12, agi: 9, exp: 58 },

    { name: "Hobgoblin", level: 5, hp: 130, atk: 14, def: 9, agi: 12, exp: 300 },


    { name: "Poison viper", level: 6, hp: 150, atk: 10, def: 6, agi: 14, exp: 300 },
    { name: "Giant Frog", level: 6, hp: 200, atk: 17, def: 8, agi: 10, exp: 400 },
    { name: "Lizardman", level: 6, hp: 250, atk: 10, def: 14, agi: 12, exp: 500 },

    { name: "Poison viper", level: 7, hp: 160, atk: 12, def: 7, agi: 16, exp: 320 },
    { name: "Giant Frog", level: 7, hp: 215, atk: 20, def: 9, agi: 11, exp: 430 },
    { name: "Lizardman", level: 7, hp: 270, atk: 12, def: 16, agi: 13, exp: 540 },

    { name: "Poison viper", level: 8, hp: 170, atk: 14, def: 9, agi: 17, exp: 340 },
    { name: "Giant Frog", level: 8, hp: 230, atk: 23, def: 10, agi: 12, exp: 460 },
    { name: "Lizardman", level: 8, hp: 290, atk: 14, def: 18, agi: 14, exp: 580 },

    { name: "Poison viper", level: 9, hp: 180, atk: 16, def: 11, agi: 18, exp: 360 },
    { name: "Giant Frog", level: 9, hp: 245, atk: 26, def: 11, agi: 13, exp: 490 },
    { name: "Lizardman", level: 9, hp: 310, atk: 16, def: 20, agi: 15, exp: 620 },

    { name: "Scaly Naga", level: 10, hp: 600, atk: 21, def: 22, agi: 18, exp: 1400 },


    { name: "Iron Tooth Piranha", level: 11, hp: 500, atk: 28, def: 8, agi: 18, exp: 1000 },
    { name: "Murloc", level: 11, hp: 1000, atk: 20, def: 20, agi: 20, exp: 2000 },
    { name: "Obsidian Tortoise", level: 11, hp: 1500, atk: 18, def: 33, agi: 13, exp: 3000 },

    { name: "Iron Tooth Piranha", level: 12, hp: 520, atk: 30, def: 9, agi: 20, exp: 1040 },
    { name: "Murloc", level: 12, hp: 1030, atk: 22, def: 22, agi: 21, exp: 2060 },
    { name: "Obsidian Tortoise", level: 12, hp: 1550, atk: 19, def: 36, agi: 14, exp: 3100 },

    { name: "Iron Tooth Piranha", level: 13, hp: 540, atk: 32, def: 10, agi: 22, exp: 1080 },
    { name: "Murloc", level: 13, hp: 1060, atk: 24, def: 24, agi: 22, exp: 2120 },
    { name: "Obsidian Tortoise", level: 13, hp: 1600, atk: 20, def: 39, agi: 15, exp: 3200 },

    { name: "Iron Tooth Piranha", level: 14, hp: 560, atk: 34, def: 11, agi: 24, exp: 1120 },
    { name: "Murloc", level: 14, hp: 1090, atk: 26, def: 26, agi: 23, exp: 2180 },
    { name: "Obsidian Tortoise", level: 14, hp: 1650, atk: 21, def: 42, agi: 16, exp: 3300 },

    { name: "Hydra", level: 15, hp: 2500, atk: 28, def: 28, agi: 28, exp: 8800 },


    { name: "Mutant Zombie", level: 16, hp: 2000, atk: 33, def: 33, agi: 18, exp: 6000 },
    { name: "Mutant Skeleton", level: 16, hp: 1500, atk: 28, def: 43, agi: 13, exp: 4500 },
    { name: "Mutant Orc", level: 16, hp: 3000, atk: 38, def: 38, agi: 13, exp: 9000 },

    { name: "Mutant Zombie", level: 17, hp: 2050, atk: 35, def: 35, agi: 19, exp: 6150 },
    { name: "Mutant Skeleton", level: 17, hp: 1530, atk: 29, def: 46, agi: 14, exp: 4590 },
    { name: "Mutant Orc", level: 17, hp: 3100, atk: 40, def: 40, agi: 14, exp: 9300 },

    { name: "Mutant Zombie", level: 18, hp: 2100, atk: 37, def: 37, agi: 20, exp: 6300 },
    { name: "Mutant Skeleton", level: 18, hp: 1560, atk: 30, def: 49, agi: 15, exp: 4680 },
    { name: "Mutant Orc", level: 18, hp: 3200, atk: 42, def: 42, agi: 15, exp: 9600 },

    { name: "Mutant Zombie", level: 19, hp: 2150, atk: 39, def: 39, agi: 21, exp: 6450 },
    { name: "Mutant Skeleton", level: 19, hp: 1590, atk: 31, def: 52, agi: 16, exp: 4770 },
    { name: "Mutant Orc", level: 19, hp: 3300, atk: 44, def: 44, agi: 16, exp: 9900 },

    { name: "Orc Lord", level: 20, hp: 4500, atk: 49, def: 49, agi: 18, exp: 24000 },


    { name: "Gargoyle", level: 21, hp: 3000, atk: 28, def: 58, agi: 18, exp: 15000 },
    { name: "Ghost Armor", level: 21, hp: 3500, atk: 38, def: 48, agi: 23, exp: 17500 },
    { name: "Wyvern", level: 21, hp: 2500, atk: 48, def: 13, agi: 48, exp: 12500 },

    { name: "Gargoyle", level: 22, hp: 3120, atk: 29, def: 61, agi: 19, exp: 15600 },
    { name: "Ghost Armor", level: 22, hp: 3700, atk: 40, def: 50, agi: 24, exp: 18500 },
    { name: "Wyvern", level: 22, hp: 2600, atk: 50, def: 14, agi: 50, exp: 13000 },

    { name: "Gargoyle", level: 23, hp: 3240, atk: 30, def: 64, agi: 20, exp: 16200 },
    { name: "Ghost Armor", level: 23, hp: 3900, atk: 42, def: 52, agi: 25, exp: 19500 },
    { name: "Wyvern", level: 23, hp: 2800, atk: 52, def: 15, agi: 52, exp: 14000 },

    { name: "Gargoyle", level: 24, hp: 3360, atk: 31, def: 67, agi: 21, exp: 16800 },
    { name: "Ghost Armor", level: 24, hp: 4100, atk: 44, def: 54, agi: 26, exp: 20500 },
    { name: "Wyvern", level: 24, hp: 2900, atk: 54, def: 16, agi: 54, exp: 14500 },

    { name: "Flame Dragon", level: 25, hp: 7000, atk: 48, def: 48, agi: 40, exp: 58000 }
]

let attacks = [{ name: "Head Bash", power: 100, accuracy: 50 }, { name: "Punch", power: 50, accuracy: 80 }, { name: "Kick", power: 80, accuracy: 60 }];
let areaCode = parseInt(localStorage.getItem('currentArea'));
let backgroundImage = 'url("../Assets/maps/';
switch (areaCode) {
    case 1:
        backgroundImage = backgroundImage + 'forest';
        break;

    case 2:
        backgroundImage = backgroundImage + 'swamp';
        break;

    case 3:
        backgroundImage = backgroundImage + 'river';
        break;

    case 4:
        backgroundImage = backgroundImage + 'mountain';
        break;

    case 5:
        backgroundImage = backgroundImage + 'peak';
        break;

    case 6:
        backgroundImage = backgroundImage + 'freeZone';
        break;
}
backgroundImage = backgroundImage + '.jpg")';
document.body.style.backgroundImage = backgroundImage;

let attackCards = document.getElementById('attackCards');
let playerImage = document.getElementById('playerImage');
let monsterImage = document.getElementById('monsterImage');
let playerHealth = document.getElementById('playerHealth');
let monsterHealth = document.getElementById('monsterHealth');
let accuracyCircle = document.getElementById('accuracyCircle');
let accuracyCircleSvg = document.getElementById('accuracyCircleSvg');
let selectedAttackImg = document.getElementById('selectedAttackImg');
let playerDamageBubble = document.getElementById('playerDamageBubble');
let monsterDamageBubble = document.getElementById('monsterDamageBubble');

let battleCompletionBox = document.getElementById('battleCompletionBox');
let completionMessage = document.getElementById('completionMessage');
let afterBattlePlayerLevel = document.getElementById('afterBattlePlayerLevel');
let afterBattlePlayerHp = document.getElementById('afterBattlePlayerHp');
let afterBattlePlayerExp = document.getElementById('afterBattlePlayerExp');
let backToMap = document.getElementById('backToMap');
let backToMainMenu = document.getElementById('backToMainMenu');

console.log(playerImage.attributes);

battleCompletionBox.style.display = 'none';
backToMap.addEventListener('click', () => {
    location.href = '../Map/map.html';
});
backToMainMenu.addEventListener('click', () => {
    location.href = '../Main Menu/mainMenu.html';
});

let animateAccuracyCircleEvent;
let playerAccuracy = 10, isAccuracyIncreasing = true;

let monster = spawnMonster();
let monsterMaxHp = monster.hp;
playerImage.src = "../Assets/general/player.png"
monsterImage.src = '../Assets/monsters/' + monster.name + '.png';

let selectedAttack = 0;

accuracyCircleSvg.addEventListener('click', () => {
    accuracyCircle.style.display = 'none';
    selectedAttackImg.style.display = 'none';
    let damage = (player.atk * selectedAttack.power) / 100;
    let def_diff = monster.def - player.def;
    let def_factor;
    switch (parseInt((monster.level - 1) / 5)) {
        case 0:
            damage *= 2;
            break;

        case 1:
            damage *= 4;
            break;

        case 2:
            damage *= 8;
            break;

        case 3:
            damage *= 16;
            break;

        case 4:
            damage *= 32;
            break;

        default:
            damage *= 64;
            break;
    }
    if (def_diff < 20 && def_diff > 0) {
        def_factor = (100 - (def_diff * 3));
    }
    if (def_diff <= 0) {
        def_factor = 100;
    }
    if (def_diff >= 20) {
        def_factor = 40;
    }
    damage = damage * def_factor / 100;
    damage = (damage * playerAccuracy) / 100;
    if (damage < 0)
        damage = 0;

    damage = parseInt(damage);
    selectedAttack = 0;
    animatePlayerImage(damage);
    setTimeout(() => {
        if (monster.hp > damage) {
            monster.hp -= damage;
            setTimeout(monsterTurn, 1000);
        }
        else {
            monster.hp = 0;
            monsterLost();
        }
        updateHealthBars();
        monsterDamageBubble.style.display = 'none';
    }, 1000);

});

monsterImage.addEventListener('click', () => {
    if (selectedAttack != 0)
        accuracyCircleSvg.dispatchEvent(new MouseEvent('click'));
});

for (let i in attacks) {
    let attackCard = document.createElement('img');
    attackCard.classList.add('attackCard');
    attackCard.src = '../Assets/attacks/' + attacks[i].name + '.jpg';
    attackCards.appendChild(attackCard);
    attackCard.addEventListener('click', () => {
        attackCards.style.display = 'none';
        selectedAttackImg.src = attackCard.src;
        selectedAttackImg.style.display = 'block';
        accuracyCircle.style.display = 'block';
        selectedAttack = attacks[i];
        clearInterval(animateAccuracyCircleEvent);
        animateAccuracyCircleEvent = setInterval(animateAccuracyCirle, calculateAnimationDelay());
    });
}
function playerTurn() {
    attackCards.style.display = 'flex';
    playerAccuracy = 10;
}

async function monsterTurn() {
    let random = parseInt((Math.random() * 100)) % attacks.length;
    selectedAttack = attacks[random];
    let damage = (monster.atk * selectedAttack.power) / 100;
    let def_diff = player.def - monster.def;
    let def_factor;
    let monsterAccuracy = selectedAttack.accuracy + monster.agi - player.agi + parseInt(Math.random() * 40 - 10);
    switch (parseInt((monster.level - 1) / 5)) {
        case 0:
            damage *= 2;
            break;

        case 1:
            damage *= 4;
            break;

        case 2:
            damage *= 8;
            break;

        case 3:
            damage *= 16;
            break;

        case 4:
            damage *= 32;
            break;

        default:
            damage *= 64;
            break;
    }
    if (def_diff < 20 && def_diff > 0) {
        def_factor = (100 - (def_diff * 3));
    }
    if (def_diff <= 0) {
        def_factor = 100;
    }
    if (def_diff >= 20) {
        def_factor = 40;
    }
    damage = damage * def_factor / 100;
    damage = (damage * monsterAccuracy) / 100;
    if (damage < 0)
        damage = 0;

    damage = parseInt(damage);
    selectedAttack = 0;
    animateMonsterImage(damage);
    setTimeout(() => {

        if (player.hp > damage) {
            player.hp -= damage;
            setTimeout(playerTurn, 1000);
        }
        else {
            player.hp = 0;
            playerLost();
        }
        updateHealthBars();
        playerDamageBubble.style.display = 'none';
    }, 1000);

}

function playerLost() {
    playerImage.style.display = 'none';
    player.exp = 0;
    player.level = parseInt(player.level / 5) + 1;
    player.skillPoints = baseSkillPoints + skillPointsPerLevel * (player.level - 1);
    player.atk = attrBaseValue;
    player.def = attrBaseValue;
    player.agi = attrBaseValue;
    player.deathCount++;
    calibratePlayerData();
    player.hp = player.maxHp;
    updatePlayerData();
    completionMessage.innerHTML = monster.name + ' has defeated ' + player.name;
    afterBattlePlayerLevel.innerHTML = "Level : " + player.level + "( Death penalty recieved. Skill Points have been restored)";
    afterBattlePlayerHp.innerHTML = "Hp : " + player.hp + '/' + player.maxHp;
    afterBattlePlayerExp.innerHTML = "Exp : " + player.exp + '/' + player.maxExp;
    battleCompletionBox.style.display = 'block';
}

function monsterLost() {
    monsterImage.style.display = 'none';
    if (monster.level == player.level) player.exp += monster.exp;
    if (player.exp >= player.maxExp) {
        player.level++;
        player.skillPoints += 5;
        player.exp = 0;
        calibratePlayerData();
        player.hp = player.maxHp;
        afterBattlePlayerLevel.innerHTML = "Level :" + player.level + "(You have leveled up " + skillPointsPerLevel + " Skill Points gained)";
    }
    else {
        afterBattlePlayerLevel.innerHTML = "Level : " + player.level;
    }
    updatePlayerData();
    completionMessage.innerHTML = player.name + ' has successfully defeated ' + monster.name;
    afterBattlePlayerHp.innerHTML = "Hp : " + player.hp + '/' + player.maxHp;
    afterBattlePlayerExp.innerHTML = "Exp : " + player.exp + '/' + player.maxExp;
    battleCompletionBox.style.display = 'block';
}

function animateAccuracyCirle() {
    if (isAccuracyIncreasing)
        playerAccuracy += 2;
    else
        playerAccuracy -= 2;
    let accuracyCircleRadius = 45 - (playerAccuracy - 10) * 40 / 90;
    accuracyCircle.setAttribute('r', accuracyCircleRadius + '%');
    if (playerAccuracy >= 100)
        isAccuracyIncreasing = false;
    if (playerAccuracy <= 10)
        isAccuracyIncreasing = true;
}
function calculateAnimationDelay() {
    let delay = parseInt((player.agi - monster.agi) / 2 + selectedAttack.accuracy / 10);
    if (delay < 5)
        delay = 5;
    if (delay > 20)
        delay = 20;
    return delay;
}
updateHealthBars();
function updateHealthBars() {
    playerHealth.innerHTML = player.name + " : " + player.hp + '/' + player.maxHp;
    monsterHealth.innerHTML = monster.name + " : " + monster.hp + '/' + monsterMaxHp;
}
function spawnMonster() {
    let random = parseInt(Math.random() * 25200);
    let selectedMonsters = [];
    switch (areaCode) {
        case 1:
            if (player.level > 0 && player.level <= 5) {
                selectedMonsters = selectMonstersOfLevels([player.level]);
            }
            if (player.level > 5)
                selectedMonsters = selectMonstersOfLevels([1, 2, 3, 4]);
            break;

        case 2:
            if (player.level > 5 && player.level <= 10) {
                selectedMonsters = selectMonstersOfLevels([player.level]);
            }
            if (player.level > 10)
                selectedMonsters = selectMonstersOfLevels([6, 7, 8, 9]);
            break;

        case 3:
            if (player.level > 10 && player.level <= 15) {
                selectedMonsters = selectMonstersOfLevels([player.level]);
            }
            if (player.level > 15)
                selectedMonsters = selectMonstersOfLevels([11, 12, 13, 14]);
            break;

        case 4:
            if (player.level > 15 && player.level <= 20) {
                selectedMonsters = selectMonstersOfLevels([player.level]);
            }
            if (player.level > 20)
                selectedMonsters = selectMonstersOfLevels([16, 17, 18, 19]);
            break;

        case 5:
            if (player.level > 20 && player.level <= 25) {
                selectedMonsters = selectMonstersOfLevels([player.level]);
            }
            if (player.level > 25)
                selectedMonsters = selectMonstersOfLevels([21, 22, 23, 24]);
            break;
    }
    random = random % selectedMonsters.length;
    return selectedMonsters[random];
}
function selectMonstersOfLevels(neededLevels) {
    let selectedMonsters = [];
    for (let i in monsters) {
        for (let lvl in neededLevels) {
            if (monsters[i].level == neededLevels[lvl])
                selectedMonsters.push(monsters[i]);
        }
    }
    return selectedMonsters;
}

function calibratePlayerData() {
    if (player.level <= 5) {
        player.maxExp = 100 + (player.level - 1) * 50;
        player.maxHp = 100 + (player.level - 1) * 10;
    }
    if (player.level > 5 && player.level <= 10) {
        player.maxExp = 1000 + (player.level - 6) * 100;
        player.maxHp = 500 + (player.level - 6) * 25;
    }
    if (player.level > 10 && player.level <= 15) {
        player.maxExp = 7000 + (player.level - 11) * 400;
        player.maxHp = 2500 + (player.level - 11) * 50;
    }
    if (player.level > 15 && player.level <= 20) {
        player.maxExp = 20000 + (player.level - 16) * 1000;
        player.maxHp = 4000 + (player.level - 16) * 100;
    }
    if (player.level > 20 && player.level <= 25) {
        player.maxExp = 50000 + (player.level - 21) * 2000;
        player.maxHp = 6500 + (player.level - 21) * 200;
    }
    if (player.level > 25) {
        player.maxExp = 100000 + (player.level - 26) * 1000;
        player.maxHp = 10000 + (player.level - 26) * 500;
    }
}

console.log(playerImage.style);
async function animatePlayerImage(damage) {
    let playerAnimationInterval = setInterval(changePosition, 10);
    let initialPosition = 100;
    let velocity = 5;
    let acceleration = 1;
    let position = initialPosition;
    let damagePosition = 25;
    monsterDamageBubble.style.top = damagePosition + '%';
    function changePosition() {
        velocity += acceleration;
        position += velocity;
        playerImage.style.right = position + 'px';
        if (position >= parseInt(window.innerWidth) - 100) {
            velocity = -5;
            acceleration = -1;
            monsterDamageBubble.innerHTML = '-' + damage;
            monsterDamageBubble.style.display = 'block';
        }
        if (acceleration == -1) {
            damagePosition -= 0.2;
            monsterDamageBubble.style.top = damagePosition + '%';
        }
        if (acceleration == -1 && position <= initialPosition) {
            clearInterval(playerAnimationInterval);
            return 0;
        }
    }
}

async function animateMonsterImage(damage) {
    let monsterAnimationEvent = setInterval(changePosition, 10);
    let initialPosition = 100;
    let velocity = 5;
    let acceleration = 1;
    let position = initialPosition;
    let damagePosition = 25;
    playerDamageBubble.style.top = damagePosition + '%';
    function changePosition() {
        velocity += acceleration;
        position += velocity;
        monsterImage.style.left = position + 'px';
        if (position >= parseInt(window.innerWidth) - 100) {
            velocity = -5;
            acceleration = -1;
            playerDamageBubble.innerHTML = '-' + damage;
            playerDamageBubble.style.display = 'block';
        }
        if (acceleration == -1) {
            damagePosition -= 0.2;
            playerDamageBubble.style.top = damagePosition + '%';
        }
        if (acceleration == -1 && position <= initialPosition) {
            clearInterval(monsterAnimationEvent);
            return 0;
        }
    }
}
function updatePlayerData() {
    localStorage.setItem('level', player.level);
    localStorage.setItem('hp', player.hp);
    localStorage.setItem('maxHp', player.maxHp);
    localStorage.setItem('exp', player.exp);
    localStorage.setItem('maxExp', player.maxExp);
    localStorage.setItem('atk', player.atk);
    localStorage.setItem('def', player.def);
    localStorage.setItem('agi', player.agi);
    localStorage.setItem('skillPoints', player.skillPoints);
    localStorage.setItem('deathCount', player.deathCount);

}

