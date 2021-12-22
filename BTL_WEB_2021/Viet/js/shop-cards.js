const shopCards = [
  {
    img: "img/shop-card/card1.jpg",
    name: "Bora Bora",
    rate: "\2605\2605\2605\2605\2605",
    currentPrice: "$1,000.00 - $2,000.00",
    btnText: "select options",
  },

  {
    img: "img/shop-card/card2.jpg",
    name: "Hawaii Coast",
    rate: "\2605\2605\2605\2605\2605",
    priceOld: "$1,000.00",
    currentPrice: "$800.00",
    sale: "sale",
    btnText: "select options",
  },

  {
    img: "img/shop-card/card3.jpg",
    name: "Jamaica",
    rate: "\2605\2605\2605\2605\2605",
    currentPrice: "$1,000.00 - $2,000.00",
    btnText: "select options",
  },
  {
    img: "img/shop-card/card4.jpg",
    name: "Ko Samui",
    rate: "\2605\2605\2605\2605\2605",
    priceOld: "$1,200.00",
    currentPrice: "$999.00",
    sale: "sale",
    btnText: "select options",
  },

  {
    img: "img/shop-card/card5.jpg",
    name: "Le Seychelles",
    rate: "\2605\2605\2605\2605\2605",
    currentPrice: "$1,000.00 - $2,000.00",
    btnText: "select options",
  },

  {
    img: "img/shop-card/card6.jpg",
    name: "Maldives",
    rate: "\2605\2605\2605\2605\2605",
    priceOld: "$900.00",
    currentPrice: "$500.00",
    sale: "sale",
    btnText: "select options",
  },

  {
    img: "img/shop-card/card7.jpg",
    name: "Phuket",
    rate: "\2605\2605\2605\2605\2605",
    currentPrice: "$1,000.00 - $2,000.00",
    btnText: "select options",
  },

  {
    img: "img/shop-card/card8.jpg",
    name: "Bora Bora",
    rate: "\2605\2605\2605\2605\2605",
    currentPrice: "$1,600.00",
    btnText: "select options",
  },

];

const CARDS_SHOP_STORAGE_KEY = "SHOP_CARDS"

localStorage.setItem(CARDS_SHOP_STORAGE_KEY, JSON.stringify(shopCards));

