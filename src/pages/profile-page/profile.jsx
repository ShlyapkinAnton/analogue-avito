import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import {
  useGetUserQuery,
  useUpdateUserDataMutation,
} from '../../service/user.js'
import { useGetUserAdsQuery } from '../../service/ads.js'

import * as S from './profile-styled.js'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { MemoCard } from '../../components/cards/cards'
import { ProfileIcon } from '../../components/profile-icon/icon'
import { Footer } from '../../components/footer/footer'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState('')
  const {
    data: userData,
    isSuccess: isUserDataSuccess,
    isError: isUserError,
    error: userError,
    isLoading: userIsLoading,
  } = useGetUserQuery()
  const {
    data: userAds,
    isError: isUserAdsError,
    error: userAdsError,
    isLoading: isUserAdsLoading,
  } = useGetUserAdsQuery()
  const [
    updateUserData,
    { error: updateDataError, isError: isUpdateDataError },
  ] = useUpdateUserDataMutation()
  const [buttonActive, setButtonActive] = useState(true)
  const [name, setName] = useState(userData?.name)
  const [surname, setSurname] = useState(userData?.surname)
  const [city, setCity] = useState(userData?.city)
  const [phone, setPhone] = useState(userData?.phone)

  const handelUpdateUser = async () => {
    setButtonActive(false)
    try {
      await updateUserData({ name, surname, city, phone })
    } catch (error) {
      console.error(error.message)
    } finally {
      setButtonActive(true)
    }
  }

  const handelLogout = () => {
    localStorage.clear()
    dispatch(setAuth(''))
    navigate('/auth')
  }

  useEffect(() => {
    if (isUserDataSuccess) {
      localStorage.setItem('user', JSON.stringify(userData))
    }
  }, [isUserDataSuccess])

  useEffect(() => {
    if (isUserError) {
      setError(
        userError.data.detail[0].msg
          ? userError.data.detail[0].msg
          : userError.data.detail,
      )
    }
    if (isUserAdsError) {
      setError(
        userAdsError.data?.detail[0]?.msg
          ? userAdsError.data?.detail[0]?.msg
          : userAdsError.data?.detail,
      )
    }
    if (isUpdateDataError) {
      setError(
        updateDataError.data.detail[0].msg
          ? updateDataError.data.detail[0].msg
          : updateDataError.data.detail,
      )
    }
  }, [isUserError, isUserAdsError, isUpdateDataError])

  return (
    <S.Wrapper>
      <S.Container>
        <Header mode={true} />

        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <Menu mode={false} />
              <Link to="/">
                <S.MainH2>
                  Здравствуйте, {userData?.name ?? 'пользователь'}!
                </S.MainH2>
              </Link>

              <S.MainProfile>
                <S.ProfileContent>
                  <S.MainTitle>Настройки профиля</S.MainTitle>

                  <S.ProfileSettings>
                    <S.SellerImgMobBlock>
                      <S.SellerImgMob>
                        <a>
                          <S.SellerImgMobImg
                            as="img"
                            src={`http://localhost:8090/${userData?.avatar}`}
                            alt="avatar"
                          />
                        </a>
                      </S.SellerImgMob>
                    </S.SellerImgMobBlock>

                    <ProfileIcon mode={true} src={userData?.avatar} />

                    <S.SettingsRight>
                      <S.SettingsForm onSubmit={handelUpdateUser}>
                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="fname">
                            Имя
                          </S.SettingsFormLabel>
                          <S.SettingsFormInput
                            name="fname"
                            type="text"
                            defaultValue={userData?.name}
                            onChange={(event) => {
                              setName(event.target.value)
                              setButtonActive(false)
                            }}
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="lname">
                            Фамилия
                          </S.SettingsFormLabel>
                          <S.SettingsFormInput
                            name="lname"
                            type="text"
                            defaultValue={userData?.surname}
                            onChange={(event) => {
                              setSurname(event.target.value)
                              setButtonActive(false)
                            }}
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="city">
                            Город
                          </S.SettingsFormLabel>
                          <S.SettingsFormInput
                            name="city"
                            type="text"
                            defaultValue={userData?.city}
                            onChange={(event) => {
                              setCity(event.target.value)
                              setButtonActive(false)
                            }}
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="phone">
                            Телефон
                          </S.SettingsFormLabel>
                          <S.SettingsFormInputPhone
                            name="phone"
                            type="tel"
                            defaultValue={userData?.phone}
                            placeholder="+7 777 000 0000"
                            onChange={(event) => {
                              setPhone(event.target.value)
                              setButtonActive(false)
                            }}
                          />
                        </S.SettingsDiv>

                        <S.SettingsButton
                          onClick={() => {
                            handelUpdateUser()
                          }}
                          disabled={buttonActive}
                        >
                          Сохранить
                        </S.SettingsButton>

                        <Link to="/update-password">
                          <S.SettingsButton>Сменить пароль</S.SettingsButton>
                        </Link>

                        <S.SettingsButton
                          onClick={() => {
                            handelLogout()
                          }}
                        >
                          Выйти
                        </S.SettingsButton>
                      </S.SettingsForm>
                      <S.ErrorBlock>{error && `Ошибка: ${error}`}</S.ErrorBlock>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>

              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>

            <S.MainContent>
              <S.Cards>
                {userAds?.map(
                  ({ id, title, price, images, user, created_on }) => {
                    return (
                      <MemoCard
                        id={id}
                        title={title}
                        price={price}
                        images={images}
                        date={created_on}
                        user={user}
                        key={id}
                      />
                    )
                  },
                )}
              </S.Cards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>

        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
