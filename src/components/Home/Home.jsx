import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getCountries } from '../../redux/actions/countries';
import { setLoading } from '../../redux/actions/index';

import NavBar from '../NavBar/NavBar.jsx';
import Countries from '../Countries/Countries.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import Order from '../Order/Order.jsx';
import FilterContinent from '../FilterContinent/FilterContinent.jsx';
import FilterActivity from '../FilterActivity/FilterActivity.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import styles from './Home.module.css';


const Home = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const name = query.get('name');

  const dispatch = useDispatch();

  const theme = useSelector(state => state.theme);
  const loading = useSelector(state => state.loading);
  // const countries = useSelector(state => state.countries);

  useEffect(() => {
    
      dispatch(setLoading(true));
      dispatch(getCountries(name));
    
  }, [dispatch, name,]);

  return (
    <div className={ `${styles.container} ${styles[theme]}` }>
      <div className={ styles.header }>
        <NavBar />
      </div>
      <div className={ styles.order }>
        <Order />
      </div>
      <div className={ styles.continent }>
        <FilterContinent />
      </div>
      <div className={ styles.activity }>
        <FilterActivity />
      </div>
      <div className={ styles.grouped }>
        <div className={ styles.item }><Order /></div>
        <div className={ styles.item }><FilterContinent /></div>
        <div className={ styles.item }><FilterActivity /></div>
      </div>
      {
      loading ? <LoadingSpinner text='Loading countries...' />
      :
        <div className={ styles.countries }>
          <Pagination />
          <Countries />
        </div>
      }
    </div>
  );
};

export default Home;
