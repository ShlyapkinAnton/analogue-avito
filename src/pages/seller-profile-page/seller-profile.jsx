import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import * as S from '../../pages/profile-page/profile-styled'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { MemoCard } from '../../components/cards/cards'
import { ProfileIcon } from '../../components/profile-icon/icon'
import { Footer } from '../../components/footer/footer'
import { useGetAllAdsQuery, useGetAllUserQuery } from '../../service/ads'
import { ArticleButtonBlock } from '../../components/article-button-block/article-button-block'
import { DateBlockSell } from '../../components/utils/date-block'

export const SellerProfilePage = () => {
  const { id } = useParams()
  const { data, isError, isLoading } = useGetAllUserQuery()
  const [seller, setSeller] = useState([])
  const { data: dataAllAds, isSuccess: isAllAdsSuccess } = useGetAllAdsQuery()
  const [sellerAds, setSellerAds] = useState([])

  useEffect(() => {
    if (data) {
      const user = data.filter((item) => { return item.id == id })[0]
      setSeller(user)
    }
  }, [data, isError])

  useEffect(() => {
    if (isAllAdsSuccess) {
      const allAds = dataAllAds.filter((item) => { return item.user_id == id} )
      setSellerAds(allAds)
    } 
  }, [dataAllAds])

  return (
    <S.Wrapper>
      <S.Container>
        <Header mode={false} />

        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
            <Menu mode={false}/>

              <Link to={`/adv/${id}`}>
                <S.MainH2>Профиль продавца</S.MainH2>
              </Link>

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

                      <S.SellerImgMobBlock>
                        <S.SellerImgMob>
                          <a href="" target="_self">
                            <S.SellerImgMobImg as="img" src={`http://localhost:8090/${seller?.avatar}`} alt="" />
                          </a>
                        </S.SellerImgMob>
                      </S.SellerImgMobBlock>

                      <ArticleButtonBlock
                        data={seller?.phone}
                      />
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>

              <S.MainTitle>Товары продавца</S.MainTitle>
            </S.MainCenterBlock>

            <S.MainContent>
              <S.Cards>
                {sellerAds?.map(
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
