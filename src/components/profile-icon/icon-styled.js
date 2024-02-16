import styled from 'styled-components'

export const SettingsLeft = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-right: 43px;

  @media (max-width: 620px) {
    display: none;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 50%;
`

export const SettingsImg = styled.label`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
`

export const A = styled.a``

export const SettingsChangePhoto = styled.a`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`

export const SettingsInput = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`

export const SettingsChangePhotoButton = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #009ee4;
`

export const ErrorBlock = styled.div`
  color: red;
  // padding-bottom: 17px;
  height: 17px;

  // @media (max-width: 768px) {
  //   font-size: 16px;
  //   line-height: 24px;
  // }
`