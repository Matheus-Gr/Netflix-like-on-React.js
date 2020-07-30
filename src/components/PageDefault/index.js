import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
     background-color: var(--grayDark);
     color: var(--white);
     padding-top: 50px;
     padding-left: 5%;
     padding-right: 5%;
     padding-bottom: 67.6vh;
`;

function PageDefault({ children }) {
     return (
          <>
               <Menu />
                    <Main>
                         {children}
                    </Main>
               <Footer />
          </>
     );
}

export default PageDefault;