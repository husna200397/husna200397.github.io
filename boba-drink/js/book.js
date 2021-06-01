let bookNowBtn = document.getElementById("orderNow");
bookNowBtn.addEventListener("click",function(){
    let username = document.getElementById("username");
    let userNameVal = userName.value;

    let userOrder = document.getElementById("userorder");
    let userOrderVal = userMyOrder.value;

    let userPaxVal = document.getElementById("userPax").value;

    let userRemarksVal = document.getElementById("userPax").value;


    bookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function bookNow(userName, userMyOrder, userPax, userRemarks){
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/tableapp/bookinglist';
    let body = {
        bookinglist: {
            name: userName,
            my order: userEmail,
            pax: userPax,
            remarks: userRemarks,
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
  alert(json.bookinglist.id + "," + json.bookinglist.name + " successfully added ")
});
}
