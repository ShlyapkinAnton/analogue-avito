import * as S from './footer-styled.js'

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterImg>
          <S.FooterImgLink to="/">
            <S.Img as="img" src="/img/icon_01.png" alt="home" />
          </S.FooterImgLink>
        </S.FooterImg>
        <S.FooterImg>
          <S.FooterImgLink to="/add-new-adv/0">
            <S.Img as="img" src="/img/icon_02.png" alt="ads" />
          </S.FooterImgLink>
        </S.FooterImg>
        <S.FooterImg>
          <S.FooterImgLink to="/auth">
            <S.Img as="img" src="/img/icon_03.png" alt="auth" />
          </S.FooterImgLink>
        </S.FooterImg>
      </S.FooterContainer>
    </S.Footer>
  )
}
