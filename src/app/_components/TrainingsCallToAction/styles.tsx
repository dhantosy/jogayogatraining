import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0 0;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 60px 0 30px;
  }
`;

export const Heading = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
  padding: 0 30px;
  max-width: 700px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
    padding: 0;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};
  position: relative;
  z-index: 2;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 30%;
  position: relative;
  top: -77px;

  @media screen and (max-width: 1024px) {
    top: 0;
    padding-bottom: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  position: relative;
  padding: 0 30px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 88%;
    height: 300px;
    left: 0;
    top: -55px;
    opacity: 0.2;
    border-radius: 20px;
  }

  & > * {
    flex: 1;
  }

  & > .image {
    flex: 0 0 400px;
  }

  .link {
    display: inline-block;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 0;
    padding: 0;

    & > .image {
      flex: 0 0 100%;
    }

    &:after {
      top: initial;
      width: 100%;
      height: 100%;
      bottom: 0px;
    }
  }
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;
  max-width: 620px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px 30px;
    max-width: 100%;
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

  @media screen and (max-width: 1024px) {
    margin: 0;
  }
`;
