import * as React from 'react';
import { Navbar, Container, NavbarBrand } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg='dark' variant='dark'>
      <Container>
        <NavbarBrand>
          React Typescript Notes app Project
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
