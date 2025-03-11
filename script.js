function searchPlace() {
    const placeName = document.getElementById("placeInput").value;
    if (!placeName) {
        alert("Ingresa un nombre de lugar.");
        return;
    }

    const service = new google.maps.places.PlacesService(document.createElement('div'));

    service.findPlaceFromQuery({
        query: placeName,
        fields: ["place_id"]
    }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
            const placeId = results[0].place_id;
            getReviews(placeId);
        } else {
            alert("No se encontró el lugar.");
        }
    });
}
