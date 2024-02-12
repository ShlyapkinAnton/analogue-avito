import { Link, useNavigate, useParams } from 'react-router-dom'
import * as S from './reviews-styled'
import { useGetCommentsQuery, usePostCommentsMutation } from '../../service/ads'
import { DateBlockRev } from '../utils/date-block'
import { useState } from 'react'

export const Reviews = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { data, isError, isLoading } = useGetCommentsQuery(id)

  const [reviews, setReviews] = useState('')
  const [comment, { isError: isCommentError, error: commentError }] = usePostCommentsMutation()
  const userData = localStorage.getItem('auth') ?? null

  const handelPost = async (event) => {
    event.preventDefault()
    if (userData === null) {
      navigate('/auth', { replace: true })
      return
    }
    try {
      await comment({ id, text: reviews }).unwrap()
    } catch {
      if (isCommentError) {
        console.error(commentError.data.detail)
      }
    }
  }

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Отзывы о товаре</S.ModalTitle>

            <Link to={`/adv/${id}`}>
              <S.ModalButtonClose>
                <S.ModalButtonCloseLine></S.ModalButtonCloseLine>
              </S.ModalButtonClose>
            </Link>

            <S.ModalScroll>
              <S.ModalFormNewArt action="#">
                <S.FormNewArtBlock onSubmit={handelPost}>
                  <S.FormNewArtLabel>Добавить отзыв</S.FormNewArtLabel>
                  <S.FormNewArtTextarea
                    type="text"
                    cols="auto"
                    rows="5"
                    placeholder="Введите описание"
                    value={reviews}
                    onChange={(event) => {
                      setReviews(event.target.value)
                    }}
                  ></S.FormNewArtTextarea>
                  <S.FormNewArtButton
                    type="submit"
                    disabled={!userData}
                  >
                    Опубликовать
                  </S.FormNewArtButton>
                </S.FormNewArtBlock>
              </S.ModalFormNewArt>

              <S.ModalReviews>
                {data?.map(({ author, created_on, text, id }) => {
                  return (
                    <S.ReviewsReview key={id}>
                      <S.ReviewItem>
                        <S.ReviewLeft>
                          <S.ReviewImg>
                            <S.Img
                              as="img"
                              src={`http://localhost:8090/${author.avatar}`}
                              alt=""
                            />
                          </S.ReviewImg>
                        </S.ReviewLeft>
                        <S.ReviewRight>
                          <S.ReviewName>
                            {author.name}
                            <S.ReviewNameSpan as="span">
                              {DateBlockRev(created_on)}
                            </S.ReviewNameSpan>
                          </S.ReviewName>
                          <S.ReviewTitle as="h5">Комментарий</S.ReviewTitle>
                          <S.ReviewText>{text}</S.ReviewText>
                        </S.ReviewRight>
                      </S.ReviewItem>
                    </S.ReviewsReview>
                  )
                })}
              </S.ModalReviews>
            </S.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
      </S.ContainerBg>
    </S.Wrapper>
  )
}
