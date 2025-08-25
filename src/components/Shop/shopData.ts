import { Product } from "@/types/product";
const shopData: Product[] = [
  {
    title: "Waist Band",
    reviews: 15,
    price: 59.0,
    discountedPrice: 29.0,
    id: 1,
    imgs: {
      thumbnails: [
        "https://interliners.net/wp-content/uploads/2021/03/Waist-band-247x296.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/Waist-band-247x296.jpg",
      ],
      previews: [
        "https://interliners.net/wp-content/uploads/2021/03/Waist-band-247x296.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/Waist-band-247x296.jpg",
      ],
    },
  },
  {
    title: "Threads",
    reviews: 5,
    price: 899.0,
    discountedPrice: 99.0,
    id: 2,
    imgs: {
      thumbnails: [
        "https://interliners.net/wp-content/uploads/2021/03/Thread-collection.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/Thread-collection.jpg",
      ],
      previews: [
        "https://interliners.net/wp-content/uploads/2021/03/Thread-collection.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/Thread-collection.jpg",
      ],
    },
  },
  {
    title: "Straight Cut",
    reviews: 5,
    price: 59.0,
    discountedPrice: 29.0,
    id: 3,
    imgs: {
      thumbnails: [
        "https://interliners.net/wp-content/uploads/2021/03/straight-cut-5-247x296.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/straight-cut-5-247x296.jpg",
      ],
      previews: [
        "https://interliners.net/wp-content/uploads/2021/03/straight-cut-5-247x296.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/straight-cut-5-247x296.jpg",
      ],
    },
  },
  {
    title: "Perforated Tapes",
    reviews: 6,
    price: 59.0,
    discountedPrice: 29.0,
    id: 4,
    imgs: {
      thumbnails: [
        "https://interliners.net/wp-content/uploads/2021/03/Interlining-Tape-Perforated-for-The-Waistband-247x296.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/Interlining-Tape-Perforated-for-The-Waistband-247x296.jpg",
      ],
      previews: [
        "https://interliners.net/wp-content/uploads/2021/03/Interlining-Tape-Perforated-for-The-Waistband-247x296.jpg",
        "https://interliners.net/wp-content/uploads/2021/03/Interlining-Tape-Perforated-for-The-Waistband-247x296.jpg",
      ],
    },
  },
  // {
  //   title: "Shoulder Pads/Sleeve Heads",
  //   reviews: 3,
  //   price: 99.0,
  //   discountedPrice: 29.0,
  //   id: 5,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/Sleeve-head-1-247x296.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/Sleeve-head-1-247x296.jpg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/Sleeve-head-1-247x296.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/Sleeve-head-1-247x296.jpg",
  //     ],
  //   },
  // },
  // {
  //   title: "Pocketing",
  //   reviews: 15,
  //   price: 59.0,
  //   discountedPrice: 29.0,
  //   id: 6,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/pocketing-collection.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/pocketing-collection.jpg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/pocketing-collection.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/pocketing-collection.jpg",
  //     ],
  //   },
  // },
  // {
  //   title: "Cuffs, Collars & Bands",
  //   reviews: 15,
  //   price: 59.0,
  //   discountedPrice: 29.0,
  //   id: 8,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/cuffs-2-247x296.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/cuffs-2-247x296.jpg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/cuffs-2-247x296.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/cuffs-2-247x296.jpg",
  //     ],
  //   },
  // },
  // {
  //   title: "Chest Piece",
  //   reviews: 15,
  //   price: 59.0,
  //   discountedPrice: 29.0,
  //   id: 9,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/chest-pc-whole-247x296.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/chest-pc-whole-247x296.jpg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/chest-pc-whole-247x296.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/chest-pc-whole-247x296.jpg",
  //     ],
  //   },
  // },
  // {
  //   title: "Canvas",
  //   reviews: 15,
  //   price: 59.0,
  //   discountedPrice: 29.0,
  //   id: 10,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/9892.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/9892.jpg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/9892.jpg",
  //       "https://interliners.net/wp-content/uploads/2021/03/9892.jpg",
  //     ],
  //   },
  // },
  // {
  //   title: "Shirts, Blazers & Jackets",
  //   reviews: 15,
  //   price: 59.0,
  //   discountedPrice: 29.0,
  //   id: 11,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/HH-Chest-1-and-2-1-247x296.jpeg",
  //       "https://interliners.net/wp-content/uploads/2021/03/HH-Chest-1-and-2-1-247x296.jpeg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/HH-Chest-1-and-2-1-247x296.jpeg",
  //       "https://interliners.net/wp-content/uploads/2021/03/HH-Chest-1-and-2-1-247x296.jpeg",
  //     ],
  //   },
  // },
  // {
  //   title: "Fusing Machines",
  //   reviews: 15,
  //   price: 59.0,
  //   discountedPrice: 29.0,
  //   id: 12,
  //   imgs: {
  //     thumbnails: [
  //       "https://interliners.net/wp-content/uploads/2021/03/Compressor-247x296.jpeg",
  //       "https://interliners.net/wp-content/uploads/2021/03/Compressor-247x296.jpeg",
  //     ],
  //     previews: [
  //       "https://interliners.net/wp-content/uploads/2021/03/Compressor-247x296.jpeg",
  //       "https://interliners.net/wp-content/uploads/2021/03/Compressor-247x296.jpeg",
  //     ],
  //   },
  // },
];

export default shopData;
