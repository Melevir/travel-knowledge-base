/* Wrap star rating sequences (★☆½) in a <span> for CSS styling */
document.addEventListener("DOMContentLoaded", function () {
  var starPattern = /([★☆½]{2,})/g;
  document.querySelectorAll(".md-typeset td, .md-typeset li, .md-typeset p").forEach(function (el) {
    if (!el.querySelector(".star-rating") && starPattern.test(el.textContent)) {
      starPattern.lastIndex = 0;
      el.innerHTML = el.innerHTML.replace(starPattern, '<span class="star-rating">$1</span>');
    }
  });
});
