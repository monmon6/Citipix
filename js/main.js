document.addEventListener("DOMContentLoaded", function() {
  const citySelect = document.getElementById("citySelect");

  backgrounds = {
    nyc: "url('images/nyc.jpg')",
    sf: "url('images/sf.jpg')",
    la: "url('images/la.jpg')",
    atx: "url('images/austin.jpg')",
    syd: "url('images/sydney.jpg')"
  };

  citySelect.addEventListener("change", function() {
    document.body.style.backgroundImage = backgrounds[this.value];
  });
});
