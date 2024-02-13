import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'

export const Header = styled.header`
  background-color: #009ee4;

  @media (max-width: 590px) {
    display: none;
  }
`

export const HeaderNav = styled.nav`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: end;
`

export const ButtonHover = styled.button`
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`

export const HeaderButton = styled(ButtonHover)`
  width: 224px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
`

export const HeaderLogo = styled.div`
  display: none;

  @media (max-width: 590px) {
    display: flex;
  }
`

export const LogoMobLink = styled(NavLink)`
  display: block;
  width: 32px;
  height: 32px;
`

export const LogoMobImg = styled.img`
  width: 32px;
  height: auto;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeaderButtonPutAd = styled(HeaderButton)`
  width: 232px;
  height: 40px;
`

export const HeaderButtonLk = styled(HeaderButton)`
  width: 173px;
  height: 40px;
  margin-left: 10px;
`
