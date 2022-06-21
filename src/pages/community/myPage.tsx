import CheckoutForm, { CheckoutFormProps } from '@components/checkout';
import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Instagram from '@components/sections/instagram';
import { handleGetCart } from '@store/thunk/cart';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const myPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleGetCart());
  }, []);

  const handleFormSubmit = (val: CheckoutFormProps) => {
    console.log(val);
  };

  return (
    <Layout title="MyPage">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            커뮤니티
          </BreadcrumbItem>
          <BreadcrumbItem>나의 게시글</BreadcrumbItem>
        </Breadcrumb>
      </div>
    </Layout>
  );
};

export default myPage;
