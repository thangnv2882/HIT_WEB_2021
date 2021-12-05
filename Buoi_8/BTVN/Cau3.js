// Câu3: Sử dụng hàm constructor để  khai báo một đối tượng post 
// thay vì phải khai báo như dưới đây
// const post = {
//  title: "ahihi",
//  body: "anh Hoàng đzzz",
//  author: "abc",
//  views: 100,
//  comments: [
//    {author: 'anh Huân đzzz', body: "lewlew"},
//    {author: 'anh Huân đzzz', body: "lewlew"},
//  ],
//  isLive: true
// }

function Post(title, body, author, comments, views, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.isLive = isLive;
}
const post = new Post("ahihi", "anh Hoàng đzzz", "abc",[{author: 'anh Huân đzzz', body: "lewlew"},{author: 'anh Huân đzzz', body: "lewlew"}], 100, true);
console.log(post);