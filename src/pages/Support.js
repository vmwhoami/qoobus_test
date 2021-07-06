import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Layout from '../components/layout';
import Title from '../components/Title';
import FindUser from '../components/FindUser/FindUser';
import UsersResults from '../components/UsersResults/UsersResults';

const Support = () => {
  const isLoggedIn = useSelector((state) => state.register.isLoggedIn);
  if (!isLoggedIn) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Title title="Support" />
      <FindUser />
      <UsersResults />
    </Layout>
  );
};

export default Support;
