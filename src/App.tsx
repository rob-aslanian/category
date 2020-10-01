import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import NavBar from './components/common/Navbar';
import { CategoryEntity } from './entities/category/category.entity';
import { ICategory } from './models/category.interface';
import CardPage from './pages/Card';
import MainPage from './pages/Main';
import {
  setCategories,
  setCurrency,
} from './store/actions/category.actions';
import { Helper } from './helpers/helper';

const App = ({
  setCategories,
  setCurrency,
}: {
  setCategories: any;
  setCurrency: any;
}) => {
  useEffect(() => {
    const changeCurrency = setInterval(
      () => setCurrency(Helper.random()),
      15000,
    );
    async function loadDataAsync() {
      try {
        const categories = await new CategoryEntity().getData();
        setCategories(categories);
      } catch (e) {
        console.warn(e);
      }
    }
    loadDataAsync();
    return () => clearInterval(changeCurrency);
  });

  return (
    <Router>
      <NavBar />
      <div className="jumbotron">
        <Route path="/" exact component={MainPage} />
        <Route path="/card" component={CardPage} />
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  setCurrency: (payload: number) => dispatch(setCurrency(payload)),
  setCategories: (payload: Map<number, ICategory>) =>
    dispatch(setCategories(payload)),
});

export default connect(null, mapDispatchToProps)(App);
