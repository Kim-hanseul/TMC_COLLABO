import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
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
          <BreadcrumbItem startIcon={<i className="fas fa-home"></i>}>
            커뮤니티
          </BreadcrumbItem>
          <BreadcrumbItem>게시글 올리기</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

const writeStyle = styled.div`
  font-family: 'sda';
`

export default write;