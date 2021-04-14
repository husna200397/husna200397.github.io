let bookNowBtn = document.getElementById("bookNow");
bookNowBtn.addEventListener("click",function(){
    let userName = document.getElementById("userName");
    let userNameVal = userName.value;

    let userEmail = document.getElementById("userEmail");
    let userEmailVal = userEmail.value;

    let userPaxVal = document.getElementById("userPax").value;
    let userRemarksVal = document.getElementById("userRemarks").value;

    bookNow(userNameVal, userEmailVal, userPaxVal, userRemarksVal);
});

function bookNow(userName, userEmail, userPax, userRemarks){
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/tableapp/bookinglist';
    let body = {
        bookinglist: {
            name: userName,
            email: userEmail,
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
  alert(json.bookinglist.id + "," + json.bookinglist.name + "successfully added");
});
}
