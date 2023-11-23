import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 80px 0 100px;
  position: relative;
  margin-top: 60px;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
`;

export const Subtitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  max-width: 480px;
  position: relative;
  z-index: 2;
  margin-bottom: 30px;

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
    max-width: 150px;
    margin-top: 0;
    top: 40px;
    margin-left: -75px;
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
    height: 640px;
    right: 0;
    top: -70px;
    opacity: 0.2;
    border-radius: 20px;
  }
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;
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
