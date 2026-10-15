// Copies tracker click IDs from the page URL onto every .offer-link.
// RedTrack lander URL: ?rtkcid={clickid}   Voluum lander URL: ?cid={clickid}
(function () {
  var KEYS = ['clickid', 'cid', 'rtkcid', 'subid', 'sub1', 'sub2', 'sub3',
              'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term',
              'fbclid', 'ttclid', 'gclid'];
  var here = new URLSearchParams(window.location.search);
  var pass = [];
  KEYS.forEach(function (k) { var v = here.get(k); if (v) pass.push([k, v]); });
  if (!pass.length) return;
  document.querySelectorAll('a.offer-link').forEach(function (a) {
    try {
      var u = new URL(a.href, window.location.href);
      pass.forEach(function (p) { if (!u.searchParams.has(p[0])) u.searchParams.set(p[0], p[1]); });
      a.href = u.toString();
    } catch (e) {}
  });
})();
