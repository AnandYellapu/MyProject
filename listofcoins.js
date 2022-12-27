function createRow({ id, name, symbol, image, current_price, market_cap, market_cap_rank,total_volume,total_supply,circulating_supply  }) {
	document.querySelector(".userlist").innerHTML += `                        
	<td>${id}</td>
	<td><img src=${image}  alt="image1" width=20px height=20px style="text-align:center;"></td>
	<td>${symbol}</td>
	<td>${name}</td>
	<td>${current_price}</td>
	<td>${market_cap}</td>
	<td>${market_cap_rank}</td>
	<td>${total_volume}</td>
	<td>${circulating_supply}</td>
	<td>${total_supply}</td>                    
						  `;
  }
  async function getUsersData() {
	const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
	const userList = await res.json();
	console.log(userList);
  
	const paginationDiv = document.getElementById('paginationDiv')
	  // no of pages=>total count/no of rows in each page
  
	const noOfPages = Math.ceil(userList.length / 20);
	console.log(userList.length);
	console.log(noOfPages);
  
	for (let i = 1; i <= noOfPages; i++) {
	  var paginationButton=document.createElement("li")
	  paginationButton.innerHTML +=`<a class="page-link" href="#">${i}</a>`
	  console.log(paginationButton)
	  paginationDiv.append(paginationButton)
  
	  paginationButton.addEventListener("click", function () {
		// slice (0,10)=>0-9(length=>10) i=1
		// slice  (10,20)=>10-19(length=>10) i=2
		const pageData = userList.slice((i - 1) * 20, i * 20);
		console.log(pageData);
		document.querySelector(".userlist").innerHTML = "";
		pageData.map((element) => createRow(element));
	  });
	}
  
	const firstTenUsers = userList.slice(0, 20);
	firstTenUsers.map((element) => createRow(element));
	  
	     // Get a reference to the input element
const searchInput = document.querySelector("#search");

// Add an event listener to the input element
searchInput.addEventListener("input", () => {
  // Get the current input value
  const searchValue = searchInput.value;

  // Filter the data based on the search value
  const filteredData = userList.filter((item) => {
    // Check if the name or symbol of the item matches the search value
    return item.name.includes(searchValue) || item.symbol.includes(searchValue);
  });

  // Clear the existing data in the table
  document.querySelector(".userlist").innerHTML = "";

  // Add the filtered data to the table
  filteredData.forEach((item) => createRow(item));
});
}
  getUsersData();
