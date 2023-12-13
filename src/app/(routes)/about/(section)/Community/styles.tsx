import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 60px 0;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 0 0 40px;
  }
`;

export const Heading = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 680px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  max-width: 580px;
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 480px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }

  @media screen and (max-width: 680px) {
    padding: 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
  position: relative;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 80%;
    height: 400px;
    right: 0;
    top: -130px;
    opacity: 0.2;
    border-radius: 20px;
  }

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 0;

    &:after {
      width: 100%;
      top: initial;
      bottom: 0;
      width: 100%;
    }
  }
`;

export const Icon = styled.div`
  width: 20px;
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;
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
  max-width: 150px;
  justify-content: center;
`;
