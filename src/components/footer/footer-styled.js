import styled from 'styled-components'

export const Footer = styled.footer`
  display: none;
`
export const FooterContainer = styled.div`
  width: 225px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`

export const Img = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

export const FooterImg = styled(Img)`
//   width: 42px;
//   height: 42px;

  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
`

