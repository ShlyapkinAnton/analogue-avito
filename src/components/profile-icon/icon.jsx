
import { useRef, useState, useEffect } from 'react'
import { usePostAvatarMutation } from '../../service/user.js'
import * as S from './icon-styled.js'

export const ProfileIcon = ({ mode, src }) => {
  const [error, setError] = useState('')
  const [ postAvatar, { isError: isPostError, error: postError }] = usePostAvatarMutation()
  const fileAvatar = useRef(null)

  const handelUpload = async (file) => {
    try {
      await postAvatar(file).unwrap()
    } catch {
      if (error) {
        console.error(error.message)
      }
    }
  }
  const handelChange = (event) => {
    handelUpload(event.target.files[0])
  }

  const handelPick = () => {
    fileAvatar.current.click()
  }

  useEffect(() => {
    if (isPostError) {
      setError(postError.data.detail[0].msg ? postError.data.detail[0].msg : postError.data.detail)
    }
  }, [isPostError])

  return (
    <S.SettingsLeft>
      <S.SettingsInput id="inputAvatar" type="file" accept="image/*," ref={fileAvatar} onChange={handelChange}/>
      <S.SettingsImg htmlFor="inputAvatar">
        <S.A>
          <S.Img src={src && `http://localhost:8090/${src}`} alt="" />
        </S.A>
      </S.SettingsImg>
      {mode && <S.SettingsChangePhoto onClick={handelPick}>Заменить</S.SettingsChangePhoto>}
      <S.ErrorBlock>{ error && `Ошибка: ${error}`}</S.ErrorBlock>
    </S.SettingsLeft>
  )
}
