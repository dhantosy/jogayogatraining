import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 100px auto;
  position: relative;
  z-index: 2;
  max-width: 900px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: calc(100% + 50px);
    height: 100%;
    left: -25px;
    top: 35px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
    padding: 0 20px;
    margin: 20px auto 60px;

    &:after {
      width: calc(100% - 40px);
      left: 0;
      right: 0;
      margin: auto;
      height: 97%;
    }

  }
`;

export const Heading = styled.div`
  margin: 0 0 20px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};
  font-size: 36px;
  font-weight: 500;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    line-height: 1.2;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 3;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 32%;

  @media screen and (max-width: 640px) {
    margin: 20px 0 0;
  }
`;
