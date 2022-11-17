async function createNewUsersData() {
  var password = document.getElementById("password").value
  var confirmpassword = document.getElementById("confirmpassword").value
  var email = document.getElementById("email").value
  var s="@"
  let url ='https://636702d979b0914b75da31b6.mockapi.io/CoinDex';

  let newUser =
  {
    "email":`${email}`,
    "password":`${password}`,
    "confirmpassword":`${confirmpassword}`
  }

  if(email.length==0&&email!=s){
    alert("please provide a valid email ")
  }
  else if(password.length<=10){
    alert("Password maximum should be above 10 characters")
}
else if(confirmpassword.length<=10){
  alert("The confirmpassword should be same with above password and maximum should be above 10 characters")
}

else{
  let data= await fetch(url,{
    method:"POST",
    headers:{'content-Type':"application/json"},
    body:JSON.stringify(newUser)
  })

let res = await data.json();
console.log(res)
console.log(email,password,confirmpassword)
alert("you have registered")

}
}



async function page() {
  var username = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  let url = 'https://636702d979b0914b75da31b6.mockapi.io/CoinDex'
      let res = await fetch(url)
      let data = await res.json(url)  
      for(obj of data){
          if(username===obj.name&&password===obj.password){
          console.log(`dear`)   
          login.style.backgroundColor = "black";
          //window.location.href=('./ct1.html')
          
      }
      else{
          console.log("data")
         
      }
  
  }
  
  }