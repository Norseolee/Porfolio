/* Cursor */
const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  dot.style.left = e.clientX + "px";
  dot.style.top = e.clientY + "px";
});

/* Reveal */
const reveal = () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
};
addEventListener("scroll", reveal);
reveal();

/* Mobile nav */
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navMenu");
menuBtn.onclick = () => nav.classList.toggle("show");

/* Projects modal data */
/* Projects modal data */
const data = {
  journey: {
    title: "Journey Trails",
    desc: "A travel and tours website built using HTML and CSS only. Fully responsive and visually focused.",
    tech: ["HTML", "CSS", "Bootstrap"],
    live: "https://norseolee.github.io/Mini_project/",
    code: "https://github.com/Norseolee/Mini_project",
    carousel_images: [
      "image/projects/JourneyTrails_2.png",
      "image/projects/JourneyTrails_4.png",
    ],
  },
  am9: {
    title: "AM9 Commercial Electricity Billing System",
    desc: "A billing system inspired by Meralco, built with Node.js, Express, and MySQL.",
    tech: ["HTML", "CSS", "Node", "Express", "MySQL", "API"],
    live: "https://am9-commercial.onrender.com",
    code: "https://github.com/Norseolee/Am9MeralcoConversion",
    carousel_images: [
      "image/HrconnectMockup.png",
      "image/Am9CommercialElectricityBillingSystem.png",
      "image/hotel-del-luna.png",
    ],
  },
  hotel: {
    title: "Hotel De Luna",
    desc: "Luxury hotel website built by a team using HTML, CSS, JavaScript, and Laravel.",
    tech: ["HTML", "CSS", "JS", "Laravel"],
    live: "https://hoteldelluna.devorbitstudio.com/",
    code: "#",
    carousel_images: [
      "image/projects/Hotel_Del_Luna_1.png",
      "image/projects/Hotel_Del_Luna_2.png",
      "image/projects/Hotel_Del_Luna_FullPage_1.jpeg",
      "image/projects/Hotel_Del_Luna_FullPage_2.jpeg",
    ],
  },
  hr: {
    title: "HR Connect",
    desc: "HR management platform using Laravel CRUD operations.",
    tech: ["PHP", "Laravel", "JS", "Bootstrap"],
    live: "https://hr-connect.devorbitstudio.com/",
    code: "#",
    carousel_images: [
      "image/projects/hr_connect.png",
      "image/projects/hr_connect_2.jpg",
      "image/projects/hr_connect_3.jpg",
      "image/projects/hr_connect_4.jpg",
    ],
  },
  devorbit: {
    title: "Dev Orbit Studio",
    desc: "web Developer website using React-Laravel CRUD Operations, Tickets",
    tech: ["react", "Laravel", "ShadCn"],
    live: "https://devorbitstudio.com/",
    code: "#",
    carousel_images: [
      "image/projects/devorbitstudio.jpg",
      "image/projects/devorbitstudio_2.jpg",
      "image/projects/devorbitstudio_3.jpg",
      "image/projects/devorbitstudio_4.jpg",
      "image/projects/devorbitstudio_5.jpg",
      "image/projects/devorbitstudio_6.jpg",
    ],
  },
  rentalmanagerhub: {
    title: "RentalManagerHub",
    desc: `RentalManagerHub is the updated and improved version of the AM9 Commercial Billing System. 
  Originally built for one company, it has now been upgraded into a multi-company rental and property management platform.

  The system helps property owners, landlords, and rental businesses manage tenants, properties, rental billing, electricity billing, payments, reports, audit logs, and member accounts in one centralized system.

  Demo Account:
  Username: norhajar_gabuya
  Password: password123`,
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "JavaScript",
      "SaaS",
      "Multi-company System",
    ],
    live: "https://rentalmanagerhub.devorbitstudio.com/member/login",
    code: "#",
    images: [
      "image/projects/RentalManagerHub.png",
      "image/projects/RentalManagerHub_2.png",
      "image/projects/RentalManagerHub_Dashboard.png",
      "image/projects/RentalManagerHub_Electricity.png",
      "image/projects/RentalManagerHub_Member.png",
      "image/projects/RentalManagerHub_myProfile.png",
      "image/projects/RentalManagerHub_Payments.png",
      "image/projects/RentalManagerHub_Properties.png",
      "image/projects/RentalManagerHub_Reports.png",
    ],
  },
};

/* Modal logic */
/* Modal logic */
const modal = document.getElementById("projectModal");
const carouselInner = document.getElementById("carouselInner");
let carouselInstance; // store carousel instance

document.querySelectorAll(".project-card").forEach((card) => {
  card.onclick = () => {
    const p = data[card.dataset.project];
    document.getElementById("modalTitle").textContent = p.title;
    document.getElementById("modalDesc").textContent = p.desc;
    document.getElementById("modalTech").innerHTML = p.tech
      .map((t) => `<span>${t}</span>`)
      .join("");
    document.getElementById("modalLive").href = p.live;
    document.getElementById("modalCode").href = p.code;

    // Populate carousel
    carouselInner.innerHTML = "";
    const images = p.carousel_images || p.images || [];

    images.forEach((src, i) => {
      const div = document.createElement("div");
      div.className = "carousel-item" + (i === 0 ? " active" : "");
      div.innerHTML = `<img src="${src}" class="d-block w-100 rounded" alt="${p.title}" />`;
      carouselInner.appendChild(div);
    });

    // Destroy previous carousel instance if exists
    if (carouselInstance) {
      carouselInstance.dispose();
    }

    // Initialize new carousel instance (no auto-slide)
    const carouselElement = document.getElementById("projectCarousel");
    carouselInstance = new bootstrap.Carousel(carouselElement, {
      interval: false,
      ride: false,
      pause: "hover", // stops on hover
      wrap: true,
    });

    // Show modal
    modal.classList.add("show");
  };
});

document.querySelector(".close").onclick = () => {
  modal.classList.remove("show");
};

window.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("show");
};

/* Particles */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
addEventListener("resize", resize);

const pts = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.4,
  vy: (Math.random() - 0.5) * 0.4,
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(108,242,255,.5)";
  pts.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.fillRect(p.x, p.y, 2, 2);
  });
  requestAnimationFrame(animate);
}
animate();
