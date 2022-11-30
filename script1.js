function coins() {
    let coin = fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false");
    coin.then((res) => res.json())
      .then((data) => {
        console.log(data);
        result = data;
  
        showCoin(result);
      });
  }
  coins();
  
  
  function showCoin(data1) {
    const coinDetails = data1.map((data1) => {
    //  console.log(index)
      return `
        <div class="card text-center crd shadow  mt-2" style="width: 18rem;">
          <h5 class="card-title " id="coin">${data1.name}</h5>
          <img src="${data1.image}" class="card-img-top hgt img-tumbnail" style="width:210px; height:190px; margin-left:50px;">
          <div class="card-body">
            <p class="card-text">Symbol: ${data1.symbol}</p>
            <p class="card-text">Id: ${data1.id}</p>
            <p class="card-text">Current Price: ${data1.current_price}</p>
             <button type="button" class="btn btn-success">Buy</button>
             <button type="button" class="btn btn-success">Sell</button>
            </div>
    </div>`
    // <button class="btn btn-success" style="display:none" id=btn${index}></button>
    })
     rowEl.innerHTML = coinDetails;
   }
  // const card = document.getElementsByClassName('card-body')
  // console.log(card)
  
  const rowEl = document.querySelector('.row')
  const searchEl = document.getElementById('search')
  
  
  let result = [];
  
  searchEl.addEventListener('keyup', (e) => { 
    const searchCoin = e.target.value
    const filtered = result.filter((coin) => { return (coin.id.toLowerCase().includes(searchCoin.toLowerCase())); });
    showCoin(filtered);
  
  });
  