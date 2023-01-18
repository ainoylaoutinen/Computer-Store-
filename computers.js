let laptops = [];
const laptopElement = document.getElementById("laptops");

 //"function for section 3.1 Laptop selction"
    fetch("https://hickory-quilled-actress.glitch.me/computers")
    .then(response => response.json())
    .then(data => {
        laptops.push(data)
    })
    .then((laptops) => addLaptopToSelection(laptops))

const addLaptopData = (laptops) => {
    laptops.forEach(laptop => addLaptopToSelection(laptop));
}

const addLaptopToSelection = (laptop) => {
    const laptopElement = document.createElement("option");
    laptopElement.value = laptop.id;
    laptopElement.appendChild(document.createTextNode(laptop.title));
    laptopElement.appendChild(laptopElement);
}