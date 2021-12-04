// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const format = (words) => {
  return words
    .toLowerCase()
    .match(/[a-zA-Z]+/g)  //Lọc bỏ số lấy chữ
    .map((word)=>
        word
            .split("")  //Tách chữ thành các ký tự
            .map((char, i) => (i === 0 ? char.toUpperCase() : char))  //Viết hoa chữ cái đầu
            .join("") // khoảng cách giữa các ký tự là ""
    )
    .join(" "); // khoảng cách giữa các từ là " "
}

const case1 = "    hOang Bui   ";
// -> Hoang Bui
console.log(format(case1));

const case2 = " hOANG      BUI   hOang     ";
console.log(format(case2));

const case3 = "23traN    dUOng23     ";
console.log(format(case3));

