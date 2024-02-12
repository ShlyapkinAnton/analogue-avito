import styled from 'styled-components'

export const FormNewArtBlock = styled.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-bottom: 20px;
`

export const FormNewArtText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 10px;
`

export const FormNewArtSpan = styled(FormNewArtText)`
  margin-left: 10px;
  color: rgba(0, 0, 0, 0.3);
`

export const FormNewArtBarImg = styled.div`
  width: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  margin-bottom: 10px;
  overflow: hidden;
`

export const FormNewArtImg = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    border: 2px solid #009ee4;
  }

  &:active {
    background-color: #eceaea;
  }
`
export const FormNewArtImgDel = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 10px;
  position: relative;
  z-index: 0;

  &:hover {
    border: 2px solid red;
  }

  &:active {
    background-color: #eceaea;
  }
`

export const FormNewArtImage = styled(FormNewArtImg)`
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
`

export const FormNewArtImageDel = styled(FormNewArtImgDel)`
  display: block;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: 2;
`

export const FormNewArtImgCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: 2;

  &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));

    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`
