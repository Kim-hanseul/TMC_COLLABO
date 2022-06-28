import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const myPage = () => {

  return (
    <Layout title="MyPage">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem startIcon={<i className="fas fa-home"></i>}>
            커뮤니티
          </BreadcrumbItem>
          <BreadcrumbItem>나의 게시글</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

export default myPage;
