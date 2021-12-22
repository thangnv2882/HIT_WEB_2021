const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const containerCards = $('.shop-cards');

const shop = {
  cards: JSON.parse(localStorage.getItem(CARDS_SHOP_STORAGE_KEY) || '[]'),

  html([first, ...string], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, string.shift())
        , [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')       
  },

  renderCards() {
    containerCards.innerHTML = shop.html`
      ${this.cards.map((card, index) => {
        return shop.html`
          <div class="card-item col-xl-3 col-lg-3 col-md-6 col-12">
            ${card.sale && shop.html`
              <div class="sale">sale</div>
            `}
            <div class="img-card">
              <img class="img-fluid" src="${card.img}" alt="">
            </div>
            <div class="card-content">
              <p class="hotel-name">${card.name}</p>
              <div class="vote d-flex">
                <p>☆</p><p>☆</p><p>☆</p><p>☆</p><p>☆</p>
              </div>
              <div class="price d-flex">
                ${card.priceOld && shop.html`            
                  <p class="price-old"><del>${card.priceOld}</del></p>
                  <span class="ps-1 pe-1">-</span>
                  <p class="current-price">
                    ${card.currentPrice}
                  </p>
                `}
                ${!card.priceOld && shop.html`
                  <p class="current-price">
                    ${card.currentPrice}
                  </p>
                `}
                
              </div>
              <button class="btn-chose">${card.btnText}</button>
            </div>
          </div>
        `
      })}
    `
  },

  render: function() {
    this.renderCards();
  },

  start: function() {
    this.render();
  },

}

shop.start();