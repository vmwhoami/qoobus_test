import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../components/layout';
import Title from '../components/Title';
import ChartNav from '../components/ChartNav';
import ChartFilter from '../components/chartFilter/ChartFilter';
import Chart from '../components/chart/chart';
import { getDowloads } from '../redux/downloadsReducer/actions';

const Dashboard = () => {
  const isLoggedIn = useSelector((state) => state.register.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDowloads());
    const interval = setInterval(() => {
      dispatch(getDowloads());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Title title="Dashboard" />
      <ChartNav />
      <ChartFilter />
      <Chart />
    </Layout>
  );
};

export default Dashboard;
