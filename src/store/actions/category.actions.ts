import { ICategory, IProduct } from '../../models/category.interface';
import { Actions, CategoryActions } from '../types';

export function setCategories(
  categories: Map<number, ICategory>,
): Actions {
  return {
    type: CategoryActions.SET_CATEGORIES,
    payload: categories,
  };
}

export function setCurrency(payload: number): Actions {
  return {
    type: CategoryActions.SET_CURRENCY,
    payload,
  };
}

export function addToCard(item: IProduct): Actions {
  return {
    type: CategoryActions.ADD_TO_CARD,
    payload: item,
  };
}

export function removeFromCard(payload: number): Actions {
  return {
    type: CategoryActions.REMOVE_FROM_CARD,
    payload,
  };
}
