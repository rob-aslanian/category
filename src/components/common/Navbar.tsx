import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CategoryState } from '../../store/types';

//@ts-ignore
const NavBar = ({ amount }) => {
  return (
    <nav className="navbar navbar-expand-lg   bg-light">
      <ul className="navbar-nav">
        <li className="nav-item mr-4">
          <button type="button" className="btn btn-light">
            <Link to="/">Главная</Link>
          </button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-light">
            <Link to="/card">Корзина</Link>
            <span className="ml-2 badge badge-info">{amount}</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};
const mapStateToProps = (state: CategoryState) => ({
  amount: state.card_list.size,
});

export default connect(mapStateToProps)(NavBar);
