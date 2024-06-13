let items = { empty: 0, healingHerb: 1, healingFruit: 2, healingSand: 3, healingGem: 4, lowGradeHealthPotion: 5, middleGradeHealthPotion: 6, highGradeHealthPotion: 7, supremeGradeHealthPotion: 8 };
let inventorySize = localStorage.getItem('inventorySize');
let areaItems = [];
let backgroundImage = 'url("../Assets/maps/';
switch (parseInt(localStorage.getItem('currentArea'))) {
    case 1:
        backgroundImage = backgroundImage + 'forest';
        areaItems = [items.healingHerb];
        break;

    case 2:
        backgroundImage = backgroundImage + 'swamp';
        areaItems = [items.healingFruit];
        break;

    case 3:
        backgroundImage = backgroundImage + 'river';
        areaItems = [items.healingSand];
        break;

    case 4:
        backgroundImage = backgroundImage + 'mountain';
        areaItems = [items.healingGem];
        break;

    case 5:
        backgroundImage = backgroundImage + 'peak';
        areaItems = [items.healingGem];
        break;

    case 6:
        backgroundImage = backgroundImage + 'freeZone';
        areaItems = [items.healingHerb, items.healingFruit, items.healingSand, items.healingGem];
        break;
}
backgroundImage = backgroundImage + '.jpg")';
document.body.style.backgroundImage = backgroundImage;

let foundItemImg = document.getElementById('foundItemImg');
let itemGlow = document.getElementById('itemGlow');
let backBtn = document.getElementById('backBtn');

let confirmationBox = document.getElementById('confirmationBox');
let confirmationBoxTitle = document.getElementById('confirmationBoxTitle');
let confirmationBoxImg = document.getElementById('confirmationBoxImg');
let itemEffect = document.getElementById('itemEffect');
let cancellationBtn = document.getElementById('cancellationBtn');
let confirmationBtn = document.getElementById('confirmationBtn');
confirmationBox.style.display = 'none';
document.body.appendChild(confirmationBox);

let completionBox = document.getElementById('completionBox');
let completionMessage = document.getElementById('completionMessage');
let closeCompletionBoxBtn = document.getElementById('closeCompletionBoxBtn');
completionBox.style.display = 'none';
closeCompletionBoxBtn.addEventListener('click', () => { location.href = '../Map/map.html' });

let bandWidth = 2520 / areaItems.length;
let random = parseInt(Math.random()*2520);
let foundItem,foundItemCode;
for (let i = 0; i < areaItems.length; i++) {
    if (random > i * bandWidth && random <= (i + 1) * bandWidth) {
        foundItemCode = areaItems[i]
        foundItem = itemCode(foundItemCode);
        break;
    }
}
console.log(foundItem);
foundItemImg.src = '../Assets/items/' + foundItem.name + '.png';

foundItemImg.addEventListener('click', () => {
    confirmationBoxImg.src = foundItemImg.src;
    confirmationBoxTitle.innerHTML = foundItem.name;
    itemEffect.innerHTML = 'Increases ' + foundItem.type + ' by ' + foundItem.effect;
    confirmationBox.style.display = 'flex';

    confirmationBtn.addEventListener('click', () => {
        let successCode = storeItem(foundItemCode);
        if (successCode == 0)
            completionMessage.innerHTML = "Inventory is already full.";
        if (successCode == 1)
            completionMessage.innerHTML = foundItem.name + " has been stored into your inventory.";

        completionBox.style.display = 'flex';
    });
});
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

function storeItem(itemCode) {
    for (let i = 1; i <= inventorySize; i++) {
        if (parseInt(localStorage.getItem('slot'+i)) == 0) {
            localStorage.setItem('slot' + i, itemCode);
            return 1;
        }
    }
    return 0;
}

cancellationBtn.addEventListener('click', () => {
    completionMessage.innerHTML = "You have ignored " + foundItem.name;
    completionBox.style.display = 'flex'
});
setInterval(changeGlowOpacity, 100);
let opacity = 0;
function changeGlowOpacity() {
    opacity = (opacity + 1);
    itemGlow.style.opacity = opacity/10;
    if (opacity > 8) opacity = 0;
}

backBtn.addEventListener('click', () => {
    completionMessage.innerHTML = "You have ignored " + foundItem.name;
    completionBox.style.display = 'flex'
});