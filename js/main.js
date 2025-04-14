
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
  
  //العملات
  
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
  //end
  
  
  
  //sidebar categories
  // إضافة الأحداث للتحكم في ظهور السايدبار
  window.addEventListener("load", function() {
      const categorySidebar = document.querySelector(".category-sidebar");
      const sidebarToggleButton = document.querySelector(".category-sidebar-toggle");
    
      // التحقق إذا كانت الصفحة هي صفحة الهوم
      if (window.location.pathname === "/home.html") {
        // السايدبار يكون مفتوح في صفحة الهوم
        categorySidebar.classList.add("active");
      } else {
        // في باقي الصفحات يجب أن يكون مغلقًا بشكل افتراضي
        categorySidebar.classList.remove("active");
      }
    
      // حدث النقر على الزر لفتح وإغلاق السايدبار
      if (sidebarToggleButton) {
        sidebarToggleButton.addEventListener("click", function() {
          categorySidebar.classList.toggle("active");
        });
      }
    });
    //end sidebar categories
  
    
    
  //details sidebar
  function showPopup(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function hidePopup(id) {
    document.getElementById(id).style.display = "none";
  }
  
  //end details
  
  //shop
  function openShopPopup() {
      document.getElementById('shop-popup').style.display = 'block';
    }
    
    function closeShopPopup() {
      document.getElementById('shop-popup').style.display = 'none';
    }
    //end shop
  
  //products
  // التنقل بين التصنيفات
  const tabLinks = document.querySelectorAll(".tab-link");
  const productGroups = document.querySelectorAll(".product-groups");
  
  tabLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
  
      // تفعيل اللينك المختار
      tabLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
  
      // اظهار المجموعة المختارة
      productGroups.forEach(group => group.classList.add("d-none"));
      document.getElementById(link.dataset.tab).classList.remove("d-none");
    });
  });
  
  // التنقل بين مجموعات نفس التصنيف
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  
  rightArrow.addEventListener("click", () => moveGroup(1));
  leftArrow.addEventListener("click", () => moveGroup(-1));
  
  function moveGroup(direction) {
    const activeTab = document.querySelector(".tab-link.active").dataset.tab;
    const groups = document.querySelectorAll(`#${activeTab} .product-group`);
  
    let currentIndex = Array.from(groups).findIndex(group => group.classList.contains("active"));
  
    groups[currentIndex].classList.remove("active");
  
    currentIndex += direction;
  
    if (currentIndex >= groups.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = groups.length - 1;
  
    groups[currentIndex].classList.add("active");
  }
  //end products
  
  
     //swiper bundle
  // إذا كنت تستخدم SwiperJS
  var swiper = new Swiper('.swiper', {
      slidesPerView: 'auto', // لتحديد عدد الكروت المعروضة بناءً على الحجم
      spaceBetween: 10, // المسافة بين الكروت
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    //end swiper
  
  
  
  // start shop
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
  //end
  
  
  //shop all
  
  // هات كل اللينكات
  const links = document.querySelectorAll('.category-item a');
  
  // هات رابط الصفحة الحالي
  const currentPage = window.location.pathname;
  
  // شوف أي رابط يتوافق مع الصفحة الحالية واضيف عليه active
  links.forEach(link => {
    if (link.getAttribute('href') && currentPage.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });