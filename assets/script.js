// Smooth reveal on scroll
const onReveal = () => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('show');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
};

// Basic contact handler (static)
const attachContactHandler = () => {
  const form = document.querySelector('#contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const msg = form.querySelector('textarea[name="message"]').value.trim();

    if (!name || !email || !msg) {
      alert('필수 항목을 입력해 주세요.');
      return;
    }
    alert('메시지가 전송되었습니다. 감사합니다!');
    form.reset();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  onReveal();
  attachContactHandler();
});
