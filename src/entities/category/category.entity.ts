import { Helper } from '../../helpers/helper';
import { ICategory, IProduct } from '../../models/category.interface';
import { IDataFile } from '../../models/data.interface';
import { EntityAbstract } from '../entity.abstract';

export class CategoryEntity extends EntityAbstract<ICategory> {
  async getData() {
    const [data, names] = await Promise.all([
      this.loadData(),
      this.loadNames(),
    ]);

    for (const value of data) {
      const categoryID = value.G;
      const productID = value.T;

      if (names[categoryID]) {
        if (names[categoryID]['B'][productID]) {
          let products: IProduct[] =
            this.data.get(categoryID)?.products || [];
          let product = names[categoryID]['B'][productID];

          products.push({
            id: productID,
            name: product.N,
            left_amount: value.P,
            usd_price: value.C,
            rub_price: +(value.C * Helper.random()).toFixed(2),
          });

          this.data.set(categoryID, {
            id: categoryID,
            category_name: names[categoryID].G,
            products,
          });
        }
      }
    }

    return this.data;
  }

  get formatedData() {
    return this.data;
  }

  protected async loadData(): Promise<IDataFile[]> {
    return await import('../../data/data.json').then(
      (el) => el.Value.Goods,
    );
  }
  protected async loadNames(): Promise<any> {
    return await import('../../data/names.json').then(
      (el) => el.default,
    );
  }
}
