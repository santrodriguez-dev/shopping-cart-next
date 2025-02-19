export interface ProductItem {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
}

export interface Category {
  id: number;
  name: CategoryEnum;
  image: string;
  creationAt: Date;
  updatedAt: Date;
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
