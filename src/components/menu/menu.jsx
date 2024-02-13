import * as S from './menu-styled.js'

export const Menu = ({ mode }) => {
  return (
    <>
      {mode ? (
        <S.MainMenu>
          <S.SearchLogoMobLink to="/">
              <S.SearchLogoMobImg src="/img/logo-mob.png" alt="logo" />
          </S.SearchLogoMobLink>
        </S.MainMenu>
      ) : (
        <S.MainMenu>
          <S.MenuLogoLink to='/'>
            <S.MenuLogoImg src="/img/logo.png" alt="logo" />
          </S.MenuLogoLink>

          <S.SearchLogoMobLink to="/">
              <S.SearchLogoMobImg src="/img/logo-mob.png" alt="logo" />
          </S.SearchLogoMobLink>

          <S.MenuForm to='/'>
            <S.MenuButton >Вернуться на главную</S.MenuButton>
          </S.MenuForm>
        </S.MainMenu>
      )}
    </>
  )
}
