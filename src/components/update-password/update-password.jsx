import React, { useState, useEffect } from 'react'
import * as S from '../../pages/auth-page/auth-styled'
import { Link, useNavigate } from 'react-router-dom'
import { useUpdateUserPasswordMutation } from '../../service/user'
import { Menu } from '../../components/menu/menu'
import { Footer } from '../../components/footer/footer'

export const UpdatePasswordPage = () => {
  const [buttonActive, setButtonActive] = useState(false)
  const [error, setError] = useState(null)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const navigate = useNavigate()

  const [ update, { isSuccess: isUpdateSuccess, error: updateError, isError: isUpdateError }] = useUpdateUserPasswordMutation()

  const handleUpdate = async ({ 
    oldPassword,
    newPassword,
    repeatPassword, 
    }) => {
    if (!oldPassword || !newPassword || !repeatPassword) {
        setError('Заполните поле ввода')
        return
    }
    if (oldPassword === newPassword) {
        setError('Пароли не должны совпадать')
        return
    }
    if (newPassword !== repeatPassword) {
        setError('Пароли не совпадают')
        return
    }
    try {
      setButtonActive(true)
      await update({ oldPassword, newPassword })
      setError(null)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      console.error('Ошибка авторизации:', updateError)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    if (isUpdateSuccess) {
      navigate('/auth', { replace: true })
    }
  }, [isUpdateSuccess])

  useEffect(() => {
    setError(null)
  }, [
    oldPassword,
    newPassword,
    repeatPassword, 
    isUpdateError,
  ])

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <Menu mode={true}/>
          <S.ModalBlockReg>
            <S.ModalFormReg>
              <Link to="/profile">
                <S.ModalLogo>
                  <S.ModalLogoImg
                    as="img"
                    src="img/logo_modal.png"
                    alt="logo"
                  />
                </S.ModalLogo>
              </Link>


              <S.LoginInput
                type="password"
                name="new-password"
                placeholder="Старый пароль"
                value={oldPassword}
                onChange={(event) => {
                    setOldPassword(event.target.value)
                }}
              />
              <S.LoginInput
                type="password"
                name="new-password"
                placeholder="Новый пароль"
                value={newPassword}
                onChange={(event) => {
                    setNewPassword(event.target.value)
                }}
              />
              <S.LoginInput
                type="password"
                name="password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value)
                }}
              />

              <S.ModalButtonSignUpEnt
                disabled={buttonActive}
                onClick={() =>
                    handleUpdate({
                    oldPassword,
                    newPassword,
                    repeatPassword
                  })
                }
              >
                <S.ModalButtonEnterLink>
                  {buttonActive
                    ? 'Выполняется изменение...'
                    : 'Изменить'}
                </S.ModalButtonEnterLink>
              </S.ModalButtonSignUpEnt>
              {error || updateError}
            </S.ModalFormReg>
          </S.ModalBlockReg>
        <Footer/>
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
