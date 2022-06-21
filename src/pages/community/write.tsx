import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Instagram from '@components/sections/instagram';
import ShopLayout from '@components/shop';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const write = () => {
  const dispatch = useDispatch();

  return (
    <Layout title="Ranking">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            커뮤니티
          </BreadcrumbItem>
          <BreadcrumbItem>게시글 올리기</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

export default write;