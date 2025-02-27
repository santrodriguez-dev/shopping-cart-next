export interface ProductItem {
  id: number;
  title: string;
  price: number;
  slug?: string;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}

export interface Category {
  id: number;
  name: CategoryEnum | string;
  slug?: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export enum CategoryEnum {
  Clothes = "Clothes",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Miscellaneous = "Miscellaneous",
  RoyalItems = "Royal Items",
  Shoes = "Shoes",
  String = "string",
}
