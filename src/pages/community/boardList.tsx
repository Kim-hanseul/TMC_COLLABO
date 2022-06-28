
import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const boardList = () => {

  return (
    <Layout title="커뮤니티">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem startIcon={<i className="fas fa-home"></i>}>
            커뮤니티
          </BreadcrumbItem>
          <BreadcrumbItem>게시글목록</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

export default boardList;