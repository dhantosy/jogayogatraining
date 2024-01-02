import styled from 'styled-components'
import theme from '@/styles/theme'

export const Article = styled.article`
  position: relative;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 50%;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding-bottom: 75%;
  }
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const ContentTitle = styled.h1`
  font-size: 36px;
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

  a {
    color: ${theme.colors.tealMain};
    text-decoration: underline;
  }
`;

export const Related = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
    flex-direction: row;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: nowrap;

    > div {
      width: 260px;
      flex: 0 0 260px;
    }

  }
`;

export const BlogWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin: 180px 0 60px;

  > div {
    flex: 1 1 calc(40% - 50px);

    &:first-child {
      flex: 1 1 calc(60% - 50px);
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 100px 0 20px;
    flex-direction: column;

    > div {
      flex: 1;
    }
  }
`;

export const BottomSection = styled.div`
  margin: 0 auto;
  
  > div {
    position: sticky;
    top: 100px;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;

export const RelatedTitle = styled.h3`
  font-size: 28px;
  margin: 0;
  font-weight: 600;
  padding: 0 20px 0;

  @media screen and (max-width: 1024px) {
    margin: 20px 0 0;
  }
`;

export const ContentSubtitle = styled.span`
  font-size: 20px;
  display: block;
  font-weight: 600;
  margin: 15px 0 5px;

  @media screen and (max-width: 1024px) {
    
  }
`;
