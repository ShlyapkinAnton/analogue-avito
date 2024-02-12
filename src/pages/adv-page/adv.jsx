import React, { useEffect, useState } from 'react'
// import './adv.css'
import * as S from './adv-styled.js'
import { Header } from '../../components/header/header'
import { Menu } from '../../components/menu/menu'
import { ArticleButtonBlock } from '../../components/article-button-block/article-button-block'
import { Footer } from '../../components/footer/footer'
import { Link, useParams } from 'react-router-dom'
import { useGetAdsQuery, useGetCommentsQuery } from '../../service/ads'
import { DateBlock, DateBlockSell } from '../../components/utils/date-block'
import { getComments } from '../../components/utils/comment.js'

export function AdvPage() {
  const [errorFetch, setErrorFetch] = useState(null)
  const { id } = useParams()
  const [ads, setAds] = useState()
  const { data, isError, isLoading } = useGetAdsQuery(id)
  const commData = useGetCommentsQuery(id)

  const [isUserAds, setUserAds] = useState(false)
  const localUser = JSON.parse(localStorage.getItem('auth'))?.email.toLowerCase()
  const emailId = data?.user?.email.toLowerCase()
  useEffect(() => {
    if (localUser === emailId) {
      setUserAds(true)
    } else {
      setUserAds(false)
    }
  },[localUser, emailId])

  useEffect(() => {
    if (data) {
      setAds(data)
      setErrorFetch(null)
    }
    if (isError) {
      setErrorFetch('Не удалось загрузить объявления, попробуйте позже')
    }
  }, [data, isError])

  const [showTel, setShowTel] = useState(false)

  return (
    <S.Wrapper>
      <S.Container>
        <Header />

        <S.Main>
          <S.MainContainer>
            <Menu />
          </S.MainContainer>

          <S.MainArtic>
            {errorFetch}
            <S.ArticContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg>
                    <S.Img
                      as="img"
                      src={
                        ads?.images[0]?.url
                          ? `http://localhost:8090/${ads?.images[0]?.url}`
                          : '/img/no-photo.png'
                      }
                      alt={ads?.title}
                    />
                  </S.ArticleImg>

                  <S.ArticleImgBar>
                    <S.ArticleImgBarDiv>
                      <S.Image
                        as="img"
                        src={
                          ads?.images[0]?.url
                            ? `http://localhost:8090/${ads?.images[0]?.url}`
                            : '/img/no-photo.png'
                        }
                        alt={ads?.title}
                      />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image
                        as="img"
                        src={
                          ads?.images[1]?.url
                            ? `http://localhost:8090/${ads?.images[1]?.url}`
                            : '/img/no-photo.png'
                        }
                        alt={ads?.title}
                      />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image
                        as="img"
                        src={
                          ads?.images[2]?.url
                            ? `http://localhost:8090/${ads?.images[2]?.url}`
                            : '/img/no-photo.png'
                        }
                        alt={ads?.title}
                      />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image
                        as="img"
                        src={
                          ads?.images[3]?.url
                            ? `http://localhost:8090/${ads?.images[3]?.url}`
                            : '/img/no-photo.png'
                        }
                        alt={ads?.title}
                      />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image
                        as="img"
                        src={
                          ads?.images[4]?.url
                            ? `http://localhost:8090/${ads?.images[4]?.url}`
                            : '/img/no-photo.png'
                        }
                        alt={ads?.title}
                      />
                    </S.ArticleImgBarDiv>
                  </S.ArticleImgBar>

                  <S.ArticleImgBarMob>
                    <S.CircleActive></S.CircleActive>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>

              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>{ads?.title}</S.ArticleTitle>

                  <S.ArticleInfo>
                    <S.ArticleDate>{DateBlock(ads?.created_on)}</S.ArticleDate>
                    <S.ArticleDate>{ads?.user.city}</S.ArticleDate>
                    <S.ArticleLink to={`/reviews/${id}`}>
                      {getComments(commData?.data?.length)}
                    </S.ArticleLink>
                  </S.ArticleInfo>

                  <S.ArticlePrice>{ads?.price + ' ₽'}</S.ArticlePrice>

                  <ArticleButtonBlock
                    mode={isUserAds}
                    data={ads?.user.phone}
                    showTel={showTel}
                    setShowTel={setShowTel}
                    id={id}
                  />

                  <Link to={`/seller-profile/${ads?.user_id}`}>
                    <S.ArticleAuthor>
                      <S.AuthorImg>
                        <S.AuthorImage
                          as="img"
                          src={`http://localhost:8090/${ads?.user.avatar}`}
                          alt=""
                        />
                      </S.AuthorImg>

                      <S.AuthorCont>
                        <S.AuthorName>{ads?.user.name}</S.AuthorName>
                        <S.AuthorAbout>
                          Продает товары с {DateBlockSell(ads?.user.sells_from)}
                        </S.AuthorAbout>
                      </S.AuthorCont>
                    </S.ArticleAuthor>
                  </Link>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticContent>
          </S.MainArtic>

          <S.MainContainer>
            <S.MainTitle>Описание товара</S.MainTitle>
            <S.MainContent>
              <S.MainText>{ads?.description}</S.MainText>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>

        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
