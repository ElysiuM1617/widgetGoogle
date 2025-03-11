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
    
    function getReviews(placeId) {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
    
        service.getDetails({
            placeId: placeId,
            fields: ["reviews"]
        }, (place, status) => {
            const reviewsContainer = document.getElementById("reviewsContainer");
            reviewsContainer.innerHTML = "";
    
            if (status !== google.maps.places.PlacesServiceStatus.OK || !place.reviews) {
                reviewsContainer.innerHTML = "<p>No hay reseñas disponibles.</p>";
                return;
            }
    
            place.reviews.forEach(review => {
                const reviewElement = document.createElement("div");
                reviewElement.classList.add("review");
    
                reviewElement.innerHTML = `
                    <img class="profile-img" src="${review.profile_photo_url}" alt="Foto">
                    <strong>${review.author_name}</strong>
                    <p class="stars">${"⭐".repeat(review.rating)}</p>
                    <p>${review.text}</p>
                `;
    
                reviewsContainer.appendChild(reviewElement);
            });
        });
    }
}
