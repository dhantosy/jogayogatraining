import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 40px 0;

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

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 105%;
    height: 450px;
    right: -25px;
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
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;
`;

