import React, { useEffect, useState } from 'react';
import { IProduct } from '../../models/category.interface';
import Item from './Item';

const ItemBody = ({ products }: { products: IProduct[] }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Название</th>
          <th scope="col">Ко-во</th>
          <th scope="col">Цена</th>
          <th scope="col">Действие</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <Item
            key={product.rub_price + product.id}
            product={product}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ItemBody;
