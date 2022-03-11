window.onload = async () => {
  let res = await (
    await fetch("https://static.pipezero.com/covid/data.json")
  ).json();

  let {locations} = res;
  let html = `<tr>
                <td>Thành phố</td>
                <td>Tổng số ca</td>
                <td>Số ca mắc hôm nay</td>
                <td>Số ca tử vong</td>
              </tr>`;
  locations.forEach(item => {
    console.log(item);
    html += `<tr>
              <td>${item.name}</td>
              <td>${item.cases}</td>
              <td>${item.casesToday}</td>
              <td>${item.death}</td>
            </tr>`
  });

  document.getElementById("table").innerHTML = html;
}