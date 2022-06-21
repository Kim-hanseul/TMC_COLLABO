import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const ranking = () => {
  const dispatch = useDispatch();

  return (
    <Layout title="Ranking">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            커뮤니티
          </BreadcrumbItem>
          <BreadcrumbItem>랭킹조회</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

export default ranking;
