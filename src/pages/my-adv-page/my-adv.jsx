import React from 'react'
import * as S from '../../pages/adv-page/adv-styled'
import { Header } from '../../components/header/header'
import { Search } from '../../components/search/search'
import { ArticleButtonBlock } from '../../components/article-button-block/article-button-block'
import { Footer } from '../../components/footer/footer'

export function MyAdvPage() {
  return (
    <S.Wrapper>
      <S.Container>
        <Header mode={false} />

        <S.Main>
          <S.MainContainer>
          </S.MainContainer>

          <S.MainArtic>
            <S.ArticContent>
              <S.ArticleLeft>
                <S.ArticleFillImg>
                  <S.ArticleImg>
                    <S.Img as="img" src="" alt="" />
                  </S.ArticleImg>

                  <S.ArticleImgBar>
                    <S.ArticleImgBarDiv>
                      <S.Image as="img" src="" alt="" />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image as="img" src="" alt="" />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image as="img" src="" alt="" />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image as="img" src="" alt="" />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image as="img" src="" alt="" />
                    </S.ArticleImgBarDiv>
                    <S.ArticleImgBarDiv>
                      <S.Image as="img" src="" alt="" />
                    </S.ArticleImgBarDiv>
                  </S.ArticleImgBar>

                  <S.ArticleImgBarMob>
                    <S.CircleActive></S.CircleActive>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                    <S.ImgBarMobCircle></S.ImgBarMobCircle>
                  </S.ArticleImgBarMob>
                </S.ArticleFillImg>
              </S.ArticleLeft>

              <S.ArticleRight>
                <S.ArticleBlock>
                  <S.ArticleTitle>
                    Ракетка для большого тенниса Triumph Pro STC Б/У
                  </S.ArticleTitle>

                  <S.ArticleInfo>
                    <S.ArticleDate>Сегодня в 10:45</S.ArticleDate>
                    <S.ArticleDate>Санкт-Петербург</S.ArticleDate>
                    <S.ArticleLink href="" target="_blank" rel="">
                      23 отзыва
                    </S.ArticleLink>
                  </S.ArticleInfo>

                  <S.ArticlePrice>2 200 ₽</S.ArticlePrice>

                  <ArticleButtonBlock mode={false} />

                  <S.ArticleAuthor>
                    <S.AuthorImg>
                      <S.AuthorImage as="img" src="" alt="" />
                    </S.AuthorImg>

                    <S.AuthorCont>
                      <S.AuthorName>Кирилл</S.AuthorName>
                      <S.AuthorAbout>
                        Продает товары с августа 2021
                      </S.AuthorAbout>
                    </S.AuthorCont>
                  </S.ArticleAuthor>
                </S.ArticleBlock>
              </S.ArticleRight>
            </S.ArticContent>
          </S.MainArtic>

          <S.MainContainer>
            <S.MainTitle>Описание товара</S.MainTitle>
            <S.MainContent>
              <S.MainText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </S.MainText>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>

        <Footer />
      </S.Container>
    </S.Wrapper>
  )
}
