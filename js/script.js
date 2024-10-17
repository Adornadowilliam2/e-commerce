const data = [
  [
    {
      image: "hat.png",
      name: "hat",
    },
    {
      image: "handbag.png",
      name: "handbag",
    },
    {
      image: "make-up.png",
      name: "make up",
    },
    {
      image: "umbrella.png",
      name: "umbrella",
    },
    {
      image: "wallet.png",
      name: "wallet",
    },
    {
      image: "wrist-watch.png",
      name: "wrist watch",
    },
  ],
  [
    {
      image: "hoodie.jpeg",
      name: "hoodie",
      price: "₱1,500",
    },
    {
      image: "blouse.jpeg",
      name: "blouse",
      price: "₱800",
    },
    {
      image: "poloshirt.jpeg",
      name: "polo shirt",
      price: "₱800",
    },
    {
      image: "sweater.jpeg",
      name: "sweater",
      price: "₱1,000",
    },
    {
      image: "tshirt.jpeg",
      name: "tshirt",
      price: "₱300",
    },
    {
      image: "tanktop.jpeg",
      name: "tank top",
      price: "₱400",
    },
    {
      image: "croptop.jpeg",
      name: "crop top",
      price: "₱500",
    },
  ],
  [
    {
      image: "bed frame.png",
      name: "Bed Frame",
      price: "₱7,500",
    },
    {
      image: "bookshelves.png",
      name: "Bookshelves",
      price: "₱3,000",
    },
    {
      image: "coffee table.png",
      name: "Coffee Table",
      price: "₱2,500",
    },
    {
      image: "dresser table.png",
      name: "Dresser Table",
      price: "₱4,500",
    },
    {
      image: "occasional chair.png",
      name: "Occasional Chair",
      price: "₱1,800",
    },
    {
      image: "patio table.png",
      name: "Patio Table",
      price: "₱3,500",
    },
    {
      image: "storage trunk.png",
      name: "Storage Trunk",
      price: "₱2,000",
    },
    {
      image: "wardrobe.png",
      name: "Wardrobe",
      price: "₱8,000",
    },
  ],
];

let i = 1;
data.forEach((index) => {
  index.forEach((character) => {
    character.id = i;
    i++;
  });
});

let categoryChoices = document.querySelector(".category-choices");
data[0].map(
  (item) =>
    (categoryChoices.innerHTML += `<div class="category-choices-child card" title="${
      item.name[0].toUpperCase() + item.name.slice(1)
    }">
    <img src="images/choices/${item.image}" alt="Handbag" />
  </div>`)
);

function setSearch(event) {
  const query = event.target.value.toLowerCase();
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = ""; 

  if (query) {
    const filteredItems = data
      .flat()
      .filter((item) => item.name.toLowerCase().includes(query));

    filteredItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.name;
      li.style.borderBottom = "1px solid black";
      li.style.cursor = "pointer";
      resultsContainer.appendChild(li);
    });
  }
}

function subscribe() {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value;

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailPattern.test(email)) {
    alert(`Thank you for subscribing with: ${email}`);
    
    
    emailInput.value = ""; 
  } else {
    alert("Please enter a valid email address.");
  }
}
