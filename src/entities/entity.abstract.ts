import { IDataFile } from '../models/data.interface';

export abstract class EntityAbstract<T> {
  abstract async getData(): Promise<Map<number, T>>;
  protected data: Map<number, T> = new Map();
  protected abstract async loadData(): Promise<IDataFile[]>;
  protected abstract async loadNames(): Promise<any>;
}
