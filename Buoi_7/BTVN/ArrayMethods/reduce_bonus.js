// Bài 1: Tính tổng tiền thanh toán của giỏ hàng sau
const cart = [
  {
    title: "DẾ MÈN PHIÊU LƯU KÝ",
    price: 50000,
    quantity: 2,
  },
  {
    title: "KIM ĐỒNG",
    price: 40000,
    quantity: 7,
  },
  {
    title: "NGỌN LỬA ĐÊM BA MƯƠI",
    price: 21000,
    quantity: 4,
  },
  {
    title: "CÔ BÉ GANH TỊ",
    price: 27500,
    quantity: 5,
  },
];
const totalPrice = (carts) => {
  return carts.reduce((total, {price}) => total+price, 0)
}
console.log(totalPrice(cart));

// Bài 2: Nhóm các cầu thủ theo quốc gia
const team = [
  { name: "Công Phượng", country: "Việt Nam" },
  { name: "Ronaldo", country: "Portugal" },
  { name: "Quang Hải", country: "Việt Nam" },
  { name: "Messi", country: "Argentina" },
  { name: "Nani", country: "Portugal" },
];

const filterCountry = (teams) => {
  return teams.reduce((acc, cur) => {
    if(!acc[cur.country]) {
      acc[cur.country] = [];
    }
    acc[cur.country].push(cur);
    return acc;
  }, {})
}
console.log(filterCountry(team));

// kết quả:
// {
//   'Việt Nam': [
//     { name: 'Công Phượng', country: 'Việt Nam' },
//     { name: 'Quang Hải', country: 'Việt Nam' }
//   ],
//   Portugal: [
//     { name: 'Ronaldo', country: 'Portugal' },
//     { name: 'Nani', country: 'Portugal' }
//   ],
//   Argentina: [ { name: 'Messi', country: 'Argentina' } ]
// }

// Bài 3: Gom các object của posts thành mảng posts
const topics = [
  {
    topic: "ReactJS",
    posts: [
      { postID: "id1", title: "title1" },
      { postID: "id2", title: "title2" },
    ],
  },
  {
    topic: "Vue.js",
    posts: [
      { postID: "id3", title: "title3" },
      { postID: "id4", title: "title4" },
    ],
  },
];

// kết quả:
// [
//   { postID: 'id1', title: 'title1' },
//   { postID: 'id2', title: 'title2' },
//   { postID: 'id3', title: 'title3' },
//   { postID: 'id4', title: 'title4' }
// ]

const post = (topic) => {
  return topic.reduce((acc, {posts}) => {
    posts.map((ele) => {
      acc.push(ele);
    })
    return acc;
  }, [])
}
console.log(post(topics));

// Bài 4: Tính tổng và tích của mảng
const arr = [49, 30, 19, 2, 29];
const sum = (arr) => {
  return arr.reduce((acc, cur) => acc+cur, 0)
}
const mul = (arr) => {
  return arr.reduce((acc, cur) => acc*cur, 1)
}
console.log(`Tổng: ${sum(arr)}, Tích: ${mul(arr)}` );

// Bài 5: Tìm phần tử khác nhau giữa 2 mảng
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];

// kết quả: [1, 4, 5]

const duplicate = (arr1, arr2) => {
  return arr1.reduce((acc, cur) => {
    return arr2.includes(cur) ? acc : [... acc, cur] 
  }, [])
}
console.log(duplicate(arr1, arr2));


// Bài 7: Đến số lần xuất hiện các phần tử trong mảng
const arrCount = [1, 2, 3, 4, 5, 2, 3, 4, 2, 2, 7, 8, 8];
const cntNum = (arr) => {
  return arr.reduce((acc, cur) => {
    if(!acc[cur]) {
      acc[cur] = 0;
    }
    acc[cur]++;
    return acc;
  }, {})
}
console.log(cntNum(arrCount));







