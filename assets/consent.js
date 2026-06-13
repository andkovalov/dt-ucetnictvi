/* DT účetnictví Praha — cookie consent (GDPR / Google Consent Mode v2)
   Tracking is blocked by default and only enabled after the user accepts. */
(function () {
  "use strict";

  var STORAGE_KEY = "dt-cookie-consent"; /* "granted" | "denied" */

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

  function grant() {
    gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted"
    });
    loadAnalytics();
  }

  function readConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function writeConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    if (value === "granted") grant();
  }

  function showBanner(banner) {
    banner.removeAttribute("hidden");
    void banner.offsetWidth;
    banner.classList.add("show");
  }
  function hideBanner(banner) {
    banner.classList.remove("show");
    setTimeout(function () { banner.setAttribute("hidden", ""); }, 450);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.getElementById("cookieBanner");
    var stored = readConsent();

    /* Re-apply an earlier "granted" choice on every page load */
    if (stored === "granted") grant();

    if (banner) {
      if (!stored) showBanner(banner);
      banner.querySelectorAll("[data-consent]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var action = btn.getAttribute("data-consent");
          if (action === "accept") { writeConsent("granted"); hideBanner(banner); }
          else if (action === "deny") { writeConsent("denied"); hideBanner(banner); }
        });
      });
    }

    /* "Cookie settings" re-opener (footer, any page) */
    document.querySelectorAll('[data-consent="open"]').forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        if (banner) showBanner(banner);
      });
    });
  });
})();
