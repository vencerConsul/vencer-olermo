$(document).ready(function () {
    new WOW().init();
    

    var map = L.map("map").setView([16.36721, 119.890771], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([16.36721, 119.890771])
        .addTo(map)
        .bindPopup("My Address")
        .openPopup();
});

