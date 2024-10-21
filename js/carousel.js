const nextClothes = document.getElementById("next-clothes");
const prevClothes = document.getElementById("prev-clothes");
const nextFurniture = document.getElementById("next-furniture");
const prevFurniture = document.getElementById("prev-furniture");
const clothesContainer = document.querySelector(".clothes-container");
const furnitureContainer = document.querySelector(".furniture-container");

const index = {
  clothesFirst: 0,
  clothesLast: 4,
  furnitureFirst: 0,
  furnitureLast: 4,
};

function updateIndex(category) {
  const isClothes = category == "clothes";
  const currentContainer = isClothes ? clothesContainer : furnitureContainer;
  const currentData = isClothes ? data[1] : data[2];
  const firstIndex = isClothes ? index.clothesFirst : index.furnitureFirst;
  const lastIndex = isClothes ? index.clothesLast : index.furnitureLast;

  currentContainer.innerHTML = "";

  currentData.slice(firstIndex, lastIndex).forEach((item) => {
    const isHearted = localStorage.getItem(item.id) === "true";
    currentContainer.innerHTML += `
      <div class="card">
        <img src="images/${isClothes ? "category1" : "category2"}/${
      item.image
    }" alt="${item.name} img" class="item-img"/>
        <span class="product-content">
          <h3>${item.name}</h3>
          <button onclick='changeHeartIcon(this, "${item.id}", "${isClothes}")'>
            <img src="${
              isHearted ? "heart.png" : "unheart.png"
            }" alt="heart" class="heart-icon" />
          </button>
        </span>
        <h4>${item.price}</h4>
      </div>
    `;
  });

  const nextButton = isClothes ? nextClothes : nextFurniture;
  const prevButton = isClothes ? prevClothes : prevFurniture;

  nextButton.disabled = lastIndex >= currentData.length;
  prevButton.disabled = firstIndex <= 0;
}

function changeHeartIcon(button, itemId, isClothes) {
  const heartIcon = button.querySelector(".heart-icon");
  const newState = heartIcon.src.includes("unheart.png") ? "true" : "false";
  heartIcon.src = newState === "true" ? "heart.png" : "unheart.png";
  localStorage.setItem(itemId, newState);
}

// Event listeners for clothes buttons
nextClothes.addEventListener("click", () => {
  index.clothesFirst++;
  index.clothesLast++;
  updateIndex("clothes");
});

prevClothes.addEventListener("click", () => {
  index.clothesFirst--;
  index.clothesLast--;
  updateIndex("clothes");
});

// Event listeners for furniture buttons
nextFurniture.addEventListener("click", () => {
  index.furnitureFirst++;
  index.furnitureLast++;
  updateIndex("furniture");
});

prevFurniture.addEventListener("click", () => {
  index.furnitureFirst--;
  index.furnitureLast--;
  updateIndex("furniture");
});

// Initial calls
updateIndex("clothes");
updateIndex("furniture");
