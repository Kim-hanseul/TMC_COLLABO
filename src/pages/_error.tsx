import Layout from '@components/layout';
import React from 'react';
import GUButton from '@components/control/gu-button';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';


const Error = () => {
  return (
    <Layout title="Not found">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>에러</BreadcrumbItem>
        </Breadcrumb>
        <div className="error-404">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="error-404__content">
                <h2>404 Not Found</h2>
                <form action="/">
                </form>
                <GUButton size="large" variant="contained" shape="round" href="/">
                  홈화면으로 돌아가기
                </GUButton>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="error-404__image">
                <img src="/assets/images/pages/4042.png" alt="404 error image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
