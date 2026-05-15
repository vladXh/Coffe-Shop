window.addEventListener("DOMContentLoaded", () => {

  const showcase = document.getElementById("menuShowcase");

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