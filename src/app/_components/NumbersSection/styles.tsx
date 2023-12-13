import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  padding: 20px 0;

  @media screen and (max-width: 1024px) {
    padding: 80px 0 10px;
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

export const Title = styled.p`
  font-size: 32px;
  font-weight: 500;
  line-height: 1.3;
  color: ${theme.colors.pinkMain};
  max-width: 800px;
  margin: auto;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.2;
    margin: 20px;
  }

  @media screen and (max-width: 640px) {
    font-size: 18px;
    line-height: 1.4;
  }
`;

export const Subtitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  line-height: 1.2;
  max-width: 800px;
  margin: 15px auto 24px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    margin: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  margin: 60px 0;
  position: relative;
  z-index: 2;
  padding: 0 40px 0;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: calc(100% + 170px);
    left: 0;
    top: -116px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  & > div {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
    margin: 30px 0 0;
    padding: 0 20px;

    &:after {
      top: -165px;
    }
  }
`;

export const ContentHeading = styled.div`
  margin: 0 0 20px;
  font-size: 16px;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: top;
  gap: 15px;

  > div:first-child {
    flex: 0 0 50px;
  }

  .subheading {
    font-size: 32px;
    line-height: 1.2;
    font-weight: 600;
  }

  .text {
    max-width: 200px;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 0 10px;

    .subheading {
      font-size: 20px;
    }

    > div:first-child {
      flex: 0 0 30px;
    }
  }
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  color: ${theme.colors.orange};

  @media screen and (max-width: 640px) {
    width: 30px;
    height: 30px;
  }
`;
