let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetBooking();
});

function GetBooking() {
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/tableapp/bookinglist';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let bookingNameList = document.getElementById("bookingNameList");
            let bookingids = [];

            //clear the table rows
            for (let k = bookingNameList.length - 1; k > 0; k--) {
                bookingNameList.deleteRow(k);
            }

            for (let i = 0; i < json.bookinglist.length; i++) {
                let gName = json.bookinglist[i].name;
                let gEmail = json.bookinglist[i].email;
                let gPax = json.bookinglist[i].pax;
                let gRemarks = json.bookinglist[i].remarks;
                let gid = json.bookinglist[i].id;
                let btnid = "delete" + gid;

                let row = bookingNameList.insertRow(bookingNameList.rows.length);
                row.insertCell(0).innerHTML = gid;
                row.insertCell(1).innerHTML = gName;
                row.insertCell(2).innerHTML = gEmail;
                row.insertCell(3).innerHTML = gPax;
                row.insertCell(4).innerHTML = gRemarks;
                row.insertCell(5).innerHTML = "<button id='" + btnid + "' class='btn btn-danger'> Delete </button>";

                bookingids.push(btnid);
            }

            for (let j = 0; j < bookingids.length; j++) {
                let el = document.getElementById(bookingids[j]);
                el.addEventListener("click", function () {
                    let theId = bookingids[j].replace("delete", "");
                    DeleteBooking(theid);
                });
            }
        });

}

function DeleteBooking(id) {
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/tableapp/bookinglist/2';
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            alert("Record id" + "deleted!");
            GetBooking();
        });
}