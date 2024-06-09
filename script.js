document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([38.736946, -9.142685], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    var database = firebase.database();
    database.ref('vendedores').on('value', (snapshot) => {
        var vendedores = snapshot.val();
        vendedores.forEach(vendedor => {
            L.marker([vendedor.lat, vendedor.lng]).addTo(map)
                .bindPopup(vendedor.name)
                .openPopup();
        });
    });
});
