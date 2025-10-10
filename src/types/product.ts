export type Product = {
  encrypted_id: any;
  slug: any;
  photo: string;
  name: string;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
