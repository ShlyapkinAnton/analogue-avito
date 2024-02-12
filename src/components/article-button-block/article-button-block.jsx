import * as S from './article-button-block-styled.js'
import { Link, useNavigate } from 'react-router-dom'
import { useDeleteAdsMutation } from '../../service/ads.js'

export const ArticleButtonBlock = ({ mode, data, showTel, setShowTel, id }) => {
  const navigate = useNavigate()
  const tel = data ?? '+7 777 000 0000'

  const [deleteAds] = useDeleteAdsMutation()
  const handelDeleteAds = async (id) => {
    try {
      await deleteAds(id).then(() => navigate('/'))
      location.reload(true)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {mode ? (
        <S.ArticleBtnBlock>
          <Link to={`/add-new-adv/${id}`}>
            <S.ButtonRedact>Редактировать</S.ButtonRedact>
          </Link>
          <S.ButtonRemove onClick={() => {handelDeleteAds(id)}}>Снять с публикации</S.ButtonRemove>
        </S.ArticleBtnBlock>
      ) : (
        <S.ArticleButton
          onClick={() => {
            setShowTel(!showTel)
          }}
        >
          Показать телефон
          {showTel ? (
            <S.ArticleButtonSpan>{tel}</S.ArticleButtonSpan>
          ) : (
            <S.ArticleButtonSpan>
              {tel?.substring(0, 7)}&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
            </S.ArticleButtonSpan>
          )}
        </S.ArticleButton>
      )}
    </>
  )
}
