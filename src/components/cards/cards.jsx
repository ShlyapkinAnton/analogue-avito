import { DateBlock } from '../utils/date-block'
import * as S from './cards-styled.js'

export const Cards = ({ id, title, price, images, date, user, isLoading }) => {
  const item = images.map((i) => i)

  return (
    <S.CardsItem to={`/adv/${id}`}>
      <S.CardsCard>
        {!isLoading ? (
          <S.CardImage>
            <S.A>
              <S.Img
                src={
                  item[0]?.url
                    ? `http://localhost:8090/${item[0]?.url}`
                    : '/img/no-photo.png'
                }
                alt="picture"
              />
            </S.A>
          </S.CardImage>
        ) : (
          <S.CardImageHidden></S.CardImageHidden>
        )}

        <S.CardContent>
          <S.A>
            {!isLoading ? (
              <S.CardTitle>{title}</S.CardTitle>
            ) : (
              <S.CardTitleHidden></S.CardTitleHidden>
            )}
          </S.A>

          {!isLoading ? (
            <S.CardPrice>{price + ' ₽'}</S.CardPrice>
          ) : (
            <S.CardPriceHidden></S.CardPriceHidden>
          )}
          {!isLoading ? (
            <S.CardPlace>{user.city}</S.CardPlace>
          ) : (
            <S.CardPlaceHidden></S.CardPlaceHidden>
          )}
          {!isLoading ? (
            <S.CardDate>{DateBlock(date)}</S.CardDate>
          ) : (
            <S.CardDateHidden></S.CardDateHidden>
          )}
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  )
}
