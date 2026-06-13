/* DT účetnictví Praha — interactions & GSAP animations */
(function () {
  "use strict";

  document.documentElement.classList.remove("no-js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGsap = typeof gsap !== "undefined";
  if (reduceMotion || !hasGsap) {
    document.documentElement.classList.add("no-motion");
  }

  /* ---------- Header state ---------- */
  var header = document.querySelector(".header");
  function onScroll() {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".mobile-menu");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (e) {
        menu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
        var href = link.getAttribute("href");
        if (href && href.charAt(0) === "#") {
          var target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            setTimeout(function () {
              target.scrollIntoView({ behavior: "smooth" });
              history.replaceState(null, "", href);
            }, 60);
          }
        }
      });
    });
  }

  /* ---------- Pricing tabs ---------- */
  var tabs = document.querySelectorAll(".pricing-tab");
  var panels = document.querySelectorAll(".pricing-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        t.classList.toggle("active", t === tab);
        t.setAttribute("aria-selected", t === tab ? "true" : "false");
      });
      panels.forEach(function (p) {
        p.classList.toggle("active", p.id === tab.getAttribute("aria-controls"));
      });
      if (hasGsap && !reduceMotion) {
        var active = document.getElementById(tab.getAttribute("aria-controls"));
        gsap.fromTo(
          active.querySelectorAll(".price-card"),
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out", overwrite: true, clearProps: "opacity,transform" }
        );
      }
    });
  });

  /* ---------- FAQ: allow only one open ---------- */
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  if (!hasGsap || reduceMotion) return;

  /* ---------- GSAP ---------- */
  gsap.registerPlugin(ScrollTrigger);

  /* Hero entrance */
  var heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
  heroTl
    .from(".hero h1 .line > span", { yPercent: 110, duration: 0.9, stagger: 0.12 })
    .from(".hero-sub, .hero-cta", { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=0.45")
    .from(".hero-trust .trust-chip", { y: 16, opacity: 0, duration: 0.5, stagger: 0.07 }, "-=0.4")
    .from(".invoice-card", { y: 60, opacity: 0, rotate: 2, duration: 0.9 }, 0.25)
    .from(".float-chip", { scale: 0.6, opacity: 0, duration: 0.7, stagger: 0.12, ease: "back.out(2)" }, "-=0.5")
    .from(".hero-blob", { scale: 0.6, opacity: 0, duration: 1.1, ease: "power2.out" }, 0.2);

  /* Floating idle motion (desktop layout only — chips are static on mobile) */
  if (window.matchMedia("(min-width: 881px)").matches) {
    gsap.to(".chip-1", { y: -14, duration: 2.6, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.4 });
    gsap.to(".chip-2", { y: 12, duration: 3.1, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.6 });
    gsap.to(".chip-3", { y: -10, duration: 2.8, yoyo: true, repeat: -1, ease: "sine.inOut", delay: 1.8 });
    gsap.to(".hero-blob", {
      borderRadius: "54% 46% 42% 58% / 44% 56% 44% 56%",
      duration: 5, yoyo: true, repeat: -1, ease: "sine.inOut"
    });
    gsap.to(".invoice-card", {
      yPercent: -6,
      scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
    });
  }

  /* Generic section reveals */
  gsap.utils.toArray(".reveal").forEach(function (el) {
    gsap.fromTo(
      el,
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 86%" },
        clearProps: "transform"
      }
    );
  });

  /* Card grids: stagger reveal */
  [".services-grid", ".numbers-grid", ".steps-grid", ".why-list", ".faq-list", ".contact-list"].forEach(function (sel) {
    var grid = document.querySelector(sel);
    if (!grid) return;
    gsap.fromTo(
      grid.children,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: grid, start: "top 84%" },
        clearProps: "transform,opacity"
      }
    );
  });

  /* Pricing cards of the initially active panel */
  var activePanel = document.querySelector(".pricing-panel.active .pricing-grid");
  if (activePanel) {
    gsap.fromTo(
      activePanel.children,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: activePanel, start: "top 84%" },
        clearProps: "transform,opacity"
      }
    );
  }

  /* Animated counters */
  document.querySelectorAll("[data-count]").forEach(function (el) {
    var target = parseFloat(el.getAttribute("data-count"));
    var obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%" },
      onUpdate: function () {
        el.textContent = Math.round(obj.val).toLocaleString("cs-CZ");
      }
    });
  });
})();
