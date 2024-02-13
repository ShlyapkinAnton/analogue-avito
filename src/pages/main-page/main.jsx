import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './main-styled.js'
import { Header } from '../../components/header/header'
import { Search } from '../../components/search/search'
import { Cards } from '../../components/cards/cards'
import { Footer } from '../../components/footer/footer'
import { useGetAllAdsQuery } from '../../service/ads.js'
import { setAllAds } from '../../store/slices/ads.js'
import { allAdsSelector, filterAdsSelector, } from '../../store/selectors/selector.js'

export function MainPage() {
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetAllAdsQuery()
  const [errorFetch, setErrorFetch] = useState(null)
  const allAds = useSelector(allAdsSelector)
  const filterAds = useSelector(filterAdsSelector)
  const ads = filterAds?.isActiveSearch ? filterAds?.filterAdsArr : allAds

  useEffect(() => {
    dispatch(setAllAds(data))
  }, [filterAds.isActiveSearch, ads])

  useEffect(() => {
    if (data) {
      dispatch(setAllAds(data))
      setErrorFetch(null)
    }
    if (isError) {
      setErrorFetch('Не удалось загрузить объявления, попробуйте позже')
    }
  }, [data, isError])
  
  return (
    <S.Wrapper>
      <S.Container>
        <Header/>

        <S.Main>
          <Search/>

          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>

            <S.MainContent>
              {errorFetch}
              <S.Cards >
                {ads?.map(({ id, title, price, images, user, created_on }) => {
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
                })}
              </S.Cards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>

        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
