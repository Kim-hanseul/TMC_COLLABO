import Layout from '@components/layout';
import styled from 'styled-components';
import Breadcrumb, { BreadcrumbItem } from '@components/other/breadcrumb';

const PostsListContainer = styled.div`
  margin-bottom: ${60/ 14}rem;
`;

const foodCalendar = () => {
  return (
    <Layout title="Ranking">
      <div className="container">
      <Breadcrumb>
          <BreadcrumbItem href="/" startIcon={<i className="fas fa-home"></i>}>
            나의 식단
          </BreadcrumbItem>
          <BreadcrumbItem>식단 캘린더</BreadcrumbItem>
        </Breadcrumb>
       <PostsListContainer>
      </PostsListContainer>
      </div>
    </Layout>
  );
};

export default foodCalendar;
