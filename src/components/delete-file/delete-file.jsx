import { useNavigate } from 'react-router-dom'
import { useDeleteFileMutation } from '../../service/ads.js'
import * as S from '../choice-file/choice-file-styled.js'

export const DeleteFile = ({ data, id }) => {
  const navigate = useNavigate()
  const [deleteFile] = useDeleteFileMutation()

  const handleDeleteFile = async (url) => {
    try {
      await deleteFile({ id: id, file_url: url }).unwrap()
    } catch (error) {
      console.error(error)
    } finally {
    //   navigate('/', { replace: true })
    }
  }

  return (
    <S.FormNewArtBlock>
        DeleteFile
        <S.FormNewArtText htmlFor="imgAds">
            Фотографии товара
            <S.FormNewArtSpan as="span">не более 5 фотографий</S.FormNewArtSpan>
        </S.FormNewArtText>

        <S.FormNewArtBarImg>
        {data?.map(( item ) => { 
            return (
            <S.FormNewArtImgDel key={item?.id}>
                <S.FormNewArtImageDel
                    onClick={() => handleDeleteFile(item?.url)}
                    as="img"
                    src={`http://localhost:8090/${item?.url}`}
                    alt=""
                />
                {/* <S.FormNewArtImgCover></S.FormNewArtImgCover> */}
            </S.FormNewArtImgDel>
            )
        })}
        </S.FormNewArtBarImg>
    </S.FormNewArtBlock>
  )
}
