let mapBtn = document.getElementById("map");
let breweryBtn = document.getElementById("brewery");
let inventoryBtn = document.getElementById("inventory");
let statusBtn = document.getElementById("status");
let backBtn = document.getElementById("back");

mapBtn.addEventListener('click', () => {
    location.href = '../Map/map.html';
});

breweryBtn.addEventListener('click', () => {
    location.href = '../Brewery/brewery.html';
});

inventoryBtn.addEventListener('click', () => {
    location.href = '../Inventory/inventory.html';
});

statusBtn.addEventListener('click', () => {
    location.href = '../Status/status.html';
});

backBtn.addEventListener('click', () => {
    location.href = '../Start Screen/index.html';
});
