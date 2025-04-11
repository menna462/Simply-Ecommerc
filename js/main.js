
    //men 
    function toggleMenu(section) {
    let sidebar = document.getElementById("sidebar");
    let links = document.getElementById("links");
    let extra = document.getElementById("extra");
    let btnLinks = document.getElementById("btn-links");
    let btnExtra = document.getElementById("btn-extra");
    let overlay = document.getElementById("overlay");

    if (!sidebar || !overlay) return; // تحقق من وجود العناصر

    if (section === 'close') {
        sidebar.style.transform = "translateX(-100%)";
        overlay.style.display = "none"; // إخفاء التعتيم
    } else {
        sidebar.style.transform = "translateX(0)";
        overlay.style.display = "block"; // إظهار التعتيم

        links.style.display = section === 'links' ? 'block' : 'none';
        extra.style.display = section === 'extra' ? 'block' : 'none';

        btnLinks.classList.toggle('active', section === 'links');
        btnExtra.classList.toggle('active', section === 'extra');
    }
}

// إظهار القائمة بشكل افتراضي عند فتح المنيو
document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        toggleMenu('links');
    }
});

//فتح وإغلاق قائمة العملات
function toggleCurrencyMenu() {
    let currencyOptions = document.querySelector(".currency-options");
    if (currencyOptions) {
        currencyOptions.classList.toggle("open");
    }
}

// تغيير العملة عند الضغط على أي خيار
function selectCurrency(currency, flagUrl) {
    let currencySelected = document.querySelector(".currency-selected");
    if (currencySelected) {
        currencySelected.querySelector(".currency-text").textContent = currency;
        currencySelected.querySelector(".currency-flag").style.backgroundImage = `url('${flagUrl}')`;
    }

    // إغلاق القائمة بعد الاختيار
    if (currencyOptions) {
        currencyOptions.classList.remove("open");
    }
}

// إغلاق القائمة عند النقر خارجها
document.addEventListener("click", function (event) {
    let currencyWrapper = document.querySelector(".currency-select-wrapper");
    let currencyOptions = document.querySelector(".currency-options");
    if (!currencyWrapper.contains(event.target) && currencyOptions) {
        currencyOptions.classList.remove("open");
    }
});

//sidebar categories
document.querySelector(".category-sidebar-toggle").addEventListener("click", function() {
    let categorySidebar = document.querySelector(".category-sidebar");
    if (categorySidebar) {
        categorySidebar.classList.toggle("active");
    }
});

//shop
function showPopup(id) {
    let popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "block";
    }
}

function hidePopup(id) {
    let popup = document.getElementById(id);
    if (popup) {
        popup.style.display = "none";
    }
}

//shop
function openShopPopup() {
    let shopPopup = document.getElementById("shop-popup");
    if (shopPopup) {
        shopPopup.style.display = "block";
    }
}

function closeShopPopup() {
    let shopPopup = document.getElementById("shop-popup");
    if (shopPopup) {
        shopPopup.style.display = "none";
    }
}

//products

let currentGroup = 1;
const totalGroups = 2; // عدد المجموعات (هنا فقط 2 مجموعة)

// وظيفة لعرض المجموعة التالية
function showNextGroup() {
    // إخفاء المجموعة الحالية
    document.getElementById(`group${currentGroup}`).classList.remove('active');

    // التحقق من المجموعة التالية
    currentGroup = currentGroup === totalGroups ? 1 : currentGroup + 1;

    // عرض المجموعة التالية
    document.getElementById(`group${currentGroup}`).classList.add('active');
}

// وظيفة لعرض المجموعة السابقة
function showPrevGroup() {
    // إخفاء المجموعة الحالية
    document.getElementById(`group${currentGroup}`).classList.remove('active');

    // التحقق من المجموعة السابقة
    currentGroup = currentGroup === 1 ? totalGroups : currentGroup - 1;

    // عرض المجموعة السابقة
    document.getElementById(`group${currentGroup}`).classList.add('active');
}

// إضافة الأحداث للأسهم
document.querySelector('.left-arrow').addEventListener('click', showPrevGroup);
document.querySelector('.right-arrow').addEventListener('click', showNextGroup);

   //swiper bundle
var swiper = new Swiper(".swiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 3, /* عرض 3 كروت بجانب بعض */
        pagination: { el: ".swiper-pagination", clickable: true },
        navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
