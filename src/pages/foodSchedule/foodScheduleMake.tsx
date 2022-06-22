import Layout from '@components/layout';
import styled from 'styled-components';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';
import styles from './write.module.css';

const PostsListContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const foodMake = () => {
  return (
    <Layout title="Ranking">
      <div className="container">
      <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            나의 식단
          </BreadcrumbItem>
          <BreadcrumbItem>나만의 식단 짜기</BreadcrumbItem>
        </Breadcrumb>
       <PostsListContainer>
      </PostsListContainer>
      </div>
    </Layout>
  );
};

export default foodMake;
