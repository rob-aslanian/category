import React from 'react';
import { IProduct } from '../../models/category.interface';
import RemoveButton from '../common/RemoveButton';

const CardItem = ({ product }: { product: IProduct }) => {
  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product.name}</td>
      <td>{product.left_amount}</td>
      <td>
        <strong>{product.rub_price} руб.</strong> /шт.
      </td>
      <td>
        <RemoveButton id={product.id} />
      </td>
    </tr>
  );
};

export default CardItem;
