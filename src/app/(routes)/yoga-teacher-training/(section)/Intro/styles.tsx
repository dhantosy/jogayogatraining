import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 160px 0 20px;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 90px 0 20px;
  }
`;

export const Heading = styled.div`
  position: relative;
  z-index: 3;
`;

export const Title = styled.h1`
  font-size: 48px;
  text-align: center;
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

export const Subtitle = styled.h2`
  font-size: 28px;
  margin: 0;
  font-weight: 500;
  text-align: center;
  color: ${theme.colors.pinkMain};
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding-bottom: 40%;
`;

export const Content = styled.div`
  border: 18px solid ${theme.colors.white};
  margin-top: -258px;
`;

export const Desc = styled.div`
  text-align: center;
  margin: 60px 0 0;
  font-size: 18px;
  font-weight: 500;
`;

export const Button = styled.div`
  padding: 8px 45px;
  font-weight: 600;
  border-radius: 20px;
  background-color: ${theme.colors.pinkMain};
  color: ${theme.colors.backgroundMint};
  display: inline-block;
  margin: 20px 0 0;
  text-transform: uppercase;
`;
