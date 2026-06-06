import { links, services, barbers, plans, testimonials, units, transformations, ctaFinal, availableSlots } from "../data/content.js";

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function applyLinks() {
  $$("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    if (!links[key]) return;

    element.setAttribute("href", links[key]);
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  });
}

function renderServices() {
  const grid = $("#servicesGrid");
  if (!grid) return;

  grid.innerHTML = services.map((service) => `
    <article class="service-card reveal">
      <img src="${service.image}" alt="${service.title}" loading="lazy">
      <div class="card-body">
        <span class="card-category">${service.category}</span>
        <h3 class="card-title">${service.title}</h3>
        <div class="meta-row"><strong>${service.price}</strong><span>${service.duration}</span></div>
        <p class="card-copy">${service.description}</p>
        <a class="card-link" data-link="appBarber" href="#">${service.cta} →</a>
      </div>
    </article>
  `).join("");
}

function renderBarbers() {
  const track = $("#barbersTrack");
  if (!track) return;

  const cards = barbers.map((barber, index) => {
    const firstName = barber.name.split(" ")[0];
    const slug = firstName.toLowerCase();
    const agendaUrl = `${links.appBarber}?barber=${encodeURIComponent(slug)}`;

    return `
      <article class="barber-card reveal ${index === 0 ? "active" : ""}" data-barber="${slug}">
        <span class="highlight">${barber.highlight}</span>
        <img src="${barber.image}" alt="${barber.name}" loading="lazy">
        <div class="barber-info">
          <h3 class="card-title">${barber.name}</h3>
          <p class="card-copy">${barber.specialty}</p>

          <div class="barber-proof">
            <span class="rating">${barber.rating}</span>
            <span class="jobs">${barber.jobs}</span>
          </div>

          <div class="barber-schedule">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>${barber.nextSlot}</span>
          </div>

          <div class="tag-row">${barber.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>

          <a class="btn btn-primary barber-select-btn" href="${agendaUrl}" target="_blank" rel="noopener noreferrer">Escolher ${firstName} →</a>
          <a class="btn btn-ghost" href="#galeria">Ver trabalhos →</a>
        </div>
      </article>
    `;
  }).join("");

  const dots = barbers.map((barber, index) => `
    <button class="carousel-dot ${index === 0 ? "active" : ""}" data-index="${index}" aria-label="Ver ${barber.name}"></button>
  `).join("");

  track.innerHTML = `
    <div class="barber-stage">${cards}</div>
    <div class="carousel-dots">${dots}</div>
  `;
}

function renderPlans() {
  const grid = $("#plansGrid");
  if (!grid) return;

  grid.innerHTML = plans.map((plan) => `
    <article class="plan-card reveal ${plan.featured ? "featured" : ""}">
      <h3 class="card-title">${plan.name}</h3>
      <div class="plan-price">${plan.price}</div>
      <p class="card-copy">${plan.description}</p>
      <ul>${plan.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
      <a class="card-link" data-link="appBarber" href="#">Assinar pelo app →</a>
    </article>
  `).join("");
}

function renderTestimonials() {
  const grid = $("#testimonialsGrid");
  if (!grid) return;

  grid.innerHTML = testimonials.map((testimonial) => `
    <article class="testimonial-card reveal">
      <strong>${testimonial.name}</strong>
      <p>"${testimonial.text}"</p>
    </article>
  `).join("");
}

