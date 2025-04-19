// ====== Sidebar Menu ======
// ====== Sidebar Menu ======
function toggleMenu(section) {
  let sidebar = document.getElementById("sidebar");
  let links = document.getElementById("links");
  let extra = document.getElementById("extra");
  let btnLinks = document.getElementById("btn-links");
  let btnExtra = document.getElementById("btn-extra");
  let overlay = document.getElementById("overlay");

  if (!sidebar || !overlay) return;

  if (section === 'close') {
    sidebar.style.transform = "translateX(-100%)";
    overlay.style.display = "none";
  } else {
    sidebar.style.transform = "translateX(0)";
    overlay.style.display = "block";

    links.style.display = section === 'links' ? 'block' : 'none';
    extra.style.display = section === 'extra' ? 'block' : 'none';

    btnLinks.classList.toggle('active', section === 'links');
    btnExtra.classList.toggle('active', section === 'extra');
  }
}


document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth <= 768) {
    toggleMenu('links');
  }
});

// ====== Currency Dropdown ======
function toggleCurrencyMenu() {
  let currencyOptions = document.querySelector(".currency-options");
  if (currencyOptions) {
    currencyOptions.classList.toggle("open");
  }
}

function selectCurrency(currency, flagUrl) {
  let currencySelected = document.querySelector(".currency-selected");
  let currencyOptions = document.querySelector(".currency-options");

  if (currencySelected) {
    currencySelected.querySelector(".currency-text").textContent = currency;
    currencySelected.querySelector(".currency-flag").style.backgroundImage = `url('${flagUrl}')`;
  }

  if (currencyOptions) {
    currencyOptions.classList.remove("open");
  }
}

document.addEventListener("click", function (event) {
  let currencyWrapper = document.querySelector(".currency-select-wrapper");
  let currencyOptions = document.querySelector(".currency-options");

  if (!currencyWrapper.contains(event.target) && currencyOptions) {
    currencyOptions.classList.remove("open");
  }
});

// ====== Sidebar Categories ======
window.addEventListener("load", function () {
  const categorySidebar = document.querySelector(".category-sidebar");
  const sidebarToggleButton = document.querySelector(".category-sidebar-toggle");

  if (window.location.pathname === "/home.html") {
    categorySidebar.classList.add("active");
  } else {
    categorySidebar.classList.remove("active");
  }

  if (sidebarToggleButton) {
    sidebarToggleButton.addEventListener("click", function () {
      categorySidebar.classList.toggle("active");
    });
  }
});

// ====== Details Popup ======
function showPopup(id) {
  document.getElementById(id).style.display = "block";
}

function hidePopup(id) {
  document.getElementById(id).style.display = "none";
}

// ====== Shop Popup ======
function openShopPopup() {
  document.getElementById('shop-popup').style.display = 'block';
}

function closeShopPopup() {
  document.getElementById('shop-popup').style.display = 'none';
}

// ====== Product Tabs & Groups ======
let currentGroup = 1;
const totalGroups = document.querySelectorAll('.products-group').length;

// تفعيل الجروب الحالي
function showGroup(groupNumber) {
  document.querySelectorAll('.products-group').forEach(group => {
    group.classList.remove('active');
  });
  document.getElementById('group-' + groupNumber).classList.add('active');
}

// السهم الشمال
document.querySelector('.left-arrow').addEventListener('click', () => {
  currentGroup--;
  if (currentGroup < 1) currentGroup = totalGroups;
  showGroup(currentGroup);
});

// السهم اليمين
document.querySelector('.right-arrow').addEventListener('click', () => {
  currentGroup++;
  if (currentGroup > totalGroups) currentGroup = 1;
  showGroup(currentGroup);
});

// أول مرة — خلي أول جروب ظاهر
showGroup(1);

// ====== Swiper JS ======
var swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

// ====== Toggle Product Details ======
function toggleDetails(button) {
  var card = button.parentElement;
  var details = card.querySelector(".details");
  var actionBar = card.querySelector(".action-bar");

  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block";
    actionBar.style.display = "flex";
    button.innerHTML = "🔼 إخفاء التفاصيل";
  } else {
    details.style.display = "none";
    actionBar.style.display = "none";
    button.innerHTML = "🔽 عرض التفاصيل";
  }
}

// ====== Highlight Active Category Link ======
const categoryLinks = document.querySelectorAll('.category-item a');
const currentPage = window.location.pathname;

categoryLinks.forEach(link => {
  if (link.getAttribute('href') && currentPage.includes(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});

