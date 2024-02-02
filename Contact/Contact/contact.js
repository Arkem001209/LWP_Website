const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

const navbarMenu = navbar.querySelector("#navbar-menu");
const navbarLinksContainer = navbar.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (clickEvent) => {
  clickEvent.stopPropagation();
});

navbarMenu.addEventListener("click", closeMobileNavbar);

document
  .getElementById("options")
  .querySelectorAll("input[name='navtype']")
  .forEach((option) => {
    option.addEventListener("change", (e) => {
      const navType = e.target.id.split("-").join(" ");
      navbarMenu.classList = navType;
    });
  });

  // Map
function initMap() {
  var businessLocation = { lat: 51.51775354902765, lng: -0.08766509280904215 };

  var map = new google.maps.Map(document.getElementById('map-container'), {
      center: businessLocation,
      zoom: 15
  });

  var marker = new google.maps.Marker({
      position: businessLocation,
      map: map,
      title: 'London Wall Partners'
  });
}
