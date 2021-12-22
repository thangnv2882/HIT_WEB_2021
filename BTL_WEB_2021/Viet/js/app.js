const $1 = document.querySelector.bind(document);
const $2 = document.querySelectorAll.bind(document);

const packagesCards = $2('.packages-cards')
const tabCards = $1('.tabs-card')
const changePrice = $1('.progress-value')
const priceValue = $1('.price-value')
const priceTrackValue = $1('.progress-price-track')

const tabCardItems = $2('.tab-card-item')

const app = {
  cards: JSON.parse(localStorage.getItem(CARDS_STORAGE_KEY) || '[]'),

  html([first, ...string], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, string.shift())
        , [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')       
  },

  renderCards() {
    packagesCards.forEach((packagesCard, packagesCardIndex) => {
      packagesCard.innerHTML = app.html`
        ${this.cards.map((card, cardIndex)=> {    
          if(packagesCardIndex == 0 || (packagesCardIndex >= 1 && cardIndex < 3))
            return app.html`
            <div class="card-item col-xl-4 col-lg-12 col-md-12 col-12">
              <div class="img-card">
              ${card.sale && app.html`
                <p class="sale br-30">${card.sale}</p>              
              `}
                <img class="img-fluid" src="${card.img}" alt="">
                <div class="brand" style="background: ${card.colorBrand}">
                  <div class="position-relative w-100 h-100">
                    <img class="" src="${card.imgIcon}" alt="" class="card-icon">
                  </div>
                </div>
              </div>
              <div class="container-card">        
                <div class="title-card">
                  <h2 class="place">${card.place}</h2>
                  <div class="located flex-center mb-20">
                    <img src="img/icon-pin-grey.png" alt="icon-locate">
                    <p>${card.located}</p>
                  </div>
                </div>  
                <div class="contain-card flex-center">
                  <div class="introduce">
                    <p class="text-uppercase filed-1">${card.filed1}</p>
                    <div class="flex-center">
                      <p class="text-uppercase filed-2">${card.filed2}</p>
                      <p class="add-1 br-30" style="background: ${card.colorBtn}">+1</p>
                    </div>
                  </div>
                  ${card.priceOld && app.html`
                    <div class="priceSaled d-flex">
                      <p class="price-old"><del>${card.priceOld}</del></p>
                      <div class="price">${card.price}</div>
                    </div>
                  `}
                  ${!card.priceOld && app.html`
                    <div class="price">${card.price}</div>
                  `}
                </div>  
                
                <p class="card-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur ante. Donec dapibus dictum scelerisque.
                </p>
                
                <button class="btn-detail br-30 text-uppercase" style="background-color: ${card.colorBtn}">detail</button>

              </div>
            </div>   
            `           
        })}    
      `
    })
    
  },

  renderTabCards() {
    tabCards.innerHTML = app.html`
      ${this.cards.map((card, index) => {
        return app.html`
        
        `
      })}
    `
  },

  handle: function() {
    // When click card item
    const cardItems = $2('.card-item')
    const tabCardItems = $1('.tab-card-item')
    cardItems.forEach((cardItem, index) => {
      cardItem.onclick = function() {
        // const tabCard = tabCardItems[index]
        $1('.container-package').classList.add('d-none')
        tabCardItems.classList.add('active-tab')
        // tabCard.classList.add('active-tab')
        
      }
    })

    // When change price
    changePrice.oninput = function(e) {
      priceValue.innerText = changePrice.value + '$'
      priceTrackValue.style.width =  $1('.progress-price').offsetWidth * changePrice.value / 10000 + 'px'
    }
  },

  render: function() {
    this.renderCards();
    // this.renderTabCards();
  },

  start: function() {
    this.render();
    this.handle();
  },
}

app.start();

$( "#datepicker" ).on( "click", function() {
  $( "#datepicker" ).datepicker( "show" );
});

$( "#datepicker" ).datepicker({
  minDate: 0,
  dateFormat: "mm-dd-yy",
  monthNames: ["January","February","March","April","May","June", "July","August","September","October","November","December"],
  monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
  dayNamesMin: ["SU","MO","TU","WE","TH","FR", "SA"],
  nextText: "NEXT",
  prevText: "PREV",
  onClose: function() {  },
  buttonText: "Choose",
  showButtonPanel: false,

});

$('#button').button(
  {
    icons: {primary: 'ui-icon', secondary: null}
  }
);


// Hidden icon datepicker

