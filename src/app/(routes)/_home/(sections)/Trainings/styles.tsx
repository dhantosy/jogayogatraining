import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 80px 0 100px;
  margin: 80px 0 0;
  background-color: ${theme.colors.orange};
  background-image: url('/assets/images/bg-pattern-3.jpg');
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
    margin: 40px 0;
  }
`;

export const Heading = styled.div`
  text-align: center;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 1024px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.backgroundMint};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.4;
  max-width: 800px;
  margin: 15px auto;
  color: ${theme.colors.backgroundMint};

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 48px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    margin: 40px 0 0;
  }
`;

export const ContentHeading = styled.div`
  margin: 0 0 20px;
`;

export const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 20px;
  text-transform: uppercase;
  color: ${theme.colors.pinkMain};
`;

export const ContentDetail = styled.div`
  display: flex;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;

  &.bottom {
    align-items: flex-start;
    font-weight: 400;

    > div:first-child {
      flex: 0 0 20px;
    }
  }
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;
  background: ${theme.colors.backgroundMint};
  border-radius: 20px;
  overflow: hidden;
  flex: 1;
  flex-direction: column;
  display: flex;
`;

export const ContentBody = styled.div`
  padding: 20px;
  border-bottom: 15px solid ${theme.colors.backgroundPink};
  border-left: 15px solid ${theme.colors.backgroundPink};
  border-right: 15px solid ${theme.colors.backgroundPink};
  height: 100%;
`;

export const Icon = styled.div`
  width: 20px;
`;

export const ContentList = styled.div`
  font-size: 16px;
  min-height: 167px;

  & > .subtitle {
    margin-bottom: 10px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 60%;
`;

export const ButtonMore = styled.div`
  padding: 10px 20px;
  color: ${theme.colors.backgroundMint};
  background-color: ${theme.colors.tealMain};
  margin: 40px 0 0 auto;
  font-weight: 600;
  max-width: 130px;
  text-align: center;
  border-radius: 20px;
`;

export const Discount = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  z-index: 2;
  background-color: ${theme.colors.redLight};
  color: ${theme.colors.backgroundMint};
  font-weight: 700;
  text-align: center;
  padding: 15px 20px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  opacity: 0.95;

  @media screen and (max-width: 1024px) {
    letter-spacing: 1px;
    font-size: 14px;
  }
`;
