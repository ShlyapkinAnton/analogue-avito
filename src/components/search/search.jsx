import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './search-styled'
import { setFilterAds } from '../../store/slices/ads'

export const Search = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const handleSearch = (event) => {
    event.preventDefault()
    dispatch(setFilterAds({ search: search }))
  }

  return (
    <S.MainSearch>
      <S.SearchLogoLink to="/">
        <S.SearchLogoImg src="/img/logo.png" alt="logo" />
      </S.SearchLogoLink>

      <S.SearchLogoMobLink to="/">
        <S.SearchLogoMobImg src="/img/logo-mob.png" alt="logo" />
      </S.SearchLogoMobLink>

      <S.SearchForm onSubmit={handleSearch}>
        <S.SearchText
          type="search"
          placeholder="Поиск по объявлениям"
          name="search"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <S.SearchTextMob
          type="search"
          placeholder="Поиск"
          name="search-mob"
          onChange={(event) => {
            setSearch(event.target.value)
          }}
        />
        <S.SearchButton type="submit">Найти</S.SearchButton>
      </S.SearchForm>
    </S.MainSearch>
  )
}
