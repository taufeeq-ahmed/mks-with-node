import { IProductRepository } from "../interfaces/product.interface";

export class CataloogService {
  private _repository: IProductRepository;

  constructor(repository: IProductRepository) {
    this._repository = repository;
  }
}
