function findNearest(lat,lon){
    let d1 = haversine(lat,lon,2.922561,101.650965); // De Pulze
    let d2 = haversine(lat,lon,3.073065,101.607787); // Sunway Pyramid
    let d3 = haversine(lat,lon,3.158761,101.714524); // KLCC
    return [d1,d2,d3];

}

let ellocate = document.getElementById("locate");
ellocate.addEventListener("click",function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position{
            let elLat = document.getElementById("lat");
            let elLong = document.getElementById("long");
            let elDepulze = document.getElementById("depulze");
            let elSunway = document.getElementById("sunway");
            let elKlcc = document.getElementById("klcc");

            let userLat = position.coords.latitude;
            let userLong = position.coords.longitude;

            let distances = findNearest(userLat,userLong);

            elLat.innerHTML = "Your Latitude: " + userLat;
            elLong.innerHTML = "Your Longitude: " + userLong;
            elDepulze.innerHTML = "Distance to De Pulze, Cyberjaya is " + distances [0] + "km";
            elSunway.innerHTML = "Distance to Sunway, Selangor is " + distances [1] + "km";
            elKlcc.innerHTML = "Distance to KLCC, Ampang is " + distances [2] + "km";
        });
    } else{
        alert("Geolocation is not supported by this browser.")
    }

});