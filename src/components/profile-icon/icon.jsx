import * as S from './icon-styled.js'
import { useRef } from 'react'
import { usePostAvatarMutation } from '../../service/user.js'

export const ProfileIcon = ({ mode, src }) => {
  const [ postAvatar, { isError, error }] = usePostAvatarMutation()
  const fileAvatar = useRef(null)

  const handelUpload = async (file) => {
    try {
      await postAvatar(file).unwrap()
    } catch {
      if (isError) {
        console.error(error.data.detail)
      }
    }
  }
  const handelChange = (event) => {
    handelUpload(event.target.files[0])
  }

  const handelPick = () => {
    fileAvatar.current.click()
  }
  return (
    <S.SettingsLeft>
      <S.SettingsInput id="inputAvatar" type="file" accept="image/*," ref={fileAvatar} onChange={handelChange}/>
      <S.SettingsImg htmlFor="inputAvatar">
        <S.A>
          <S.Img src={src && `http://localhost:8090/${src}`} alt="" />
        </S.A>
      </S.SettingsImg>
      {mode && <S.SettingsChangePhoto onClick={handelPick}>Заменить</S.SettingsChangePhoto>}
    </S.SettingsLeft>
  )
}
