(function () {
  var THEME_KEY = "pds-theme";

  function setTheme(mode) {
    var dark = mode === "dark";
    document.documentElement.classList.toggle("dark", dark);
    try {
      localStorage.setItem(THEME_KEY, mode);
    } catch (e) {}
    var btn = document.getElementById("pds-theme-toggle");
    if (btn) {
      if (typeof window.PDS_refreshThemeAria === "function") {
        window.PDS_refreshThemeAria();
      } else {
        btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
        btn.setAttribute("title", dark ? "Light mode" : "Dark mode");
      }
    }
  }

  function readStoredTheme() {
    try {
      var v = localStorage.getItem(THEME_KEY);
      if (v === "light" || v === "dark") return v;
    } catch (e) {}
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initTheme() {
    setTheme(readStoredTheme());
    var btn = document.getElementById("pds-theme-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        var next = document.documentElement.classList.contains("dark") ? "light" : "dark";
        setTheme(next);
      });
    }
  }

  function finishPreloader(el) {
    try {
      sessionStorage.setItem("pds_preloader_done", "1");
    } catch (e) {}
    el.classList.add("pds-preloader--hide");
    window.setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 300);
  }

  function initPreloader() {
    var el = document.getElementById("pds-preloader");
    if (!el) return;
    if (document.documentElement.classList.contains("pds-preloader-skip")) return;

    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      finishPreloader(el);
      return;
    }

    var start = typeof performance !== "undefined" ? performance.now() : Date.now();
    var minMs = 400;

    function run() {
      var now = typeof performance !== "undefined" ? performance.now() : Date.now();
      var wait = Math.max(0, minMs - (now - start));
      window.setTimeout(function () {
        finishPreloader(el);
      }, wait);
    }

    if (document.readyState === "complete") run();
    else window.addEventListener("load", run);
  }

  function initVisitors() {
    var el = document.getElementById("pds-visitor-count");
    if (!el) return;
    var sessionKey = "pds_visit_recorded";

    function applyTotal(n) {
      el.setAttribute("data-total", String(n));
      try {
        el.textContent = new Intl.NumberFormat(document.documentElement.lang || undefined, {
          maximumFractionDigits: 0,
        }).format(n);
      } catch (e) {
        el.textContent = String(n);
      }
    }

    function run() {
      if (!window.pdsVisitors) return;
      var tick = false;
      try {
        tick = !sessionStorage.getItem(sessionKey);
      } catch (e) {}
      var n = tick ? window.pdsVisitors.tickIfNewSession() : window.pdsVisitors.getTotal();
      if (typeof n === "number" && !isNaN(n)) applyTotal(n);
    }

    run();
  }

  function initScrollTop() {
    var btn = document.getElementById("pds-scroll-top");
    if (!btn) return;
    var threshold = 360;
    var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function syncVisibility() {
      var show = window.scrollY > threshold;
      btn.classList.toggle("pds-scroll-top--hidden", !show);
      btn.setAttribute("aria-hidden", show ? "false" : "true");
      if (show) btn.removeAttribute("tabindex");
      else btn.setAttribute("tabindex", "-1");
    }

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
      var main = document.getElementById("main-content");
      if (main) {
        try {
          main.focus({ preventScroll: true });
        } catch (e) {
          main.focus();
        }
      }
    });

    window.addEventListener("scroll", syncVisibility, { passive: true });
    syncVisibility();
  }

  function initNavDrawer() {
    var details = document.getElementById("pds-nav-details");
    if (!details) return;

    details.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function () {
        details.removeAttribute("open");
      });
    });

    document.addEventListener("click", function (e) {
      if (!details.open) return;
      if (details.contains(e.target)) return;
      details.removeAttribute("open");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      if (!details.open) return;
      details.removeAttribute("open");
    });
  }

  function init() {
    initTheme();
    initPreloader();
    initNavDrawer();
    initScrollTop();
    initVisitors();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
