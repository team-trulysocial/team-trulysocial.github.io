// ===== AOS Animation Init =====
AOS.init({
  duration: 800,
  once: true,
  easing: 'ease-out',
});




// ===== Pricing Plan Toggle =====
const plans = ['starter', 'growth', 'pro', 'addon'];

function showPlan(plan) {
  plans.forEach(p => {
    document.getElementById(p).style.display = (p === plan) ? 'block' : 'none';
    const btn = document.getElementById(`btn-${p}`);
    if (btn) {
      btn.classList.toggle('active', p === plan);
    }
  });
}

// ===== Swiper: Problem Section =====
new Swiper('.problems-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: { delay: 2500 },
  pagination: { el: '.swiper-pagination', clickable: true },
});

// ===== Swiper: Testimonials =====
new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: { delay: 4000 },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// ===== Mobile Navbar Toggle =====
function toggleMenu() {
  const menu = document.getElementById('navMenu');
  menu.classList.toggle('active');
}

// ===== Reel Modal Functions =====
function openModal(videoSrc) {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modal.style.display = "flex";
  modalVideo.src = videoSrc;
  modalVideo.volume = 1;
  modalVideo.play();
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = "";
}

window.addEventListener("click", function (e) {
  if (e.target.id === "videoModal") closeModal();
});

window.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeModal();
});
