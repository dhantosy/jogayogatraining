import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 80px 0 100px;
  position: relative;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }

  @media screen and (max-width: 640px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 1.2;
  position: relative;
  z-index: 2;
  margin-bottom: 30px;
  color: ${theme.colors.pinkMain};
  margin: 0 0 20px;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    margin: 25px 0;
  }

  @media screen and (max-width: 640px) {
    margin: 10px 0 0;
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  max-width: 480px;
  position: relative;
  z-index: 2;
  margin-bottom: 30px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 1024px) {
    
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 50px;
  position: relative;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 80%;
    height: 600px;
    right: 0;
    top: -66px;
    opacity: 0.2;
    border-radius: 20px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;

    &:after {
      bottom: -20px;
      top: initial;
      height: 80%;
      left: 0;
      width: 100%;
    }
    
  }
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;
  margin-top: -95px;

  @media screen and (max-width: 1024px) {
    margin-top: 0;
    padding: 0 20px;
  }
`;

export const Icon = styled.div`
  width: 20px;
`;

export const List = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  margin-bottom: 5px;
`;
