import styled from 'styled-components'
import theme from '@/styles/theme'

export const NotFound = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 200px);
  background-color: ${theme.colors.backgroundBlue};
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  color: ${theme.colors.white};
  text-align: center;
  padding-top: 100px;
`;

export const Title = styled.h2`
  font-size: 100px;
  font-weight: 700;
  line-height: 1.2;
  color: ${theme.colors.cyan};
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
  }
`;

export const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 0 0 20px;
`;

