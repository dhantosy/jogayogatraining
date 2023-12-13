import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 0 auto 80px;
  position: relative;
  z-index: 2;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 76%;
    left: 0;
    top: 36px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 auto 40px;

    &:after {
      height: 82%;
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
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  max-width: 910px;
  margin: 0 auto 20px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 84px;
  padding-bottom: 7%;
  margin: 20px auto;

  &.photo {
    padding-bottom: 23%;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 1024px) {
    &.photo {
      padding-bottom: 43%;
    }
  }

  @media screen and (max-width: 640px) {
    &.photo {
      padding-bottom: 63%;
    }
  }
`;

export const Photos = styled.div`
  position: relative;
  margin: 40px auto;
  display: flex;
  gap: 30px;
  padding: 0 30px;

  > div {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
    gap: 10px;
    margin: 0;
    padding: 0 20px;
    overflow-x: scroll;
    justify-content: flex-start;

    & > div {
      flex: 0 0 200px;
    }
  }
`;
