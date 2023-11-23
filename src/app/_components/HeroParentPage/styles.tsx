import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 180px 0 20px;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 180px 0 20px;
  }
`;

export const Heading = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h1`
  max-width: 580px;
  font-size: 60px;
  font-weight: 600;
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
  font-size: 18px;
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
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
  top: -50px;

  @media screen and (max-width: 1024px) {
    max-width: 150px;
    margin-top: 0;
    top: 40px;
    margin-left: -75px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  position: relative;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 80%;
    height: 400px;
    left: -30px;
    top: -142px;
    opacity: 0.2;
    border-radius: 20px;
  }

  & > * {
    flex: 1;
  }
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;
`;
