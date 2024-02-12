import styled from 'styled-components'

export const ArticleButton = styled.button`
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;

  &:hover {
    background-color: #0080c1;
  }
`

export const ArticleButtonSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
`
export const ArticleBtnBlock = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`

export const ButtonRedact = styled(ArticleButton)`
  height: 50px;
  width: 189px;
  margin-right: 10px;
`

export const ButtonRemove = styled(ArticleButton)`
  height: 50px;
  width: 225px;
`
