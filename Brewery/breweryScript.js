let items = { empty: 0, healingHerb: 1, healingFruit: 2, healingSand: 3, healingGem: 4, lowGradeHealthPotion: 5, middleGradeHealthPotion: 6, highGradeHealthPotion: 7, supremeGradeHealthPotion: 8 };

let inventory = [];
let inventorySize = localStorage.getItem('inventorySize');

let mainDiv = document.getElementById('main');
let mainMenuBtn = document.getElementById('mainMenuBtn');

let confirmationBox = document.getElementById('confirmationBox');
let confirmationBoxTitle = document.getElementById('confirmationBoxTitle');
let confirmationBoxImg = document.getElementById('confirmationBoxImg');
let itemEffect = document.getElementById('itemEffect');
let ingredients = document.getElementById('ingredients');
let cancellationBtn = document.getElementById('cancellationBtn');
let confirmationBtn = document.getElementById('confirmationBtn');
confirmationBox.style.display = 'none';
document.body.appendChild(confirmationBox);
cancellationBtn.addEventListener('click', closeConformationBox);

let completionBox = document.getElementById('completionBox');
let completionMessage = document.getElementById('completionMessage');
let closeCompletionBoxBtn = document.getElementById('closeCompletionBoxBtn');
completionBox.style.display = 'none';
closeCompletionBoxBtn.addEventListener('click', closeConmpletionBox);

inventory.push('Dummy');
for (let i = 1; i <= inventorySize; i++) {
    inventory.push(localStorage.getItem('slot' + i));
}

for (let i = 1; i <= 4; i++) {
    let potion = itemCode(potionIndex(i));
    let itemImg = document.createElement('img');
    itemImg.src = '../Assets/items/' + potion.name + '.png';
    itemImg.classList.add('itemImg');
    let itemDiv = document.createElement('div');
    itemDiv.appendChild(itemImg);
    itemDiv.classList.add('itemDiv');
    mainDiv.appendChild(itemDiv);
    if (potion.type != 'none') {
        itemDiv.addEventListener('click', () => {
            confirmationBoxImg.src = itemImg.src;
            confirmationBoxTitle.innerHTML = potion.name;
            itemEffect.innerHTML = 'Increases ' + potion.type + ' by ' + potion.effect;

            ingredients.innerHTML = 'Ingredients : ';
            switch (i) {
                case 1:
                    ingredients.innerHTML += '2 ' + itemCode(1).name;
                    break;

                case 2:
                    ingredients.innerHTML += '2 ' + itemCode(2).name;
                    break;

                case 3:
                    ingredients.innerHTML += '2 ' + itemCode(3).name;
                    break;

                case 4:
                    ingredients.innerHTML += '2 ' + itemCode(4).name;
                    break;
            }
            confirmationBox.style.display = 'flex';

            confirmationBtn.addEventListener('click', () => {
                brewPotion(i);
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

function potionIndex(potionCode) {
    switch (potionCode) {
        case 1:
            return 5;
        case 2:
            return 6;
        case 3:
            return 7;
        case 4:
            return 8;
    }
}
function closeConformationBox() {
    confirmationBox.style.display = 'none';
}

function closeConmpletionBox() {
    completionBox.style.display = 'none';
}

function brewPotion(potionCode) {
    let item1Index, item2Index;
    switch (potionCode) {
        case 1:
            item1Index = searchForItem(1);
            if (item1Index == -1) {
                outcome(0, potionIndex(1));
                return;
            }
            else {
                inventory[item1Index] = 0;
                localStorage.setItem('slot' + item1Index, 0);
            }

            item2Index = searchForItem(1);
            if (item2Index == -1) {
                inventory[item1Index] = 1;
                localStorage.setItem('slot' + item1Index, 1);
                outcome(0, potionIndex(1));
                return;
            }
            else {
                inventory[item2Index] = 0;
                localStorage.setItem('slot' + item2Index, 0);
            }

            outcome(1, potionIndex(1));
            return;
            break;

        case 2:
            item1Index = searchForItem(2);
            if (item1Index == -1) {
                outcome(0, potionIndex(2));
                return;
            }
            else {
                inventory[item1Index] = 0;
                localStorage.setItem('slot' + item1Index, 0);
            }

            item2Index = searchForItem(2);
            if (item2Index == -1) {
                inventory[item1Index] = 2;
                localStorage.setItem('slot' + item1Index, 2);
                outcome(0, potionIndex(2));
                return;
            }
            else {
                inventory[item2Index] = 0;
                localStorage.setItem('slot' + item2Index, 0);
            }

            outcome(1, potionIndex(2));
            return;
            break;

        case 3:
            item1Index = searchForItem(3);
            if (item1Index == -1) {
                outcome(0, potionIndex(3));
                return;
            }
            else {
                inventory[item1Index] = 0;
                localStorage.setItem('slot' + item1Index, 0);
            }

            item2Index = searchForItem(3);
            if (item2Index == -1) {
                inventory[item1Index] = 3;
                localStorage.setItem('slot' + item1Index, 3);
                outcome(0, potionIndex(3));
                return;
            }
            else {
                inventory[item2Index] = 0;
                localStorage.setItem('slot' + item2Index, 0);
            }

            outcome(1, potionIndex(3));
            return;
            break;

        case 4:
            item1Index = searchForItem(4);
            if (item1Index == -1) {
                outcome(0, potionIndex(4));
                return;
            }
            else {
                inventory[item1Index] = 0;
                localStorage.setItem('slot' + item1Index, 0);
            }

            item2Index = searchForItem(4);
            if (item2Index == -1) {
                inventory[item1Index] = 4;
                localStorage.setItem('slot' + item1Index, 4);
                outcome(0, potionIndex(4));
                return;
            }
            else {
                inventory[item2Index] = 0;
                localStorage.setItem('slot' + item2Index, 0);
            }

            outcome(1, potionIndex(4));
            return;
            break;



    }
}

function searchForItem(itemCode) {
    for (let i = 1; i <= inventorySize; i++) {
        if (inventory[i] == itemCode)
            return i;
    }
    return -1;
}

function storeItem(itemCode) {
    for (let i = 1; i <= inventorySize; i++) {
        if (inventory[i] == 0) {
            inventory[i] = itemCode;
            localStorage.setItem('slot' + i, itemCode);
            return;
        }
    }
}

function outcome(successCode, item) {
    if (successCode === 1) {
        storeItem(item);
        completionMessage.innerHTML = 'Obtained 1 ' + itemCode(item).name;
    }
    else {
        completionMessage.innerHTML = 'Enough ingredients not found in the inventory';
    }
    completionBox.style.display = 'flex';
}

mainMenuBtn.addEventListener('click', () => {
    location.href = '../Main Menu/mainMenu.html';
});
