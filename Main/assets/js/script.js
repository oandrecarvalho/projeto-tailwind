particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      out_mode: "out",
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});

function abrirModal(idModal) {
  const modal = document.getElementById(idModal);
  modal.classList.remove("hidden");

  // Remover listeners anteriores, se houver
  const clone = modal.cloneNode(true);
  modal.parentNode.replaceChild(clone, modal);

  clone.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-modal]") || e.target.id === idModal) {
      clone.classList.add("hidden");
    }
  });
}

// animações de sections
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-section");
      }
    });
  },
  { threshold: 0.3 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Mostrar/ocultar menu mobile
document.getElementById("menu-btn").addEventListener("click", () => {
  const menu = document.getElementById("menu-mobile");
  menu.classList.toggle("hidden");
});
