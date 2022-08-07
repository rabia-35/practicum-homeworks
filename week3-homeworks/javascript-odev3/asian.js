// array içerisindeki veriler
let menu=[
    {
        id: "tteok" ,
        title: "Tteokbokki",
        category:"korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl.jpg ",
        desc:"Spicy rice cakes, serving with fish cake."
    }, 
     {
        id: "chick" ,
        title: "Chicken Ramen",
        category:"japan",
        price: 7.99,
        img: "https://www.kitchensanctuary.com/wp-content/uploads/2020/12/Quick-Chicken-Ramen-square-FS-22-500x500.jpg",
        desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg."
    },

    {
        id: "bibim" ,
        title: "Bibimbap",
        category:"korea",
        price: 8.99,
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/bibimbap-2d68e268-6c19-4ff8-b5f8-1145372450cf.jpg",
        desc:"Boiling vegetables, serving with special hot sauce"
    },
     {
        id: "danda" ,
        title: "Dan Dan Mian",
        category:"china",
        price: 5.99 ,
        img: "https://i2.wp.com/seonkyounglongest.com/wp-content/uploads/2019/10/Dan-Dan-Noodles-11.jpg?fit=2000%2C1333&ssl=1",
        desc:"Dan dan noodle, serving with green onion"
    },
     {
        id: "yangz" ,
        title: "Yangzhou Fried Rice",
        category:"china",
        price: 12.99,
        img: "https://www.chinayummyfood.com/wp-content/uploads/2019/09/Yang-Chow-Fried-Rice-500x500.jpg",
        desc:"Yangzhou style fried rice, serving with bean and pickles"
    },
     {
        id: "onigi" ,
        title: "Onigiri",
        category:"japan",
        price: 9.99 ,
        img: "https://i0.wp.com/coupleeatsfood.com/wp-content/uploads/2017/04/Tuna-Mayo-Onigiri-Japanese-Rice-Balls.jpg?fit=1080%2C1077",
        desc:"Rice Sandwich, serving with soy sauce"
    },
    {
         id: "jajan" ,
         title: "Jajangmyeon",
         category:"korea",
         price: 15.99,
         img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-735x613.jpg"
    },
     {
        id: "mayis" ,
        title: "Ma Yi Shang Shu",
        category:"china",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc:"Hot pepper sauce noodle, serving with soy bean and onion"
    },
     {
        id: "doroy" ,
        title: "Doroyaki",
        category:"japan",
        price: 3.99,
        img: "https://www.pratikevyemekleri.com/wp-content/uploads/2021/03/Dorayaki-tarifi.jpg",
        desc:"Red bean paste dessert, serving with honey."
    },
];

const section = document.querySelector(".section-center"); 
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce( // verilerdeki categorylerin categories' e eklenmesi
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

const categoryButton = () => { // categories'deki category'lerin buttonnun id'sine ve value'suna eklenmesi
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns; // oluşturduğumuz buttonların DOM içeriğine aktarılması
  const filterButtons = document.querySelectorAll(".btn-item"); // oluşturduğumuz buttonlar

  //filter menu
  filterButtons.forEach((btn) => { 
    btn.addEventListener("click", (e) => {
      const categoryName = e.currentTarget.dataset.id; // herbir butona bastığımızda butonun id'sini categoryName değişkenine tanımlanması
      console.log(categoryName);
      const menuCategory = menu.filter((item) => { // elimizdeki category name göre verilerin filter edilmesi
        if (item.category === categoryName) {
          return item;
        }
      });
      if (categoryName === "All") { // all verilerde belirtilen bir kategory olmadığı için ona ayrı bir ifade yazmalıyız
        menuList(menu); // eğer All buttonuna bastıysak tüm veriler gelsin
      } else {
        menuList(menuCategory); // bunun dışında bastığımız buttona  göre veriler gelsin
      }
    });
  });
};

const menuList = (menuItems) => { // elimizdeki verilerin section alanında gösterilimi
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryButton();


