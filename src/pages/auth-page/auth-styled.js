import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`
export const ContainerEnter = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: #f4f5f6;
`

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
    left: calc(50% - (320px / 2));
    top: 55px;
    opacity: 1;
  }
`

export const ModalFormLogin = styled.form`
  width: 366px;
  height: 439px;
  background-color: #ffffff;
  border-radius: 12px;
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
  padding: 43px 47px 47px 40px;

  @media (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #ffffff;
    border-radius: 0px;
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
    padding: 40px 20px;
  }
`

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;

  @media (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
  }
`

export const ModalLogoImg = styled(ModalLogo)`
  width: 140px;
  height: auto;

  @media (max-width: 768px) {
    width: 120px;
    height: auto;
  }
`

export const ModalInput = styled.input`
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;

  &::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  @media (max-width: 768px) {
    width: 100%;
    border: 1px solid #d0cece;
    padding: 9px 17px;
    border-radius: 30px;

    &::-webkit-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &:-ms-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &::-ms-input-placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: #b3b3b3;
    }
  }
`

export const LoginInput = styled(ModalInput)`
  margin-bottom: 38px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`

export const ModalButtonEnter = styled.button`
  width: 278px;
  height: 52px;
  background-color: #009ee4;
  border-radius: 6px;
  margin-top: 43px;
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &:hover {
    background-color: #0080c1;
  }
  &:active {
    background-color: #0080c1;
  }

  @media (max-width: 768px) {
    height: 46px;
    margin-top: 40px;
    margin-bottom: 10px;
    border: none;
  }
`

export const ModalButtonEnterLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #ffffff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 12px 54px 16px 50px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const ModalButtonSignUp = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &:hover {
    background-color: #f4f5f6;
  }
  &:active {
    background-color: #d9d9d9;
  }

  @media (max-width: 768px) {
    height: 46px;
    border: 1px solid #d9d9d9;
    font-size: 16px;
    line-height: 24px;
  }
`
export const ModalButtonSignUpLink = styled(NavLink)`
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  color: #000000;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const ModalBlockReg = styled(ModalBlock)`
  top: calc(50% - (647px / 2));

  @media (max-width: 768px) {
    left: calc(50% - (320px / 2));
    top: 55px;
  }
`

export const ModalFormReg = styled(ModalFormLogin)`
  height: auto;
  padding: 43px 42px 47px;

  @media (max-width: 768px) {
    width: 320px;
    height: auto;
    border-radius: 0px;
    padding: 40px 20px;
  }
`

export const ModalButtonSignUpEnt = styled(ModalButtonEnter)`
  border: none;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    height: 46px;
    border: none;
    margin-top: 26px;
  }
`

export const ModalButtonSignUpEntLink = styled(ModalButtonSignUpLink)`
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
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
