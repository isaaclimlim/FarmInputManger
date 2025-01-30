document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const container = document.querySelector(".testimonial-slider");
    
    function showTestimonial() {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove("active");
            
            if (i === index) {
                testimonial.classList.add("active");
                
            }
        });
        index = (index + 1) % testimonials.length;
    }
    
    showTestimonial();
    setInterval(showTestimonial, 3000); // Change testimonial every 3 seconds
});