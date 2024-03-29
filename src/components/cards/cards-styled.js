import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const CardsItem = styled(NavLink)`
  margin: 0;

  @media (max-width: 590px) {
    margin: 0;
    -webkit-box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
  }
`
export const CardsCard = styled.div`
  width: 270px;
  height: 441px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  @media (max-width: 590px) {
    width: 137px;
    height: 293px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`

export const CardImage = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;

  @media (max-width: 590px) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    width: 137px;
    height: 132px;
    background-color: #d9d9d9;
  }
`

export const Img = styled.img`
  width: 270px;
  height: 270px;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;

  @media (max-width: 590px) {
    width: 100%;
    height: 100%;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    max-height: 132px;
  }
`

// global style
export const A = styled.div`
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
`
//

export const CardContent = styled.div`
  @media (max-width: 590px) {
    padding: 0 10px 0 10px;
  }
`

export const CardTitle = styled.h3`
  height: 52px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
  color: #009ee4;
  margin-bottom: 10px;
  margin-top: 20px;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 590px) {
    height: 51px;
    font-size: 14px;
    line-height: 17px;
    color: #009ee4;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`

export const CardPrice = styled.div`
  color: #000000;
  font-size: 22px;
  font-weight: 500;
  line-height: 33px;
  margin-bottom: 10px;

  @media (max-width: 590px) {
    font-size: 16px;
    line-height: 24px;
  }
`

export const CardDate = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;

  @media (max-width: 590px) {
    font-size: 12px;
    line-height: 16px;
  }
`

export const CardPlace = styled(CardDate)`
  margin-bottom: 4px;
`

// hidden

export const CardImageHidden = styled.div`
  width: 270px;
  height: 270px;
  background-color: #f0f0f0;
  border-radius: 4px;
`

export const CardTitleHidden = styled(CardImageHidden)`
  height: 52px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const CardPriceHidden = styled(CardImageHidden)`
  width: 110px;  
  height: 33px;
  margin-bottom: 10px;
`

export const CardPlaceHidden = styled(CardImageHidden)`
  width: 150px;
  height: 21px;
  margin-bottom: 4px;
`

export const CardDateHidden = styled(CardImageHidden)`
  width: 140px;
  height: 21px;
`
