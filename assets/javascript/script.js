
  document.addEventListener("DOMContentLoaded", function () {
    const navbarCollapse = document.getElementById("navbarNav");

    document.addEventListener("click", function (e) {
      const link = e.target.closest(".navbar-nav .nav-link");
      if (!link) return;

      const opensModal = link.getAttribute("data-bs-toggle") === "modal";
      const isNavbarOpen = navbarCollapse.classList.contains("show");

      if (isNavbarOpen && !opensModal) {
        const instance = bootstrap.Collapse.getInstance(navbarCollapse) 
          || new bootstrap.Collapse(navbarCollapse, { toggle: false });
        instance.hide();
      }
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  faders.forEach(el => observer.observe(el));
});

