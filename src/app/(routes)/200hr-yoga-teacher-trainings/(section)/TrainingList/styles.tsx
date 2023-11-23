import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  margin-bottom: 60px;
  margin-top: 80px;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 1000px;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;
