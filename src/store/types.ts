import { ICategory, IProduct } from '../models/category.interface';

export interface CategoryState {
  categories: Map<number, ICategory>;
  card_list: Map<number, IProduct>;
}

export enum CategoryActions {
  SET_CATEGORIES = '[CATEGORY] SET_CATEGORIES',
  SET_CURRENCY = '[CATEGORY] SET_CURENCY',
  ADD_TO_CARD = '[CARD] ADD_TO_CARD',
  GET_FROM_CARD = '[CARD] GET_FROM_CARD',
  REMOVE_FROM_CARD = '[CARD] REMOVE_FROM_CARD',
}

interface SetCategoriesAction {
  type: typeof CategoryActions.SET_CATEGORIES;
  payload: Map<number, ICategory>;
}

interface SetCurrencyAction {
  type: typeof CategoryActions.SET_CURRENCY;
  payload: number;
}

interface AddToCardAction {
  type: typeof CategoryActions.ADD_TO_CARD;
  payload: IProduct;
}

interface RemoveFromCardAction {
  type: typeof CategoryActions.REMOVE_FROM_CARD;
  payload: number;
}

interface GetFromCardAction {
  type: typeof CategoryActions.GET_FROM_CARD;
}

export type Actions =
  | SetCategoriesAction
  | SetCurrencyAction
  | GetFromCardAction
  | RemoveFromCardAction
  | AddToCardAction;
