let orderNowBtn = document.getElementById("orderNow");
orderNowBtn.addEventListener("click",function(){
    let username = document.getElementById("username");
    let usernameVal = username.value;

    let userorder = document.getElementById("userorder");
    let userorderVal = userorder.value;

    let usertelephonenumberVal = document.getElementById("usertelephonenumber");
    let userpaxVal = document.getElementById("userpax").value;

    let usercollecteditemVal = document.getElementById("usercollecteditem");
    let userremarkVal = document.getElementById("userremark").value;


    orderNow(usernameVal, userorderVal, usertelephonenumberVal, userpaxVal, usercollecteditemVal, userremarkVal);
});

function orderNow(username, userorder, usertelephonenumber,userpax, usercollecteditem, userremark){
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/boba/orderlist';
    let body = {
        orderlist: {
            name: username,
            order: userorder,
            telephonenumber: usertelephonenumber,
            pax: userpax,
            collecteditem: usercollecteditem,
            remark: userremark,
  }
}
fetch(url, {
  method: 'POST',
  body: JSON.stringify(body),
  headers:{
      "Content-Type": "application/json"
  }
})
.then((response) => response.json())
.then(json => {
  alert(json.orderlist.id +  ","  + " successfully added ")
});
}
