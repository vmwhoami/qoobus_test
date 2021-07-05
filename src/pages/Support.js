import React from 'react';
import Layout from '../components/layout';
import Title from '../components/Title';
import FindUser from '../components/FindUser/FindUser';
import UsersResults from '../components/UsersResults/UsersResults';

const Support = () => (
  <Layout>
    <Title title="Support" />
    <FindUser />
    <UsersResults />
  </Layout>
);

export default Support;
