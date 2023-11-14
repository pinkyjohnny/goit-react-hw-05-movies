import NavBar from 'components/NavBar/NavBar';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <WrapperOutlet>
        <Suspense>
          <Outlet />
        </Suspense>
      </WrapperOutlet>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const WrapperOutlet = styled.div`
  padding: 20px 290px;
`;
