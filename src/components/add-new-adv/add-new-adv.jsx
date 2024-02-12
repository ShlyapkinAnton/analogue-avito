import { useState, useEffect } from 'react'
import * as S from './add-new-adv-styled'
import {
  useGetAdsQuery,
  usePostImgAdsMutation,
  usePostTextAdsMutation,
  useUpdateAdsMutation,
} from '../../service/ads'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ChoiceFile } from '../choice-file/choice-file'
import { DeleteFile } from '../delete-file/delete-file'

export const AddNewAdv = () => {
  const [isMode, setMode] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const {
    data: getAds,
    isError,
    isSuccess: getAdsIsSuccess,
  } = useGetAdsQuery(id)
  const [title, setTitle] = useState(getAds?.title)
  const [description, setDescription] = useState(getAds?.description)
  const [price, setPrice] = useState(getAds?.price)
  const [image, setImage] = useState(getAds?.images)
  const [error, setError] = useState(null)

  const [
    textAds,
    { isSuccess: isTextAdsSuccess, error: textError, isError: isTextError },
  ] = usePostTextAdsMutation()
  const [imageAds, { error: imgError, isError: isImgError }] =
    usePostImgAdsMutation()
  const [updateAds, { isSuccess: isUpdateSuccess }] = useUpdateAdsMutation()
  const handelAdd = async (event) => {
    event.preventDefault()
    if (!title || !description || !price) {
      setError('Заполните все поля')
      return
    }
    try {
      if (!isMode) {
        await textAds({ title, description, price })
          .unwrap()
          .then((response) => {
            if (image) {
              for (let i = 0; i < image.length; i++) {
                imageAds({ data: image[i], id: response.id }).unwrap()
              }
            }
          })
      }
      if (isMode) {
        await updateAds({ title, description, price, id })
          .unwrap()
          .then((response) => {
            if (image) {
              for (let i = 0; i < image.length; i++) {
                imageAds({
                  data: image[i],
                  id: response.id,
                }).unwrap()
              }
            }
          })
      }
    } catch {
      if (isTextError) {
        console.error(textError.data.detail)
      }
      if (isImgError) {
        console.error(imgError.data.detail)
      }
    } finally {
      setMode(false)
      location.reload(true)
      navigate('/', { replace: true })
    }
  }

  useEffect(() => {
    if (isTextAdsSuccess || isUpdateSuccess) {
      setError(null)
      setTitle('')
      setDescription('')
      setPrice('')
      location.reload(true)
      navigate('/', { replace: true })
    }
  }, [isTextAdsSuccess, isUpdateSuccess])

  useEffect(() => {
    if (getAdsIsSuccess) {
      setMode(true)
    }
  }, [getAdsIsSuccess])

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>
              {isMode ? 'Редактировать объявление' : 'Новое объявление'}
            </S.ModalTitle>

            <Link to={'/'}>
              <S.ModalButtonClose>
                <S.ModalButtonCloseLine></S.ModalButtonCloseLine>
              </S.ModalButtonClose>
            </Link>

            <S.ModalFormNewArt onSubmit={handelAdd}>
              <S.FormNewArtBlock>
                <S.Label htmlFor="name">Название</S.Label>
                <S.FormNewArtInput
                  type="text"
                  name="name"
                  id="formName"
                  placeholder="Введите название"
                  defaultValue={title}
                  onChange={(event) => {
                    setTitle(event.target.value)
                  }}
                />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.Label htmlFor="text">Описание</S.Label>
                <S.FormNewArtArea
                  type="text"
                  id="formArea"
                  cols="auto"
                  rows="10"
                  placeholder="Введите описание"
                  defaultValue={description}
                  onChange={(event) => {
                    setDescription(event.target.value)
                  }}
                ></S.FormNewArtArea>
              </S.FormNewArtBlock>

              {getAds?.images.length > 0 ? (
                <DeleteFile data={image} id={id}/>
                ) : (
                <ChoiceFile image={image} setImage={setImage} />
                )
              }

              <S.FormNewArtBlockPrice>
                <S.Label htmlFor="price">Цена</S.Label>

                <S.FormNewArtInputPrice
                  type="text"
                  name="price"
                  id="formName"
                  defaultValue={price}
                  onChange={(event) => {
                    setPrice(event.target.value)
                  }}
                />
                <S.FormNewArtInputPriceCover></S.FormNewArtInputPriceCover>
              </S.FormNewArtBlockPrice>

              <S.FormNewArtButton type="submit">
                {isMode ? 'Сохранить' : 'Опубликовать'}
              </S.FormNewArtButton>
            </S.ModalFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}
