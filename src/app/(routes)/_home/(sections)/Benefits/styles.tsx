import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
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
  font-size: 42px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 32px;
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
    margin: 25px 0;
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
    height: 450px;
    left: 0;
    top: -123px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  & > div {
    flex: 1;
  }
`;

export const ContentHeading = styled.div`
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 500;
  position: relative;
  z-index: 2;

  &.subheading {
    color: ${theme.colors.pinkMain};
    font-size: 32px;
    line-height: 1.2;
  }
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 3;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 50%;
  width: 640px;

  &.bottom {
    padding-bottom: 50%;
  }
`;

export const Gallery = styled.div`
  position: relative;
  padding: 150px 0 0;

  & > .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  & > .flex > .text {
    flex: 1;
    position: relative;
    padding: 0 40px 0;
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

  & > .flex > .image {
    flex: 0 0 540px;
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