function renderUnits() {
  const grid = $("#unitsGrid");
  if (!grid) return;

  grid.innerHTML = units.map((unit) => `
    <article class="unit-card reveal">
      <span class="card-category">Unidade demo</span>
      <h3 class="card-title">${unit.name}</h3>
      <p class="card-copy">${unit.address}</p>
      <p class="card-copy">${unit.hours}</p>
      <a class="card-link" data-link="appBarber" href="#">Agendar nessa unidade →</a><br>
      <a class="card-link" href="${unit.map}" target="_blank" rel="noopener noreferrer">Como chegar →</a>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;

  grid.innerHTML = transformations.map((item) => `
    <article class="transform-sequence reveal">
      <div class="transform-inner">
        <div class="transform-item"><span class="transform-label">Antes</span><img src="${item.before}" alt="Antes da transformação" class="parallax-img" loading="lazy"></div>
        <div class="transform-item"><span class="transform-label">Durante</span><img src="${item.during}" alt="Durante o processo" class="parallax-img" loading="lazy"></div>
        <div class="transform-item"><span class="transform-label">Depois</span><img src="${item.after}" alt="Depois da transformação" class="parallax-img" loading="lazy"></div>
      </div>
      <div class="transform-overlay">
        <h4 class="transform-service">${item.service}</h4>
        <p class="transform-description">${item.description}</p>
        <span class="transform-barber">Por ${item.barber}</span>
      </div>
    </article>
  `).join("");
}

function renderFinalCta() {
  const container = $("#finalCtaContainer");
  if (!container) return;

  container.innerHTML = `
    <div class="final-panel reveal">
      <div class="final-content">
        <img src="assets/logo/olegario-tech-mark.svg" alt="Olegario Tech">
        <p class="eyebrow">Para donos de barbearia</p>
        <h2>${ctaFinal.heading}</h2>

        <div class="final-testimonial">
          <div class="testimonial-mark">"</div>
          <p class="testimonial-text">${ctaFinal.testimonial}</p>
          <span class="testimonial-author">— ${ctaFinal.testimonialAuthor}</span>
        </div>

        <p class="final-copy">${ctaFinal.copy}</p>

        <div class="final-proof">
          <span class="proof-item">${ctaFinal.socialProof}</span>
          <span class="proof-urgency">${ctaFinal.urgency}</span>
        </div>

        <a class="btn btn-primary magnetic" data-link="whatsappOlegarioTech" href="#">Quero um site assim para minha barbearia</a>
      </div>
    </div>
  `;
}

function renderTimeSlots() {
  const container = $("#timeSlots");
  if (!container) return;

  container.innerHTML = availableSlots.map((slot) => `
    <button class="time-pill ${slot.urgency ? "has-urgency" : ""}" title="${slot.urgency || "Disponível"}">
      ${slot.time}${slot.urgency ? `<span class="urgency-badge">${slot.urgency}</span>` : ""}
    </button>
  `).join("");
}

function renderBookingChoices() {
  const serviceChoices = $("#serviceChoices");
  const barberChoices = $("#barberChoices");
  if (!serviceChoices || !barberChoices) return;

  serviceChoices.innerHTML = ["Corte", "Barba", "Combo", "Planos"]
    .map((item, index) => `<button class="choice ${index === 0 ? "selected" : ""}" data-next-step="2">${item}</button>`)
    .join("");

  barberChoices.innerHTML = barbers.slice(0, 4)
    .map((barber, index) => `<button class="choice ${index === 0 ? "selected" : ""}" data-next-step="3">${barber.name.split(" ")[0]}</button>`)
    .join("");
}

function setupBookingSteps() {
  $$(".choice[data-next-step]").forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.closest(".choice-grid");
      $$(".choice", parent).forEach((item) => item.classList.remove("selected"));
      button.classList.add("selected");

      const nextStep = button.dataset.nextStep;
      setTimeout(() => {
        $$(".booking-step").forEach((step) => step.classList.remove("active"));
        $(`.booking-step[data-step="${nextStep}"]`)?.classList.add("active");
      }, 180);
    });
  });
}

function setupHeader() {
  const header = $("#siteHeader");
  const progress = $("#scrollProgress");
  if (!header || !progress) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const progressWidth = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    header.classList.toggle("is-scrolled", scrollTop > 40);
    progress.style.width = `${progressWidth}%`;
  }, { passive: true });
}

function setupSmoothScroll() {
  if (!window.Lenis) return;

  const lenis = new Lenis({ duration: 1.08, smoothWheel: true, wheelMultiplier: 0.85 });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

function setupCarousel3D() {
  const track = $("#barbersTrack");
  if (!track) return;

  const cards = $$(".barber-card", track);
  const dots = $$(".carousel-dot", track);
  const totalCards = cards.length;
  let currentIndex = 0;
  let wheelLocked = false;

  if (!totalCards) return;

  function updateCarousel() {
    cards.forEach((card, index) => {
      card.classList.remove("active", "next", "prev");
      card.setAttribute("aria-hidden", index === currentIndex ? "false" : "true");

      if (index === currentIndex) card.classList.add("active");
      if (index === (currentIndex + 1) % totalCards) card.classList.add("next");
      if (index === (currentIndex - 1 + totalCards) % totalCards) card.classList.add("prev");
    });

    dots.forEach((dot, index) => dot.classList.toggle("active", index === currentIndex));
  }

  function goTo(index) {
    currentIndex = (index + totalCards) % totalCards;
    updateCarousel();
  }

  dots.forEach((dot, index) => dot.addEventListener("click", () => goTo(index)));

  track.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (wheelLocked) return;

    event.deltaY > 0 ? goTo(currentIndex + 1) : goTo(currentIndex - 1);
    wheelLocked = true;
    setTimeout(() => { wheelLocked = false; }, 420);
  }, { passive: false });

  let touchStartX = 0;

  track.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });

  track.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    const delta = touchStartX - touchEndX;

    if (delta > 50) goTo(currentIndex + 1);
    if (delta < -50) goTo(currentIndex - 1);
  }, { passive: true });

  updateCarousel();
}

function setupAnimations() {
  if (!window.gsap || !window.ScrollTrigger) {
    $$(".reveal").forEach((element) => {
      element.style.opacity = 1;
      element.style.transform = "none";
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".preloader img", {
    scale: 1.04,
    duration: 0.9,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });

  gsap.utils.toArray(".reveal").forEach((element) => {
    gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power3.out",
      scrollTrigger: { trigger: element, start: "top 86%" }
    });
  });

  gsap.to(".hero-media img, .hero-video", {
    yPercent: 12,
    ease: "none",
    scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
  });

  gsap.utils.toArray(".parallax-img").forEach((image) => {
    gsap.fromTo(image, { y: 42 }, {
      y: -28,
      ease: "none",
      scrollTrigger: { trigger: image, start: "top bottom", end: "bottom top", scrub: true }
    });
  });

  gsap.utils.toArray(".magnetic").forEach((element) => {
    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      gsap.to(element, { x: x * 0.12, y: y * 0.18, duration: 0.35, ease: "power3.out" });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, .4)" });
    });
  });

  setTimeout(() => ScrollTrigger.refresh(), 450);
}

function setupPreloader() {
  const preloader = $("#preloader");
  if (!preloader) return;

  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("is-hidden"), 550);
  });
}

function init() {
  renderServices();
  renderBarbers();
  renderPlans();
  renderTestimonials();
  renderUnits();
  renderGallery();
  renderFinalCta();
  renderTimeSlots();
  renderBookingChoices();
  applyLinks();
  setupBookingSteps();
  setupHeader();
  setupSmoothScroll();
  setupCarousel3D();
  setupAnimations();
  setupPreloader();
}

init();
