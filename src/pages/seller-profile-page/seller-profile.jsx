import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import './profile.css'
import * as S from '../../pages/profile-page/profile-styled'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { Cards } from '../../components/cards/cards'
import { ProfileIcon } from '../../components/profile-icon/icon'
import { Footer } from '../../components/footer/footer'
import { useGetAllUserQuery } from '../../service/ads'
import { ArticleButtonBlock } from '../../components/article-button-block/article-button-block'
import { DateBlockSell } from '../../components/utils/date-block'
import { useSelector } from 'react-redux'
import { allAdsSelector } from '../../store/selectors/selector'

export const SellerProfilePage = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useGetAllUserQuery()
  const [seller, setSeller] = useState([])

  useEffect(() => {
    if (data) {
      setSeller(
        data.filter((item) => {
          return item.id == id // id seller
        })[0],
      )
    }
  }, [data, isError])

  const [showTel, setShowTel] = useState(false)

  const allAds = useSelector(allAdsSelector) // после перезагрузки страницы стейт обнуляется 
  const [sellerAds, setSellerAds] = useState([])
  useEffect(() => {
    if (allAds) {
      setSellerAds(
        allAds.filter((item) => {
          return item.user_id == id
        })
      )
    }
  }, [allAds])

  return (
    <S.Wrapper>
      <S.Container>
        <Header mode={false} />

        <S.Main>
          <S.MainContainer>
            <div className="main__center-block">
              <Menu />

              <S.MainH2>Профиль продавца</S.MainH2>

              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileSettings>
                    <ProfileIcon src={seller?.avatar} />

                    <S.SettingsRight>
                      <S.SellerTitle>
                        {seller?.name} {seller?.surname}
                      </S.SellerTitle>
                      <S.SellerText>{seller?.city}</S.SellerText>
                      <S.SellerText>
                        Продает товары с {DateBlockSell(seller?.sells_from)}
                      </S.SellerText>

                      {/* <div class="seller__img-mob-block">
                      <div class="seller__img-mob">
                        <a href="" target="_self">
                          <img src="#" alt="">
                        </a>
                      </div>
                    </div> */}

                      <ArticleButtonBlock
                        mode={true}
                        data={seller?.phone}
                        showTel={showTel}
                        setShowTel={setShowTel}
                      />
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>

              <S.MainTitle>Товары продавца</S.MainTitle>
            </div>

            <S.MainContent>
              <S.Cards>
                {sellerAds?.map(
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
