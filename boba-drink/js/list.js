let refreshNowBtn = document.getElementById("refreshNow");
refreshNowBtn.addEventListener("click", function () {
    GetOredr();
});

function GetOrder() {
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/boba/orderlist';
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            let orderlist = document.getElementById("orderlist");
            let orderids = [];

            //clear the table rows
            for (let k = orderlist.row.length - 1; k > 0; k--) {
                orderlist.deleteRow(k);
            }

            for (let i = 0; i < json.orderlist.length; i++) {
                let gname = json.orderlist[i].name;
                let gorder = json.orderlist[i].order;
                let gtelephonenumber = json.orderlist[i].telephonenumber;
                let gpax = json.orderlist[i].pax;
                let gcollecteditem = json.orderlist[i].collecteditem;
                let gremark = json.orderlist[i].remark;
                let gid = json.orderlist[i].id;
                let btnid = "delete" + gid;

                let row = orderlist.insertRow(orderlist.rows.length);
                row.insertCell(0).innerHTML = gid;
                row.insertCell(1).innerHTML = gname;
                row.insertCell(2).innerHTML = gorder;
                row.insertCell(2).innerHTML = gtelephonenumber;
                row.insertCell(3).innerHTML = gpax;
                row.insertCell(3).innerHTML = gcollecteditem;
                row.insertCell(4).innerHTML = gremark;
                row.insertCell(5).innerHTML = "<button id='" + btnid + "' class='btn btn-danger'> Delete </button>";

                orderids.push(btnid);
            }

            for (let j = 0; j < orderids.length; j++) {
                let el = document.getElementById(orderids[j]);
                el.addEventListener("click", function () {
                    let theid = orderids[j].replace("delete", "");
                    DeleteOrder(theid);
                });
            }
        });

}

function DeleteOrder(id) {
    let url = 'https://api.sheety.co/a9ad430d8fe2402028bbf4ba388b0dbe/boba/orderlist/2';
    fetch(url, {
        method: 'DELETE',
    })

        .then(() => {
            alert("Record id" + "deleted!");
            GetOrder();
        });
}