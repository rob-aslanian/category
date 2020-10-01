import { connect } from 'react-redux';
import React, { useState } from 'react';
import { CategoryState } from '../store/types';
import ItemBox from '../components/category/ItemBox';

//@ts-ignore
const MainPage = ({ categories }) => {
  const list = [...categories.entries()].map(([key, value]) => {
    return <ItemBox key={key} data={value} />;
  });

  return <div className="row">{list}</div>;
};

const mapStateToProps = (state: CategoryState) =>
  ({
    categories: state.categories,
  } as CategoryState);

export default connect(mapStateToProps)(MainPage);
