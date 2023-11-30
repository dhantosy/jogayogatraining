import styled from 'styled-components'
import theme from '@/styles/theme'

export const Article = styled.article`
  position: relative;
  margin: 180px 0 100px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 40%;
  border-radius: 20px;
  overflow: hidden;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 60px auto;
`;

export const ContentTitle = styled.h1`
  font-size: 40px;
  color: ${theme.colors.pinkMain};
  font-weight: 600;
`;

export const ContentBody = styled.div`
  padding: 30px 40px;
  background-color: ${theme.colors.backgroundPink};
  border-radius: 20px;
`;

export const ContentParagraph = styled.p`

`;

export const Related = styled.div`
  display: flex;
  gap: 30px;

  & > div {
    flex: 0 0 calc(33.33% - 30px);
  }
`;

export const BottomSection = styled.div`
  margin: 0 0 100px;
`;

export const RelatedTitle = styled.h3`
  font-size: 32px;
  margin: 0 0 60px;
  font-weight: 600;
`;
