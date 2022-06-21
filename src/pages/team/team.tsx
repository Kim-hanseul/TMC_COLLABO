import Layout from '@components/layout';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import Socials from '@components/other/socials';
import Instagram from '@components/sections/instagram';
import SubcribeBar from '@components/subcribe-bar';
import React from 'react';

const About = () => {
  const handleSubmit = (val: { email: string }) => {
    console.log(val);
  };

  return (
    <Layout title="About Team">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            홈
          </BreadcrumbItem>
          <BreadcrumbItem>팀소개</BreadcrumbItem>
        </Breadcrumb>
        </div>
    </Layout>
  );
};

export default About;
