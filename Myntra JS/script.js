let itemsContainerElements = document.querySelector(" items-container");
itemsContainerElements.innerHTML = `<div class="item-container">
<img class="item-image" src="1.jpg" alt="">
<div class="rating">
  4.5⭐|1.4k
</div>
<div class="company-name">Carlton London </div>
<div class="item-name">Rhodium-Plated CZ Floral Studs</div>
<div class="price">
  <span class="current-price">Rs 606</span>
  <span class="original-price">Rs 1045</span>
  <span class="discount">(42% Off)</span>
</div>
<button class="btn-add-bag">Add to Bag</button>
</div>
</div>`;
