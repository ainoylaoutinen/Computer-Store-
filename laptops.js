let laptops = []; //Array for all laptops
let specs = []; //Array for laptop information
const specsElement = document.getElementById("specs");
const laptopElement = document.getElementById("laptops");
const currentLaptopTitle = document.getElementById("chosenLaptopTitle");
const currentLaptopDescription = document.getElementById("chosenLaptopDescription");
const currentLaptopPrice = document.getElementById("chosenLaptopPrice");
const currentLaptopPic = document.getElementById("chosenLaptopPic");
let selectedLaptop; //The laptop that has been selected from the dropdown menu

//functionality for section 3 Laptops - 3.1 Laptop selection
fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => laptops = data)
    .then(() => addLaptopData())

const addLaptopData = () => {
    laptops.forEach(laptop => addLaptopToSelection(laptop));
}

const addLaptopToSelection = (laptop) => {
    const opt = document.createElement('option');
    opt.value = laptop.id;
    opt.innerHTML = laptop.title;
    laptopElement.appendChild(opt);
}

const handleChangeOfLaptop = e => {
    selectedLaptop = laptops[e.target.selectedIndex];
    specsElement.innerText = selectedLaptop.specs;
    addSpecs(selectedLaptop);
}

//functionality for section 3 Laptops - 3.2 Info Section
const addSpecs = e => {
    currentLaptopTitle.innerText = selectedLaptop.title;
    currentLaptopDescription.innerText = selectedLaptop.description;
    currentLaptopPrice.innerText = selectedLaptop.price;
    currentLaptopPic.innerText = selectedLaptop.image;
    addImage();
}

const addImage = () => {
    document.getElementById("chosenLaptopPic").src = ("https://hickory-quilled-actress.glitch.me/" + currentLaptopPic.textContent);
}

const buyLaptop = () => {
    let laptopPrice = Number(selectedLaptop.price)
    if (balanceNow >= laptopPrice) {
        alert("You have a new laptop!")
        balanceNow = balanceNow - laptopPrice;
        document.getElementById("currentBalance").innerHTML = balanceNow;
    } else {
        alert("You do not have the funds to buy this laptop")
    }
}

laptopElement.addEventListener("change", handleChangeOfLaptop);

