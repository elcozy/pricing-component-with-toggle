const togglePrice = document.querySelector(".togglePrice");
const priceAnnually = document.querySelectorAll(".priceAnnually");
const priceMonthly = document.querySelectorAll(".priceMonthly");

togglePrice.addEventListener("click", toggleSwitch);

function toggleSwitch() {
  if (togglePrice.checked) {
    priceAnnually.forEach((x) => x.classList.add("hidden"));
    priceMonthly.forEach((x) => x.classList.remove("hidden"));
  } else {
    priceMonthly.forEach((x) => x.classList.add("hidden"));
    priceAnnually.forEach((x) => x.classList.remove("hidden"));
  }
}
