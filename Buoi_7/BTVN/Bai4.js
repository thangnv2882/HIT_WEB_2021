// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
function extractEmails(text) {
  // return text.match(/(m[a-z]+@[a-z]+.com)|(t[a-z]+@[a-z]+.com)/g);
  // return text.match(/(m[\w]+@[\w]+.com)|(t[\w]+@[\w]+.com)/g);
  return text.match(/[\w]{9}@[\w]+\.com/g);
}
console.log(extractEmails(textEmail));

// - Lấy ra tất cả sdt trong đoạn text sau
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";
function extractPhoneNumber(text ) {
  return text.match(/[0-9]{10}/g)
}
console.log(extractPhoneNumber(textPhone));