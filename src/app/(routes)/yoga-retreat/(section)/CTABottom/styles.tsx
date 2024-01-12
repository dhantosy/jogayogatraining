import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  padding: 0 0 30px;
  background-color: #FBEDE8;
  text-align: center;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    padding: 0 0 30px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 10px;
  color: ${theme.colors.pinkMain};
  font-size: 36px;
  font-weight: 500;
  position: relative;
  z-index: 2;
  line-height: 1.2;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.3;
  }
`;


export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
  margin: 0 auto 20px;
  font-size: 20px;
  max-width: 600px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 20px auto;
  }
`;

export const Content = styled.div`
  position: relative;
  top: -28px;

  @media screen and (max-width: 1024px) {

  }
`;

export const Button = styled.div`
  padding: 8px 45px;
  font-weight: 600;
  border-radius: 20px;
  background-color: ${theme.colors.tealMain};
  color: ${theme.colors.backgroundMint};
  display: inline-block;
  margin: 20px 0 0;
  text-transform: uppercase;
`;
