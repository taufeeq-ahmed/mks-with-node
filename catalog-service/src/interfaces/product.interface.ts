import { Product } from "../models/product.model";

export interface IProductRepository {
  create(data: Product): Promise<Product>;
  update(data: Product): Promise<Product>;
  delete(id: number): null;
  find(): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
}
