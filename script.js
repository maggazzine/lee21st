const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  },
  {
    threshold: 0.14,
    rootMargin: '0px 0px -30px 0px',
  }
);

revealElements.forEach((element) => observer.observe(element));

const orbs = document.querySelectorAll('.orb');
window.addEventListener('scroll', () => {
  const offset = window.scrollY;
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.07;
    orb.style.transform = `translateY(${offset * speed}px)`;
  });
});
