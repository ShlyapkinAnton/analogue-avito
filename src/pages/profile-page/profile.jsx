import React, { useEffect, useState } from 'react'
import * as S from './profile-styled.js'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { Cards } from '../../components/cards/cards'
import { ProfileIcon } from '../../components/profile-icon/icon'
import { Footer } from '../../components/footer/footer'
import {
  useGetUserQuery,
  useUpdateUserDataMutation,
} from '../../service/user.js'
import { useGetUserAdsQuery } from '../../service/ads.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const ProfilePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {
    data: userData,
    isSuccess: isUserDataSuccess,
    isError: userIsError,
    isLoading: userIsLoading,
  } = useGetUserQuery()
  const {
    data: userAds,
    isSuccess: isUserAdsSuccess,
    isError,
    isLoading,
    error: userError,
  } = useGetUserAdsQuery()
  const [
    updateUserData,
    {
      data: updateData,
      isSuccess: isUpdateDataSuccess,
      error: updateDataError,
      isError: isUpdateDataError,
    },
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

  // сделать обратотку ошибок
  useEffect(() => {
    if (isUserDataSuccess) {
      // console.log('user', userData)
    }
    if (isUserAdsSuccess) {
      // console.log('ads', userAds)
    }
    if (isUpdateDataSuccess) {
      // console.log('update', updateData)
    }
  }, [isUserDataSuccess, isUserAdsSuccess, isUpdateDataSuccess])

  return (
    <S.Wrapper>
      <S.Container>
        <Header mode={true} />

        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
            <Menu mode={false}/>
              <Link to='/'>
                <S.MainH2>Здравствуйте, {userData?.name}!</S.MainH2>
              </Link>

              <S.MainProfile>
                <S.ProfileContent>
                  <S.MainTitle>Настройки профиля</S.MainTitle>

                  <S.ProfileSettings>

                    <S.SellerImgMobBlock>
                        <S.SellerImgMob>
                          <a href="" target="_self">
                            <S.SellerImgMobImg as="img" src={`http://localhost:8090/${userData?.avatar}`} alt="" />
                          </a>
                        </S.SellerImgMob>
                    </S.SellerImgMobBlock>

                    <ProfileIcon mode={true} src={userData?.avatar} />

                    <S.SettingsRight>
                      <S.SettingsForm onSubmit={handelUpdateUser} action="#">
                        <S.SettingsDiv>
                          <S.SettingsFormLabel htmlFor="fname">
                            Имя
                          </S.SettingsFormLabel>
                          <S.SettingsFormInput
                            id="settings-fname"
                            name="fname"
                            type="text"
                            defaultValue={userData?.name}
                            placeholder=""
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
                            id="settings-lname"
                            name="lname"
                            type="text"
                            defaultValue={userData?.surname}
                            placeholder=""
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
                            id="settings-city"
                            name="city"
                            type="text"
                            defaultValue={userData?.city}
                            placeholder=""
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
                            id="settings-phone"
                            name="phone"
                            type="tel"
                            defaultValue={userData?.phone}
                            placeholder="+79161234567"
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
                        <S.SettingsButton
                          onClick={() => {
                            handelLogout()
                          }}
                        >
                          Выйти
                        </S.SettingsButton>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>

              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>

            <S.MainContent>
              {/* {userIsError && userIsError.data.detail} */}
              <S.Cards>
                {userAds?.map(
                  ({ id, title, price, images, user, created_on }) => {
                    return (
                      <Cards
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
