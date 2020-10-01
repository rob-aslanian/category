export interface ICategory {
  id: number;
  category_name: string;
  products: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  left_amount: number;
  usd_price: number;
  rub_price: number;
}
