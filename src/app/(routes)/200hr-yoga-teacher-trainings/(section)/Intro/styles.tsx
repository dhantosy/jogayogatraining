import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 60px 0 80px;
  position: relative;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
`;

export const Heading = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;
`;

export const Title = styled.h2`
  max-width: 860px;
  font-size: 42px;
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
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 480px;
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

  @media screen and (max-width: 1024px) {
    max-width: 150px;
    margin-top: 0;
    top: 40px;
    margin-left: -75px;
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
    height: 500px;
    right: 0;
    top: -170px;
    opacity: 0.2;
    border-radius: 20px;
  }

  & > * {
    flex: 1;
  }
`;


export const More = styled.div`
  padding: 10px 30px;
  font-size: 18px;
  font-weight: 500;
  color: ${theme.colors.white};
  background-color: ${theme.colors.tealMain};
  display: inline-block;
  border-radius: 20px;
  margin: 20px 0 0;
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;
`;
