import React, { useState, useEffect } from 'react'
import * as S from './auth-styled.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../store/slices/auth'
import { useLoginMutation, useRegistrationMutation } from '../../service/auth'
import { Menu } from '../../components/menu/menu'
import { Footer } from '../../components/footer/footer'

export const AuthPage = ({ setUser }) => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [buttonActive, setButtonActive] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [city, setCity] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [
    login,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      error: loginError,
      isError: isLoginError,
    },
  ] = useLoginMutation()
  const [
    registration,
    {
      data: registerData,
      isSuccess: isRegisterSuccess,
      error: registerError,
      isError: isRegisterError,
    },
  ] = useRegistrationMutation()

  const handleLogin = async ({ email, password }) => {
    if (!email || !password) {
      setError('Заполните поля ввода')
      return
    }
    try {
      setButtonActive(true)
      await login({ email, password })
      setError('')
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    if (isLoginError) {
      setError(loginError.data.detail[0].msg ? loginError.data.detail[0].msg : loginError.data.detail)
    }
    if (isRegisterError) {
      setError(registerError.data.detail[0].msg ? registerError.data.detail[0].msg : registerError.data.detail)
    }
  }, [isLoginError, isRegisterError])

  const handleRegister = async ({
    email,
    password,
    repeatPassword,
    firstName,
    lastName,
    city,
  }) => {
    if (!email || !password || !repeatPassword) {
      setError('Заполните поля ввода')
      return
    }
    if (password !== repeatPassword) {
      setError('Пароли не совпадают')
      return
    }
    try {
      setButtonActive(true)
      await registration({
        firstName,
        lastName,
        city,
        email,
        password,
        role: 'user',
      })
      setError('')
      setIsLoginMode(true)
    } catch (error) {
      console.error('Ошибка авторизации:', error.message)
      setError(error.message)
    } finally {
      setButtonActive(false)
    }
  }

  useEffect(() => {
    if (isLoginSuccess) {
      localStorage.setItem('auth', JSON.stringify(loginData))
      dispatch(
        setAuth({
          access: loginData.access_token,
          refresh: loginData.refresh_token,
          email,
        }),
      )
      setUser(loginData)
      navigate('/profile', { replace: true })
    }
    if (isRegisterSuccess) {
      localStorage.setItem('auth', JSON.stringify(registerData))
      dispatch(
        setAuth({
          access: registerData.access_token,
          refresh: registerData.refresh_token,
          email,
        }),
      )
      setUser(registerData)
      navigate('/profile', { replace: true })
    }
  }, [isLoginSuccess, isRegisterSuccess])

  useEffect(() => {
    setError('')
  }, [
    isLoginMode,
    email,
    password,
    repeatPassword,
  ])

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <Menu mode={true} />
        {isLoginMode ? (
          <S.ModalBlock>
            <S.ModalFormLogin action="#">
              <Link onClick={() => setIsLoginMode(true)} to="/auth">
                <S.ModalLogo>
                  <S.ModalLogoImg
                    as="img"
                    src="img/logo_modal.png"
                    alt="logo"
                  />
                </S.ModalLogo>
              </Link>

              <S.LoginInput
                type="email"
                name="login"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />

              <S.ErrorBlock>{ error && `Ошибка: ${error}`}</S.ErrorBlock>

              <S.ModalButtonEnter
                disabled={buttonActive}
                onClick={() => handleLogin({ email, password })}
              >
                <S.ModalButtonEnterLink>
                  {buttonActive ? 'Выполняется вход...' : 'Войти'}
                </S.ModalButtonEnterLink>
              </S.ModalButtonEnter>

              <S.ModalButtonSignUp onClick={() => setIsLoginMode(false)}>
                <S.ModalButtonSignUpLink to="/auth">
                  Зарегистрироваться
                </S.ModalButtonSignUpLink>
              </S.ModalButtonSignUp>
            </S.ModalFormLogin>
          </S.ModalBlock>
        ) : (
          <S.ModalBlockReg>
            <S.ModalFormReg id="formLogUp" action="#">
              <Link onClick={() => setIsLoginMode(true)} to="/auth">
                <S.ModalLogo>
                  <S.ModalLogoImg
                    as="img"
                    src="img/logo_modal.png"
                    alt="logo"
                  />
                </S.ModalLogo>
              </Link>

              <S.LoginInput
                type="email"
                name="login"
                placeholder="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              />
              <S.LoginInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value)
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
              <S.LoginInput
                type="text"
                name="first-name"
                placeholder="Имя (необязательно)"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value)
                }}
              />
              <S.LoginInput
                type="text"
                name="last-name"
                placeholder="Фамилия (необязательно)"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value)
                }}
              />
              <S.ModalInput
                type="text"
                name="city"
                placeholder="Город (необязательно)"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value)
                }}
              />

              <S.ErrorBlock>{ error && `Ошибка: ${error}`}</S.ErrorBlock>

              <S.ModalButtonSignUpEnt
                disabled={buttonActive}
                onClick={() =>
                  handleRegister({
                    email,
                    password,
                    repeatPassword,
                    firstName,
                    lastName,
                    city,
                  })
                }
              >
                <S.ModalButtonEnterLink>
                  {buttonActive
                    ? 'Выполняется регистрация...'
                    : 'Зарегистрироваться'}
                </S.ModalButtonEnterLink>
              </S.ModalButtonSignUpEnt>
            </S.ModalFormReg>
          </S.ModalBlockReg>
        )}
        <Footer />
      </S.ContainerEnter>
    </S.Wrapper>
  )
}
