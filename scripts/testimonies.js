document.addEventListener("DOMContentLoaded", function() {
  fetch('./scripts/testimonies.json')
    .then(response => response.json())
    .then(data => {
      const testimonialCarousel = document.getElementById('testimonial-carousel');
      data.forEach(testimonial => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `
          <div class="card">
              <h5 class="card-title">${testimonial.author}, ${testimonial.location}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${testimonial.rating}</h6>
              <p class="card-text">${testimonial.comment}</p>
            </div>
          </div>
        `;
        testimonialCarousel.appendChild(item);
      });
    })
    .catch(error => console.error('Error fetching testimonies:', error));
});
