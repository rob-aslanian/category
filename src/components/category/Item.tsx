import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { IProduct } from '../../models/category.interface';
import { addToCard } from '../../store/actions/category.actions';

const Item = ({
  product,
  addToCard,
}: {
  product: IProduct;
  addToCard: any;
}) => {
  return (
    <tr>
      <th scope="row">{product.id}</th>
      <td>{product?.name}</td>
      <td>{product.left_amount}</td>
      <td>{product.rub_price}</td>
      <td>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => addToCard(product)}
        >
          В Корзину
        </button>
      </td>
    </tr>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  addToCard: (payload: IProduct) => dispatch(addToCard(payload)),
});

export default connect(null, mapDispatchToProps)(Item);
