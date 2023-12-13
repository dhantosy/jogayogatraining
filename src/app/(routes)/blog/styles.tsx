import styled from 'styled-components'
import theme from '@/styles/theme'

export const Article = styled.article`
  position: relative;
  margin: 180px 0 100px;

  @media screen and (max-width: 1024px) {
    margin: 100px 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 40%;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding-bottom: 60%;
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 60px auto;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const ContentTitle = styled.h1`
  font-size: 40px;
  color: ${theme.colors.pinkMain};
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    margin: 20px 0;
    line-height: 1.2;
  }
`;

export const ContentBody = styled.div`
  padding: 30px 40px;
  background-color: ${theme.colors.backgroundPink};
  border-radius: 20px;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }
`;

export const ContentParagraph = styled.p`

`;

export const Related = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;

  & > div {
    flex: 0 0 calc(33.33% - 30px);
  }

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: nowrap;

    > div {
      width: 260px;
      flex: 0 0 260px;
    }

  }
`;

export const BottomSection = styled.div`
  margin: 0 auto 40px;
  max-width: 1180px;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const RelatedTitle = styled.h3`
  font-size: 28px;
  margin: 0 0 20px;
  font-weight: 600;
  padding: 0 20px 0;

  @media screen and (max-width: 1024px) {
    margin: 20px 0 0;
  }
`;
