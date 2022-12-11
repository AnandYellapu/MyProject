function coins() {
  let coin = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false");
  coin.then((res) => res.json())
    .then((data) => {
      console.log(data);
      result = data;

   // Add Data to the result array using Push
  result.push({
    id: "coti",
    name: "COTI",
    symbol: "coti",
    current_price: 0.071456,
    image: "https://assets.coingecko.com/coins/images/2962/large/Coti.png?1559653863"
  });

  result.push({
    id: "wazirx",
    name: "Wazirx",
    symbol: "wrx",
    current_price: 0.169623,
    image: "https://assets.coingecko.com/coins/images/10547/large/WazirX.png?1580834330"
  });

  // Remove the Data from the list using filter
      result = result.filter((coin) => coin.id !== "");
 showCoin(result);
    });
}
coins();


function showCoin(data1) {
  const coinDetails = data1.map((data1) => {
  //  console.log(index)
    return `
      <div class="card text-center crd shadow  mt-8 mb-5" style="width: 30rem;">
        <h5 class="card-title " id="coin" style="color:var(--black); font-size:20px; letter-spacing:1px;">${data1.name}</h5>
         <div class="far fa-star" style="margin-right:240px;font-size:1.7rem;border-radius:100%;"></div>
        <img src="${data1.image}" class="card-img-top hgt img-thumbnail" style="width:210px; height:190px; margin-left:50px;">
        <div class="card-body">
          <p class="card-text" style="color:#0275d8; font-size:15px; font-weight:bold; letter-spacing:1px;">Symbol: ${data1.symbol}</p>
          <p class="card-text" style="color:#0275d8; font-size:15px; font-weight:bold; letter-spacing:1px;">Id: ${data1.id}</p>
          <p class="card-text" style="color:#0275d8; font-size:15px; font-weight:bold; letter-spacing:1px;">Current Price: $${data1.current_price}</p>
          <a href="./payment.html" type="button"  class="btn btn-success">Buy</a>
          <button class="btn btn-success" style="display:none"></button>
          </div>
    </div>
  </div>`

  })
  rowEl.innerHTML = coinDetails;
}

const rowEl = document.querySelector('.row')
const searchEl = document.getElementById('search')


let result = [];

searchEl.addEventListener('keyup', (e) => {
  const searchCoin = e.target.value
  const filtered = result.filter((coin) => { return (coin.name.toLowerCase().includes(searchCoin.toLowerCase())); });
  showCoin(filtered);

});

  
