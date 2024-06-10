
export const navs = [
  {
    id: 1,
    title: "Home",
    links: "/"
  },
 
  {
    id: 3,
    title: "Doctors",
    links: "/doctor",
    child_navs: [
      
      {
        id: 0,
        title: "Appoinments",
        links: "/doctors/appoinments",
        icon:"fa-solid fa-calendar-check"
      },
    ],
  },

  {
    id: 5,
    title: "Pharmacy",
    links: "/pharmacy",
    child_navs: [
      {
        id: 1,
        title: "Pharmacy",
        links: "/pharmacy/pharmacy",
        icon:"fa-solid fa-prescription-bottle-medical"
      },
      {
        id: 2,
        title: "Product",
        links: "/pharmacy/product",
        icon:"fa-solid fa-car-battery"
      },
      {
        id: 3,
        title: "Cart",
        links: "/pharmacy/cart",
        icon:"fa-solid fa-cart-plus"
      },
      {
        id: 4,
        title: "Pharmacy Details",
        links: "/pharmacy/details",
        icon:"fa-solid fa-circle-info"
      },
    ],
  },
  {
    id: 6,
    title: "Blog",
    links: "/blog",
    child_navs: [
      {
        id: 1,
        title: "Blog List",
        links: "/blog/list",
        icon:"fa-solid fa-blog"
      },
      {
        id: 2,
        title: "Blog Details",
        links: "/blog/details",
        icon:"fa-brands fa-blogger-b"
      },
    ],
  },
  {
    id: 7,
    title: "Page",
    links: "/",
    child_navs: [
      {
        id: 1,
        title: "Contact Us",
        links: "/contactus", 
        icon:"fa-regular fa-address-book"
      },
      {
        id: 2,
        title: "Voice Call",
        links: "/page/voice-call", 
        icon:"fa-solid fa-video"
      },
      {
        id: 3,
        title: "Video Call",
        links: "/page/video-call",
        icon:"fa-solid fa-phone-volume"
      },
    ],
  },

];
