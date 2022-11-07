import { Image } from "react-grid-gallery";

import './ImageGrid.css';

import home from "../../assets/img/homegrid/003.png"
import home1 from "../../assets/img/homegrid/002.png"
import home2 from "../../assets/img/homegrid/004.png"
import home3 from "../../assets/img/homegrid/005.png"
import home4 from "../../assets/img/homegrid/006.png"
import home5 from "../../assets/img/homegrid/007.png"
import home6 from "../../assets/img/homegrid/008.png"
import home7 from "../../assets/img/homegrid/009.png"
import home8 from "../../assets/img/homegrid/0018.png"
import home9 from "../../assets/img/homegrid/0011.png"
import home10 from "../../assets/img/homegrid/0012.png"
import home11 from "../../assets/img/homegrid/003.png"
import home12 from "../../assets/img/homegrid/0014.png"
import home13 from "../../assets/img/homegrid/004.png"
import home14 from "../../assets/img/homegrid/0016.png"
import home15 from "../../assets/img/homegrid/0016.png"
import home16 from "../../assets/img/homegrid/008.png"
import home17 from "../../assets/img/homegrid/0016.png"


export interface CustomImage extends Image {
  original: string;
}

export const images: CustomImage[] = [
  {
    src: home,
    original: home,
    width: 320,
    height: 174,
    className:"jhon",
    tags: [
      // { value: "Nature", title: "Nature" },
      // { value: "Flora", title: "Flora" },
    ],
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: home2,
    original: home2,
    width: 320,
    height: 212,
    caption: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: home3,
    original: home3,
    width: 320,
    height: 212,
    caption: "Color Pencils (Jeshu John - designerspics.com)",
  },
  {
    src: home4,
    original: home4,
    width: 320,
    height: 213,
    caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
  },
  {
    src: home5,
    original: home5,
    width: 320,
    height: 183,
    caption: "37H (gratispgraphy.com)",
  },
  {
    src: home6,
    original: home6,
    width: 240,
    height: 320,
    // tags: [{ value: "Nature", title: "Nature" }],
    caption: "8H (gratisography.com)",
  },
  {
    src: home7,
    original: home7,
    width: 320,
    height: 190,
    caption: "286H (gratisography.com)",
  },
  {
    src: home8,
    original: home8,
    width: 320,
    height: 148,
    // tags: [{ value: "People", title: "People" }],
    caption: "315H (gratisography.com)",
  },
  {
    src: home9,
    original: home9,
    width: 320,
    height: 213,
    caption: "201H (gratisography.com)",
  },
  {
    src: home10,
    original: home10,
    alt: "Big Ben - London",
    width: 248,
    height: 320,
    caption: "Big Ben (Tom Eversley - isorepublic.com)",
  },
  {
    src: home11,
    original: home11,
    alt: "Red Zone - Paris",
    width: 320,
    height: 113,
    // tags: [{ value: "People", title: "People" }],
    caption: "Red Zone - Paris (Tom Eversley - isorepublic.com)",
  },
  {
    src: home12,
    original: home12,
    alt: "Wood Glass",
    width: 313,
    height: 320,
    caption: "Wood Glass (Tom Eversley - isorepublic.com)",
  },
  {
    src: home13,
    original: home13,
    width: 320,
    height: 213,
    caption: "Flower Interior Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: home,
    original: home,
    width: 320,
    height: 194,
    caption: "Old Barn (Tom Eversley - isorepublic.com)",
  },
  {
    src: home15,
    original: home15,
    alt: "Cosmos Flower",
    width: 320,
    height: 213,
    caption: "Cosmos Flower Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: home16,
    original: home16,
    width: 271,
    height: 320,
    caption: "Orange Macro (Tom Eversley - isorepublic.com)",
  },
  {
    src: home17,
    original: home17,
    width: 320,
    height: 213,
    // tags: [
    //   { value: "Nature", title: "Nature" },
    //   { value: "People", title: "People" },
    // ],
    caption: "Surfer Sunset (Tom Eversley - isorepublic.com)",
  },
  // // {
  // //   src: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
  // //   original: "https://c1.staticflickr.com/9/8707/28868704912_cba5c6600e_b.jpg",
  // //   width: 320,
  // //   height: 213,
  // //   tags: [
  // //     { value: "People", title: "People" },
  // //     { value: "Sport", title: "Sport" },
  // //   ],
  // //   caption: "Man on BMX (Tom Eversley - isorepublic.com)",
  // // },
  // // {
  // //   src: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
  // //   original: "https://c4.staticflickr.com/9/8578/28357117603_97a8233cf5_b.jpg",
  // //   width: 320,
  // //   height: 213,
  // //   caption: "Ropeman - Thailand (Tom Eversley - isorepublic.com)",
  // // },
  // // {
  // //   src: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
  // //   original: "https://c4.staticflickr.com/8/7476/28973628875_069e938525_b.jpg",
  // //   width: 320,
  // //   height: 213,
  // //   caption: "Time to Think (Tom Eversley - isorepublic.com)",
  // // },
  // // {
  // //   src: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
  // //   original: "https://c6.staticflickr.com/9/8593/28357129133_f04c73bf1e_b.jpg",
  // //   width: 320,
  // //   height: 179,
  // //   tags: [
  // //     { value: "Nature", title: "Nature" },
  // //     { value: "Fauna", title: "Fauna" },
  // //   ],
  // //   caption: "Untitled (Jan Vasek - jeshoots.com)",
  // // },
  // // {
  // //   src: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
  // //   original: "https://c6.staticflickr.com/9/8893/28897116141_641b88e342_b.jpg",
  // //   width: 320,
  // //   height: 215,
  // //   tags: [{ value: "People", title: "People" }],
  // //   caption: "Untitled (moveast.me)",
  // // },
  // // {
  // //   src: home,
  // //   original: home,
  // //   width: 257,
  // //   height: 320,
  // //   caption: "A photo by 贝莉儿 NG. (unsplash.com)",
  // // },
  // // {
  // //   src: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
  // //   original: "https://c7.staticflickr.com/9/8824/28868764222_19f3b30773_b.jpg",
  // //   width: 226,
  // //   height: 320,
  // //   caption: "A photo by Matthew Wiebe. (unsplash.com)",
  // // },
];
