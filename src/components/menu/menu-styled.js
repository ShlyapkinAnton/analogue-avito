import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const MainMenu = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;

  @media (max-width: 590px) {
    width: 100%;
    height: 55px;
    background-color: #009ee4;
    -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    padding: 11px 17px;
    position: fixed;
    left: 0;
    top: 0;
  }
`;

export const MenuLogoLink = styled(NavLink)`
  width: 54;
  height: 50px;

  @media (max-width: 590px) {
    display: none;
  }
`;

export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;

  @media (max-width: 590px) {
    width: 32px;
    height: auto;
    display: flex;
    -o-object-fit: cover;
    object-fit: cover;
  }
`;

export const MenuForm = styled(NavLink)`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;

  @media (max-width: 590px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;

  &:hover {
    background-color: #0080c1;
  }
`;

// mob

export const SearchLogoMobLink = styled(NavLink)`
  display: none;

  @media (max-width: 590px) {
    display: flex;
    width: 32px;
    height: 32px;
  }
`

export const SearchLogoMobImg = styled.img`
  width: 32px;
  height: auto;
  display: none;
  -o-object-fit: cover;
  object-fit: cover;

  @media (max-width: 590px) {
    width: 32px;
    height: auto;
    display: flex;
    -o-object-fit: cover;
    object-fit: cover;
  }
`