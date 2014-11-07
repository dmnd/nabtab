var script = document.createElement('script');
script.textContent = '(' + function() {
  var prev = window.open;
  window.open = function(url, id, opts) {
    // Sorry nab, you've demonstrated you can't be trusted with window.open
    opts = "";
    return prev(url, id, opts);
  };
} + ')();';
document.head.appendChild(script);
