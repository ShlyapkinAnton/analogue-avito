import * as S from './menu-styled.js'

export const Menu = () => {
  return (
    <S.MainMenu>
      <S.MenuLogoLink to='/'>
        <S.MenuLogoImg src="/img/logo.png" alt="logo" />
      </S.MenuLogoLink>
      <S.MenuForm to='/'>
        <S.MenuButton >Вернуться на главную</S.MenuButton>
      </S.MenuForm>
    </S.MainMenu>
  )
}
