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
      </div>
    </Layout>
  );
};

export default foodMake;
