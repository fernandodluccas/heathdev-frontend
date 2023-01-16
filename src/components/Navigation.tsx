import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin: 34px 40px;
  ul {
    list-style: none;
    display: flex;
    gap: 48px;
    align-items: center;
  }
`;

const Link = styled(RouterLink)`
  display: block;
  height: 35px;
  text-decoration: none;
  color: #707070;
  &.active {
    color: #01a7cc;
    border-bottom: 2px solid #01a7cc;
  }
`;

export const Navigation = () => {
  const location = useLocation();

  return (
    <Nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Dados gerais
          </Link>
        </li>

        <li>
          <Link
            to="/address"
            className={location.pathname === '/address' ? 'active' : ''}
          >
            Endereço
          </Link>
        </li>

        <li>
          <Link
            to="/password"
            className={location.pathname === '/password' ? 'active' : ''}
          >
            Senha
          </Link>
        </li>
        <li>
          <Link
            to="/professional-data"
            className={
              location.pathname === '/professional-data' ? 'active' : ''
            }
          >
            Dados profissionais
          </Link>
        </li>
      </ul>
    </Nav>
  );
};
