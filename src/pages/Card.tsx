import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CardItem from '../components/card/CardItem';
import { IProduct } from '../models/category.interface';
import { CategoryState } from '../store/types';

const CardPage = ({
  card_list,
}: {
  card_list: Map<number, IProduct>;
}) => {
  const list = Array.from(card_list.entries()).map(([key, value]) => {
    return <CardItem key={key} product={value} />;
  });

  const priceSum = Array.from(card_list.values())
    .reduce((sum, val) => sum + val.rub_price, 0)
    .toFixed(2);

  return (
    <div>
      {card_list.size > 0 ? (
        <Fragment>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Наименование товара и описание</th>
                <th scope="col">Количество</th>
                <th scope="col">Цена</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
          <span className="float-right">
            Общая стоимость: <strong>{priceSum}</strong> руб.
          </span>
        </Fragment>
      ) : (
        <h1>Корзина пустая</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state: CategoryState) => ({
  card_list: state.card_list,
});

export default connect(mapStateToProps)(CardPage);
