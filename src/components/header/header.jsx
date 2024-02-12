import * as S from './header-styled.js'
import { Link } from 'react-router-dom'

export const Header = () => {
  const mode = localStorage.getItem('auth') || null
  return (
    <>
      <S.Header>
        <S.HeaderNav>
          {!mode ? (
            <Link to="/auth">
              <S.HeaderButton id="btnMainEnter">
                Вход в личный кабинет
              </S.HeaderButton>
            </Link>
          ) : (
            <>
              <S.HeaderLogo>
                <S.LogoMobLink>
                  <S.LogoMobImg src="./img/logo-mob.png" alt="logo" />
                </S.LogoMobLink>
              </S.HeaderLogo>

              <Link to="/add-new-adv/0">
                <S.HeaderButtonPutAd >Разместить объявление</S.HeaderButtonPutAd>
              </Link>
              <Link to="/profile">
                <S.HeaderButtonLk >Личный кабинет</S.HeaderButtonLk>
              </Link>
            </>
          )}
        </S.HeaderNav>
      </S.Header>
    </>
  )
}
