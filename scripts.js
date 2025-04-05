function validateEmail(email) {
    return email.includes("@") && email.includes(".");
  }
  console.log(validateEmail("test@example.com")); // true
  

// Show/hide the button
window.onscroll = function () {
    const btn = document.getElementById("scrollTopBtn");
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };
  
  // Scroll to top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  const videoCarousel = document.getElementById('videoCarousel');
      
  // Pause all videos on slide start
  videoCarousel.addEventListener('slide.bs.carousel', () => {
    const videos = videoCarousel.querySelectorAll('video');
    videos.forEach(video => {
      video.pause();
      video.currentTime = 0; // optional: reset to beginning
    });
  });

  // Play the video in the active slide after the transition finishes
  videoCarousel.addEventListener('slid.bs.carousel', () => {
    const activeSlide = videoCarousel.querySelector('.carousel-item.active');
    const video = activeSlide.querySelector('video');
    if (video) {
      video.play();
    }
  });