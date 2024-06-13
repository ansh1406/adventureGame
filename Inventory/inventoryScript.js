let player = {
    name: localStorage.getItem('name'),
    hp: parseInt(localStorage.getItem('hp')),
    maxHp: parseInt(localStorage.getItem('maxHp')),
    exp: parseInt(localStorage.getItem('exp')),
    maxExp: parseInt(localStorage.getItem('maxExp')),
    atk: parseInt(localStorage.getItem('atk')),
    def: parseInt(localStorage.getItem('def')),
    agi: parseInt(localStorage.getItem('agi'))
}
let items = { empty: 0, healingHerb: 1, healingFruit: 2, healingSand: 3, healingGem: 4, lowGradeHealthPotion: 5, middleGradeHealthPotion: 6, highGradeHealthPotion: 7, supremeGradeHealthPotion: 8 };

let mainDiv = document.getElementById('main');
let mainMenuBtn = document.getElementById('mainMenuBtn');
let inventorySize = localStorage.getItem('inventorySize');

let confirmationBox = document.getElementById('confirmationBox');
let confirmationBoxTitle = document.getElementById('confirmationBoxTitle');
let confirmationBoxImg = document.getElementById('confirmationBoxImg');
let itemEffect = document.getElementById('itemEffect');
let cancellationBtn = document.getElementById('cancellationBtn');
let confirmationBtn = document.getElementById('confirmationBtn');
confirmationBox.style.display = 'none';
document.body.appendChild(confirmationBox);
cancellationBtn.addEventListener('click', closeCofirmationBox);

let completionBox = document.getElementById('completionBox');
let completionMessage = document.getElementById('completionMessage');
let closeCompletionBoxBtn = document.getElementById('closeCompletionBoxBtn');
completionBox.style.display = 'none';
closeCompletionBoxBtn.addEventListener('click', () => { location.href=location.href });

for (let i = 1; i <= inventorySize; i++) {
    let item = itemCode(localStorage.getItem('slot' + i));
    let itemImg = document.createElement('img');
    itemImg.src = '../Assets/items/' + item.name + '.png';
    itemImg.classList.add('itemImg');
    let itemDiv = document.createElement('div');
    itemDiv.appendChild(itemImg);
    itemDiv.classList.add('itemDiv');
    mainDiv.appendChild(itemDiv);
    if (item.type != 'none') {
        itemDiv.addEventListener('click', () => {
            confirmationBoxImg.src = itemImg.src;
            confirmationBoxTitle.innerHTML = item.name;
            itemEffect.innerHTML = 'Increases ' + item.type + ' by ' + item.effect;
            confirmationBox.style.display = 'flex';

            confirmationBtn.addEventListener('click', () => {
                let oldValue,affectedAttribute;
                switch (item.type) {
                    case 'Health':
                        affectedAttribute = player.hp;
                        break;
                }
                oldValue = affectedAttribute;
                affectedAttribute = Math.min(player.maxHp, affectedAttribute + item.effect);
                localStorage.setItem('hp', affectedAttribute);
                completionMessage.innerHTML = item.type + ' increased by ' + (affectedAttribute - oldValue) + ' ( ' + oldValue + '>>' + affectedAttribute + ' )';
                localStorage.setItem('slot' + i, 0);
                completionBox.style.display = 'flex';
            });

        })
    }
}

function itemCode(itemCode) {
    switch (parseInt(itemCode)) {
        case items.empty:
            return {
                name: 'empty', type: 'none', effect: 0
            };
            break;

        case items.healingHerb:
            return { name: 'Healing Herb', type: 'Health', effect: 10 };
            break;

        case items.healingFruit:
            return { name: 'Healing Fruit', type: 'Health', effect: 30 };
            break;

        case items.healingSand:
            return { name: 'Healing Sand', type: 'Health', effect: 200 };
            break;

        case items.healingGem:
            return { name: 'Healing Gem', type: 'Health', effect: 400 };
            break;

        case items.lowGradeHealthPotion:
            return { name: 'Low Grade Health Potion', type: 'Health', effect: 40 };
            break;

        case items.middleGradeHealthPotion:
            return { name: 'Middle Grade Health Potion', type: 'Health', effect: 100 };
            break;
            
        case items.highGradeHealthPotion:
            return { name: 'High Grade Health Potion', type: 'Health', effect: 500 };
            break;

        case items.supremeGradeHealthPotion:
            return { name: 'Supreme Grade Health Potion', type: 'Health', effect: 1000 };
            break;
    }
}
function closeCofirmationBox() {
    confirmationBox.style.display = 'none';
}

mainMenuBtn.addEventListener('click', () => {
    location.href = '../Main Menu/mainMenu.html';
});