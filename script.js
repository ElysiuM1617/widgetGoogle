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

        // Limitar la cantidad de reseñas que se muestran
        const reviewsToShow = place.reviews.slice(0, 5);

        // Generar estructura del carrusel con Swiper
        reviewsContainer.innerHTML = `
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    ${reviewsToShow.map(review => `
                        <div class="swiper-slide">
                            <img class="profile-img" src="${review.profile_photo_url}" alt="Foto">
                            <strong>${review.author_name}</strong>
                            <p class="stars">${"⭐".repeat(review.rating)}</p>
                            <p>${review.text}</p>
                        </div>
                    `).join("")}
                </div>
                <div class="swiper-pagination"></div> <!-- Asegurar que haya paginación -->
            </div>
        `;

        // Inicializar Swiper después de insertar el HTML
        new Swiper(".swiper-container", {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
}
