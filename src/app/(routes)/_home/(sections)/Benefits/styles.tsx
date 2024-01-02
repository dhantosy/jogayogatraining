import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  padding: 100px 0 20px;

  @media screen and (max-width: 1024px) {
    padding: 0;
    margin-bottom: 80px;
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
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 800px;
  margin: 15px auto;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0 0;
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;
  padding: 0 40px 0;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: calc(100% + 150px);
    left: 0;
    top: -119px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  & > div {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
    margin: 30px 0 0;
    padding: 0 20px;

    &:after {
      top: -85px;
    }
  }
`;

export const ContentHeading = styled.div`
  margin: -40px 0 20px;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  z-index: 2;

  &.subheading {
    color: ${theme.colors.pinkMain};
    font-size: 32px;
    line-height: 1.2;
  }

  @media screen and (max-width: 1024px) {
    margin: -40px 0 10px;

    &.subheading {
      font-size: 28px;
    }
  }
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 63%;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    
  }
`;

export const Gallery = styled.div`
  position: relative;
  padding: 150px 0 0;

  .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  .text {
    flex: 1;
    position: relative;
    padding: 0 40px;
    z-index: 3;

    &:after {
      content: '';
      background-color: ${theme.colors.orange};
      position: absolute;
      width: 125%;
      height: 360px;
      left: 0;
      top: 24px;
      opacity: 0.2;
      border-radius: 20px;
      overflow: hidden;
    }
  }

  .image {
    flex: 0 0 540px;
  }

  @media screen and (max-width: 1024px) {
    padding: 110px 0 0;

    .flex {
      flex-direction: column-reverse;
      gap: 30px;
      align-items: flex-start;
    }

    .text {
      padding: 0 20px;
    }

    & > .flex > .text:after {
      width: 100%;
      height: 100%;
    }
  }
`;

export const More = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.white};
  background-color: ${theme.colors.tealMain};
  border-radius: 20px;
  margin: 30px 0 0;
  max-width: 230px;
  justify-content: center;
  position: relative;
  z-index: 2;
`;
