const cardContainer = document.querySelector(".card-container");

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
  index.id = i;
  i++;
});

let categoryChoices = document.querySelector(".category-choices");
data[0].map(
  (item) =>
    (categoryChoices.innerHTML += `<div class="category-choices-child card" title="${
      item.name[0].toUpperCase() + item.name.slice(1)
    }">
    <img src="choices/${item.image}" alt="Handbag" />
  </div>`)
);

let firstIndex = 0;
let lastIndex = 4;
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function updateIndex() {
  cardContainer.innerHTML = "";
  data[1].slice(firstIndex, lastIndex).forEach((item) => {
    cardContainer.innerHTML += `
      <div class="card">
        <img src="category1/${item.image}" alt="${item.name} img" />
        <span class="product-content">
          <h3>${item.name}</h3>
          <img src="heart.png" alt="unheart" style="margin-right: 0.5rem"/>
        </span>
        <h4>${item.price}</h4>
      </div>
    `;
  });

  if (lastIndex >= data[1].length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  if (firstIndex <= 0) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }
}

updateIndex();

next.addEventListener("click", () => {
  firstIndex += 1;
  lastIndex += 1;
  updateIndex();
});

prev.addEventListener("click", () => {
  firstIndex -= 1;
  lastIndex -= 1;
  updateIndex();
});
let firstIndexFurniture = 0;
let lastIndexFurniture = 4;
const nextFurniture = document.getElementById("next-furniture");
const prevFurniture = document.getElementById("prev-furniture");
let furnitureContainer = document.querySelector(".furniture-container");
function updateIndexFurniture() {
  furnitureContainer.innerHTML = "";
  data[2].slice(firstIndexFurniture, lastIndexFurniture).forEach((item) => {
    furnitureContainer.innerHTML += `
      <div class="card">
        <img src="category2/${item.image}" alt="${item.name} img" />
        <span class="product-content">
          <h3>${item.name}</h3>
          <img src="heart.png" alt="unheart" style="margin-right: 0.5rem"/>
        </span>
        <h4>${item.price}</h4>
      </div>
    `;
  });

  if (lastIndexFurniture >= data[2].length) {
    nextFurniture.disabled = true;
  } else {
    nextFurniture.disabled = false;
  }

  if (firstIndexFurniture <= 0) {
    prevFurniture.disabled = true;
  } else {
    prevFurniture.disabled = false;
  }
}

updateIndexFurniture();

nextFurniture.addEventListener("click", () => {
  firstIndexFurniture += 1;
  lastIndexFurniture += 1;
  updateIndexFurniture();
});

prevFurniture.addEventListener("click", () => {
  firstIndexFurniture -= 1;
  lastIndexFurniture -= 1;
  updateIndexFurniture();
});
