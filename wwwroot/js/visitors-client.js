(function () {
  var STORAGE_TOTAL = "pds_visit_total_v1";
  var STORAGE_SEED = "pds_visit_seed_v1";
  var SESSION_KEY = "pds_visit_recorded";

  function readInt(key, fallback) {
    try {
      var s = localStorage.getItem(key);
      var n = s != null ? parseInt(s, 10) : NaN;
      return Number.isFinite(n) ? n : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeInt(key, n) {
    try {
      localStorage.setItem(key, String(n));
    } catch (e) {}
  }

  function ensureSeed() {
    var s = readInt(STORAGE_SEED, 0);
    if (s <= 0) {
      s = 10000 + Math.floor(Math.random() * 5000);
      writeInt(STORAGE_SEED, s);
    }
    return s;
  }

  window.pdsVisitors = {
    getTotal: function () {
      return ensureSeed() + readInt(STORAGE_TOTAL, 0);
    },
    tickIfNewSession: function () {
      var recorded = false;
      try {
        recorded = !!sessionStorage.getItem(SESSION_KEY);
      } catch (e) {}
      if (recorded) return this.getTotal();
      var t = readInt(STORAGE_TOTAL, 0) + 1;
      writeInt(STORAGE_TOTAL, t);
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch (e) {}
      return ensureSeed() + t;
    },
  };
})();
