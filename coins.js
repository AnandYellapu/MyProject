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
        <div class="card text-center crd shadow  mt-8 mb-5" style="width: 30rem;">
          <h5 class="card-title " id="coin" style="color:var(--black); font-size:20px; letter-spacing:1px;">${data1.name}</h5>
           <div class="far fa-star" style="margin-right:190px;"></div>
          <img src="${data1.image}" class="card-img-top hgt img-thumbnail" style="width:210px; height:190px; margin-left:50px;">
          <div class="card-body">
            <p class="card-text" style="color:#0275d8; font-size:15px; font-weight:bold; letter-spacing:1px;">Symbol: ${data1.symbol}</p>
            <p class="card-text" style="color:#0275d8; font-size:15px; font-weight:bold; letter-spacing:1px;">Id: ${data1.id}</p>
            <p class="card-text" style="color:#0275d8; font-size:15px; font-weight:bold; letter-spacing:1px;">Current Price: ${data1.current_price}</p>
            <button type="button"  class="btn btn-success">Buy</button>
            <button class="btn btn-success" style="display:none"></button>
            </div>
      </div>
    </div>`
  
    })
    rowEl.innerHTML = coinDetails;
  }
  // const card = document.getElementsByClassName('card-body')
  // console.log(card)
  
  // function getweather(country1,index) {
  //   console.log(index)
  //   let btn=document.getElementById('btn'+index)
  //   console.log(btn)
  //   const countryName = country1
  //   var tempEl = document.getElementById("temp")
  //   var windEl = document.getElementById("wind")
  
  //   let weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=6dcd37847701c28cf9e109b337e4b27b`);
  //   weather.then((res1) => res1.json())
  //     .then((data1) => {
  //       console.log(data1);
  
        
  //       btn.style.display="block"
  //       btn.innerHTML = ` <p id="temp">'${data1.main.temp}'</p>
  //       <p id="wind">${data1.wind.speed}</p>`
        
   
        
  //     });
  
  // }
  
  const rowEl = document.querySelector('.row')
  const searchEl = document.getElementById('search')
  
  
  let result = [];
  
  searchEl.addEventListener('keyup', (e) => {
    const searchCoin = e.target.value
    const filtered = result.filter((coin) => { return (coin.name.toLowerCase().includes(searchCoin.toLowerCase())); });
    showCoin(filtered);
  
  });
  
