import { useEffect, useRef, useState } from 'react'
import * as S from './choice-file-styled.js'

export const ChoiceFile = ({ image, setImage }) => {
  const pictures = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
  const fileImage = useRef(null)
  const [imagePreview, setImagePreview] = useState([])

  const handelChange = (e) => {
    const { files } = e.target
    const validImageFiles = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      validImageFiles.push(file)
    }

    if (validImageFiles.length) {
      setImage(validImageFiles.slice(0, 5))
      return
    }
  }

  const handelPick = () => {
    fileImage.current.click()
  }

  useEffect(() => {
    const imagePreview = []
    const fileReaders = []
    let isCancel = false

    if (image?.length) {
      image.forEach((file) => {
        const fileReader = new FileReader()
        fileReaders.push(fileReader)
        fileReader.onload = (e) => {
          const { result } = e.target
          if (result) {
            imagePreview.push(result)
          }
          if (imagePreview.length === image.length && !isCancel) {
            setImagePreview(imagePreview)
          }
        }
        fileReader.readAsDataURL(file)
      })
    }

    return () => {
      isCancel = true
      fileReaders.forEach((fileReader) => {
        if (fileReader.readyState === 1) {
          fileReader.abort()
        }
      })
    }
  }, [image])

  return (
    <S.FormNewArtBlock>
      {' '}
      ChoiceFile
      <input
        id="imgAds"
        type="file"
        multiple
        hidden
        accept="image/*,.png,.jpg,.gif,.web,"
        ref={fileImage}
        onChange={handelChange}
      />
      <S.FormNewArtText htmlFor="imgAds">
        Фотографии товара
        <S.FormNewArtSpan as="span">не более 5 фотографий</S.FormNewArtSpan>
      </S.FormNewArtText>
      <S.FormNewArtBarImg>
        {imagePreview.length > 0 ? (
          <>
            {image?.map((image, index) => {
              return (
                <S.FormNewArtImg key={index}>
                  <S.FormNewArtImage as="img" src={image[index]} alt="" />
                  <S.FormNewArtImgCover
                    onClick={() => setImagePreview([])}
                  ></S.FormNewArtImgCover>
                </S.FormNewArtImg>
              )
            })}
          </>
        ) : (
          <>
            {pictures.map((el) => {
              return (
                <S.FormNewArtImg key={el.id} onClick={handelPick}>
                  <S.FormNewArtImage
                    key={el.id}
                    as="img"
                    src="/img/1no-photo.png"
                    alt=""
                  />
                  <S.FormNewArtImgCover></S.FormNewArtImgCover>
                </S.FormNewArtImg>
              )
            })}
          </>
        )}
      </S.FormNewArtBarImg>
    </S.FormNewArtBlock>
  )
}
