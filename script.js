window.addEventListener("DOMContentLoaded", () => {

  let showcase;
  
  if (window.innerWidth > 768) {
    showcase = document.getElementById("menuShowcaseDesktop");
  } else {
    showcase = document.getElementById("menuShowcase");
  }

  const menuItems = [
    {
      name: "Noir Tiramisu",
      price: "12,99 $",
      image: "menuItems/pic1 1.png"
    },
    {
      name: "Crème Velours",
      price: "13,49 $",
      image: "menuItems/pic1 1-2.png"
    },
    {
      name: "Velours Rouge",
      price: "15,99 $",
      image: "menuItems/pic1 1-3.png"
    },
    {
      name: "Nuage Matcha",
      price: "12,99 $",
      image: "menuItems/pic1 1-4.png"
    },
    {
      name: "Lune Chocolat",
      price: "11,49 $",
      image: "menuItems/pic1 1-5.png"
    },
    {
      name: "Citron Blanc",
      price: "11,49 $",
      image: "menuItems/pic1 1-6.png"
    }
  ];

  menuItems.forEach(item => {
    const menuItem = document.createElement("a");
    menuItem.className = "menuItem";
    menuItem.href = "#";

    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      
      <div class="menuItemText">
        <p class="fullOpacity">${item.name}</p>
        <img class="menu5Stars" src="icons/5stars.svg" alt="">
        <p class="menuItemPrice">${item.price}</p>
      </div>
    `;

    showcase.appendChild(menuItem);
  });

});



const elements = document.querySelectorAll(
    "#mainContainer h1, \
     #mainContainer h2, \
     #mainContainer h3, \
     #mainContainer p, \
     #mainContainer img, \
     #mainContainer button, \
     #mainContainer a, \
     #mainContainer div"
);

elements.forEach((element) => {

    // Save original opacity
    const originalOpacity = getComputedStyle(element).opacity;

    element.style.setProperty(
        "--original-opacity",
        originalOpacity
    );

    element.classList.add("animate");
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }

    });
}, {
    threshold: 0.15
});

elements.forEach((element) => {
    observer.observe(element);
});




const nav = document.querySelector("nav");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {

    if (window.scrollY <= 50) {
        nav.classList.remove("hideNav");
    }
    else if (window.scrollY > lastScrollY) {
        // scrolling down
        nav.classList.add("hideNav");
    }
    else {
        // scrolling up
        nav.classList.remove("hideNav");
    }

    lastScrollY = window.scrollY;

});

const navBtn = document.querySelector("#navBtn");
const sideMenu = document.querySelector("#sideMenu");

navBtn.addEventListener("click", () => {
    sideMenu.classList.toggle("showMenu");
});