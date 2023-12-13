import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 30px auto 80px;
  position: relative;
  z-index: 2;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 76%;
    left: 0;
    top: 33px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 auto 60px;

    &:after {
      top: 45px;
      height: 96%;
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
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  max-width: 860px;
  margin: 0 auto 30px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 84px;
  height: 84px;
  margin: 20px auto;

  &.photo {
    padding-bottom: 23%;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    &.photo {
      width: 230px;
      padding-bottom: 40%;
      flex: 0 0 230px;
    }
  }
`;

export const Photos = styled.div`
  position: relative;
  margin: 20px auto;
  display: flex;
  gap: 30px;
  padding: 0 30px;

  > div {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: nowrap;
  }
`;
