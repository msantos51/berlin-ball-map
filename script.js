document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([38.736946, -9.142685], 13); // Coordenadas iniciais

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Simulação de dados de vendedores
    var vendedores = [
        { id: 1, name: 'João', lat: 38.737, lng: -9.14 },
        { id: 2, name: 'Maria', lat: 38.738, lng: -9.141 },
        // Adicione mais vendedores conforme necessário
    ];

    vendedores.forEach(vendedor => {
        L.marker([vendedor.lat, vendedor.lng]).addTo(map)
            .bindPopup(vendedor.name)
            .openPopup();
    });
});
