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
  max-width: 800px;
  font-size: 68px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.pinkMain};
  position: relative;
  z-index: 2;
  line-height: 1.2;
  min-height: 163px;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding-bottom: 36%;
`;

export const Content = styled.div`
  border: 18px solid ${theme.colors.white};
  margin-top: -128px;
`;
