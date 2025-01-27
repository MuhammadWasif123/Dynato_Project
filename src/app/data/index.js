
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";



const Service_1='/Service1.png';
const Service_2='/Service2.png';
const Service_3='/Service3.png';
const Service_4='/service5.png';
const facebook='/facebook.svg';
const instagram='/instagram.svg';
const twitter='/twitter.svg';
const youtube='/youtube.svg';








export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "News",
    title: "News",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const benefits = [
  { svg: "M13 10V3L4 14h7v7l9-11h-7z",mainText:"Fast Delivery",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim vel elit in tempus."},
  { svg: "M12 6v6m0 0v6m0-6h6m-6 0H6",mainText:"Easy Return",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim vel elit in tempus."},
  { svg: "M19 14l-7 7m0 0l-7-7m7 7V3",mainText:"Quality Products",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim vel elit in tempus."},

];



export const services = [
  {
    title: "Web Development",
    description:
      "We offer custom web development solutions tailored to your business needs. From simple websites to complex web applications, we bring your ideas to life with clean, efficient, and scalable code.",
    icon: Service_1, 
  },
  {
    title: "Mobile App Development",
    description:
      "Transform your ideas into intuitive and feature-rich mobile applications. Our team specializes in iOS, Android, and cross-platform app development.",
    icon: Service_2,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting captivating user experiences through thoughtful design. We focus on creating interfaces that are not only visually stunning but also intuitive and user-friendly, ensuring maximum engagement.",
    icon: Service_3,
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online presence and drive organic traffic to your website with our SEO optimization services. We employ proven strategies to improve your search engine ranking, increase visibility, and attract more visitors.",
    icon: Service_4,
  },
  // Add more services as needed
];

export const CardData = [
  {
    icon: RxCrop,
    title: "Development",
    tech: "Technology",
    content:
      "The future can be scary, but there are ways to deal with that fear..",
    backgroundImage: "/SpaceCity6.jpg",
    Image2: "/Profile1.jpeg",
     text:"Ali Khan",
     date:"26 JUN"
  },
  {
    icon: RxPencil2,
    title: "Branding",
    tech: "Popular",
    content: "An exploration into the truck's polarising design.",
    backgroundImage: "/SpaceCity9.jpg",
    Image2: "/Profile2.jpeg",
    text:"Hassan",
    date:"26 APR"
  },
  {
    icon: RxDesktop,
    title: "Design",
    tech: "Moved",
    content:
      "The future can be scary, but there are ways to deal with that fear..",
    backgroundImage: "/SpaceCity10.jpg",
    Image2: "/Profile3.jpeg",
    text:"Mark Weins",
    date:"26 JULY"
  },
  {
    icon: RxReader,
    title: "Seo",
    tech: "Top",
    content: "An exploration into the truck's polarising design",
    backgroundImage: "/SpaceCity11.jpg",
    Image2: "/Profile4.jpg",
     text:"Ahsan",
     date:"26 MAY"
  },
  {
    icon: RxAccessibility,
    title: "Management",
    tech: "Rated",
    content:
      "The future can be scary, but there are ways to deal with that fear..",
    backgroundImage: "/SpaceCity12.jpg",
    Image2: "/Profile5.jpg",
     text:"John Doe",
     date:"26 AUG"
  },
  {
    icon: RxRocket,
    title: "Production",
    tech: "Exclusive",
    content: "An exploration into the truck's polarising design",
    backgroundImage: "/SpaceCity13.jpg",
    Image2: "/Profile4.jpg",
     text:"Eyup",
     date:"26 JAN"
  },
];


export const sociallinks=[
  {"icon": facebook},
  {"icon": instagram},
  {"icon": twitter},
  {"icon": youtube},
]