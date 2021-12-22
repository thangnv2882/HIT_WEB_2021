const packageCards = [
  {
    img: "img/cards/card1-package.jpg",
    colorBrand: "linear-gradient(to right, #ffd205 0%, #ff9b05 100%)",
    imgIcon: "img/cards-icon/card-icon1.png",
    place: "Berlin",
    located: "Europe",
    filed1: "cultural",
    filed2: "relax",
    price: "700$",
    colorBtn: "#ffd205",
  },

  {
    img: "img/cards/card2-package.jpg",
    sale: "sale",
    colorBrand: "linear-gradient(to right, #f76570 0%, #f78d65 100%)",
    imgIcon: "img/cards-icon/card-icon2.png",
    place: "Hong Kong",
    located: "Asia",
    filed1: "history",
    filed2: "cultural",
    priceOld: "1000",
    price: "500$",
    colorBtn: "#f76570",
  },

  {
    img: "img/cards/card3-package.jpg",
    colorBrand: "linear-gradient(to right, #ba71da 0%, #da717b 100%)",
    imgIcon: "img/cards-icon/card-icon1.png",
    place: "San Francisco",
    located: "Oceania",
    filed1: "sport",
    filed2: "relax",
    price: "400$",
    colorBtn: "#ba71da",
  },

  {
    img: "img/cards/card4-package.jpg",
    colorBrand: "linear-gradient(to right, #14b9d5 0%, #14d5b1 100%)",
    imgIcon: "img/cards-icon/card-icon4.png",
    place: "Phuket",
    located: "Thailandia",
    filed1: "relax",
    filed2: "cultural",
    price: "1200$",
    colorBtn: "#14b9d5",
  },

  {
    img: "img/cards/card5-package.jpg",
    colorBrand: "linear-gradient(to right, #f3a46b 0%, #f3c96b 100%)",
    imgIcon: "img/cards-icon/card-icon5.png",
    place: "Amsterdam",
    located: "Netherlands",
    filed1: "history",
    filed2: "sport",
    price: "1500$",
    colorBtn: "#f3a46b",
  },

  {
    img: "img/cards/card6-package.jpg",
    sale: "sale", 
    colorBrand: "linear-gradient(to right, #1bbc9b 0%, #1bbc63 100%)",
    imgIcon: "img/cards-icon/card-icon6.png",
    place: "Tuscany",
    located: "Italy",
    filed1: "sport",
    filed2: "relax",
    priceOld: "950",
    price: "730$",
    colorBtn: "#1bbc9b",
  },

];

const CARDS_STORAGE_KEY = 'PAK_CARDS';

localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(packageCards));

