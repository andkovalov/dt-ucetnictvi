/* DT účetnictví Praha — cookie consent (GDPR / Google Consent Mode v2)
   Granular categories. Everything is denied by default and enabled only
   per the user's explicit choice. */
(function () {
  "use strict";

  var STORAGE_KEY = "dt-cookie-consent"; /* JSON: {analytics:bool, marketing:bool, v, ts} */

  /* === To turn on analytics later: set your GA4 ID here. ===
     Empty string = no tracking installed yet (banner still works). */
  var GA_MEASUREMENT_ID = "";

  /* --- Consent Mode v2: deny everything BEFORE any tag loads --- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500
  });

  var analyticsLoaded = false;
  function loadAnalytics() {
    if (analyticsLoaded || !GA_MEASUREMENT_ID) return;
    analyticsLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    gtag("js", new Date());
    gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function applyConsent(c) {
    gtag("consent", "update", {
      analytics_storage: c.analytics ? "granted" : "denied",
      ad_storage: c.marketing ? "granted" : "denied",
      ad_user_data: c.marketing ? "granted" : "denied",
      ad_personalization: c.marketing ? "granted" : "denied"
    });
    if (c.analytics) loadAnalytics();
  }

  function readConsent() {
    try {
      var v = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return (v && typeof v === "object") ? v : null;
    } catch (e) { return null; }
  }
  function saveConsent(c) {
    var v = { analytics: !!c.analytics, marketing: !!c.marketing, v: 1, ts: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)); } catch (e) {}
    applyConsent(v);
    return v;
  }

  function showBanner(b) {
    b.removeAttribute("hidden");
    void b.offsetWidth;
    b.classList.add("show");
  }
  function hideBanner(b) {
    b.classList.remove("show");
    setTimeout(function () {
      b.setAttribute("hidden", "");
      b.classList.remove("expanded");
    }, 450);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookieBanner");
    var stored = readConsent();

    /* Re-apply an earlier choice on every page load */
    if (stored) applyConsent(stored);
    if (!banner) return;

    var toggles = banner.querySelectorAll("[data-cat]");
    function setToggles(c) {
      toggles.forEach(function (t) {
        t.checked = c ? !!c[t.getAttribute("data-cat")] : false;
      });
    }
    function readToggles() {
      var o = {};
      toggles.forEach(function (t) { o[t.getAttribute("data-cat")] = t.checked; });
      return o;
    }

    if (!stored) showBanner(banner);

    banner.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-consent]");
      if (!btn) return;
      var action = btn.getAttribute("data-consent");
      if (action === "settings") {
        setToggles(stored);
        banner.classList.add("expanded");
      } else if (action === "accept") {
        saveConsent({ analytics: true, marketing: true });
        hideBanner(banner);
      } else if (action === "deny") {
        saveConsent({ analytics: false, marketing: false });
        hideBanner(banner);
      } else if (action === "save") {
        saveConsent(readToggles());
        hideBanner(banner);
      }
    });

    /* "Cookie settings" re-opener (footer, any page) — opens in settings mode */
    document.querySelectorAll('[data-consent="open"]').forEach(function (b2) {
      b2.addEventListener("click", function (e) {
        e.preventDefault();
        setToggles(readConsent());
        banner.classList.add("expanded");
        showBanner(banner);
      });
    });
  });
})();
