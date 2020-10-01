import { ICategory, IProduct } from '../../models/category.interface';
import { CategoryActions, Actions, CategoryState } from '../types';

const initialState: CategoryState = {
  categories: new Map(),
  card_list: new Map(),
};

export function reducer(
  state = initialState,
  action: Actions,
): CategoryState {
  switch (action.type) {
    case CategoryActions.SET_CATEGORIES: {
      const categoriesCopy = new Map<number, ICategory>(
        state.categories,
      );
      for (const [key, value] of Array.from(
        action.payload.entries(),
      )) {
        categoriesCopy.set(key, value);
      }

      return {
        ...state,
        categories: categoriesCopy,
      };
    }
    case CategoryActions.SET_CURRENCY: {
      const categoriesCopy = new Map<number, ICategory>(
        state.categories,
      );
      for (const [key, value] of Array.from(
        categoriesCopy.entries(),
      )) {
        let newProduct = value.products.map((product) => {
          product.rub_price = +(
            product.usd_price * action.payload
          ).toFixed(2);
          return product;
        });
        value.products = newProduct;
        categoriesCopy.set(key, value);
      }

      return {
        ...state,
        categories: categoriesCopy,
      };
    }
    case CategoryActions.ADD_TO_CARD: {
      const cardItemCopy = new Map<number, IProduct>(state.card_list);
      cardItemCopy.set(action.payload.id, action.payload);

      return {
        ...state,
        card_list: cardItemCopy,
      };
    }
    case CategoryActions.REMOVE_FROM_CARD: {
      const cardItemCopy = new Map<number, IProduct>(state.card_list);
      cardItemCopy.delete(action.payload);
      return {
        ...state,
        card_list: cardItemCopy,
      };
    }
    default:
      return state;
  }
}
