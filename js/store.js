let firstIndex = 0;
let lastIndex = 4;
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const cardContainer = document.querySelector(".card-container");

function updateIndex() {
  cardContainer.innerHTML = "";
  data[1].slice(firstIndex, lastIndex).forEach((item) => {
    const isHearted = localStorage.getItem(item.id) === "true";
    cardContainer.innerHTML += `
      <div class="card">
        <img src="images/category1/${item.image}" alt="${item.name} img" />
        <span class="product-content">
          <h3>${item.name}</h3>
          <button onclick='changeHeartIcon(this, "${item.id}")'>
            <img src="${
              isHearted ? "heart.png" : "unheart.png"
            }" alt="heart" class="heart-icon" />
          </button>
        </span>
        <h4>${item.price}</h4>
      </div>
    `;
  });

  if (lastIndex >= data[2].length) {
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

function changeHeartIcon(button, itemId) {
  const heartIcon = button.querySelector(".heart-icon");

  if (heartIcon.src.includes("unheart.png")) {
    heartIcon.src = "heart.png";
    localStorage.setItem(itemId, "true");
  } else {
    heartIcon.src = "unheart.png";
    localStorage.setItem(itemId, "false");
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

/**============================================= */

let firstIndexFurniture = 0;
let lastIndexFurniture = 4;
const nextFurniture = document.getElementById("next-furniture");
const prevFurniture = document.getElementById("prev-furniture");
let furnitureContainer = document.querySelector(".furniture-container");

function updateIndexFurniture() {
  furnitureContainer.innerHTML = "";
  data[2].slice(firstIndexFurniture, lastIndexFurniture).forEach((item) => {
    const isHearted = localStorage.getItem(item.id) === "true";
    furnitureContainer.innerHTML += `
      <div class="card">
        <img src="images/category2/${item.image}" alt="${item.name} img" />
        <span class="product-content">
          <h3>${item.name}</h3>
          <button onclick='changeHeartIconFurniture(this, "${item.id}")'>
            <img src="${
              isHearted ? "heart.png" : "unheart.png"
            }" alt="heart" class="heart-icon" />
          </button>
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

function changeHeartIconFurniture(button, itemId) {
  const heartIcon = button.querySelector(".heart-icon");

  if (heartIcon.src.includes("unheart.png")) {
    heartIcon.src = "heart.png";
    localStorage.setItem(itemId, "true");
  } else {
    heartIcon.src = "unheart.png";
    localStorage.setItem(itemId, "false");
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

let spanContainer = document.querySelector(".span-container");
spanContainer.innerHTML = `<span>
<h1>Product</h1>
<h2>Features</h2>
<h2>Pricing</h2>
</span>

<span>
<h1>Resources</h1>
<h2>Blog</h2>
<h2>User Guides</h2>
<h2>Webinars</h2></span
><span
><h1>Company</h1>
<h2>About Us</h2>
<h2>Contact Us</h2></span
><span
><h1>Planning & Pricing</h1>
<h2>Personal</h2>
<h2>Start up</h2>
<h2>Organization</h2></span
>`;
