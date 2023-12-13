import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  margin: 30px 0 120px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: calc(100% - 150px);
    left: 0;
    top: 40px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
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
  gap: 40px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;
  padding: 0 40px 0;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    flex: 0 0 calc(50% - 40px);
  }

  @media screen and (max-width: 1024px) {
    flex-wrap: nowrap;
    gap: 10px;
    margin: 0;
    padding: 40px 20px;
    overflow-x: scroll;
    justify-content: flex-start;

    & > div {
      flex: 0 0 200px;
    }
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

  @media screen and (max-width: 1024px) {
    margin: 0 0 10px;

    &.subheading {
      font-size: 28px;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 3;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 25%;

  @media screen and (max-width: 1024px) {
    padding-bottom: 25%;
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 55%;
  }
`;
