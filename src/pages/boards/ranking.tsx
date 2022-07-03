import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const SectionContainer = styled.div`
  margin-bottom: ${60 / 14}rem;
`;

const ranking = () => {
  const dispatch = useDispatch();

  return (
    <Layout title="Ranking">
      <div className="container">
      </div>
    </Layout>
  );
};

export default ranking;
