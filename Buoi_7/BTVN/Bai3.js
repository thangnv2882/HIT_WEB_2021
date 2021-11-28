// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

//Mẫu
// const format = (words) => {
//   return words
//     .toLowerCase()
//     .match(/[a-zA-Z]+/g)  //Lọc bỏ số lấy chữ
//     .map((word)=>
//         word
//             .split("")  //Tách chữ thành các ký tự
//             .map((char, i) => (i === 0 ? char.toUpperCase() : char))  //Viết hoa chữ cái đầu
//             .join("") // khoảng cách giữa các ký tự là ""
//     )
//     .join(" "); // khoảng cách giữa các từ là " "
// }

let a, b, c;
function chuanHoa(chuoi) {
// - Không có khoảng trắng thừa ở đầu và cuối
  a = chuoi.trim();
  
// - Giữa các từ chỉ có 1 khoảng trắng
  a = a.replace(/\s+/g, ' ');

// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số
  for(let i = 0; i < a.length; i++) {
    if(!Number(a.charAt(i))) {
      b = a.charAt(i).toUpperCase();
      c = i+1;
      break;
    }
  }
  for(let i = c; i < a.length; i++) {
    if(!Number(a.charAt(i))) {
      if((a[i] != " " && a[i-1] == " ") || (a[i] != " " && Number(a[i-1]))) {      
        b = b + a.charAt(i).toUpperCase();
      }
      else {
        b = b + a.charAt(i).toLowerCase();
      }
    }
  }
  console.log(b);
}

const case1 = "    hOang Bui   ";
// -> Hoang Bui
chuanHoa(case1);

const case2 = " hOANG      BUI   hOang     ";
chuanHoa(case2);

const case3 = "23traN    dUOng23     ";
chuanHoa(case3);
