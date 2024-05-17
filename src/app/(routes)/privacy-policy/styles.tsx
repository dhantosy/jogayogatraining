import styled from 'styled-components'
import theme from '@/styles/theme'

export const Title = styled.div`
  position: relative;
  padding: 200px 0;

  h1 {
    font-size: 36px;
    margin: 0 0 10px;
    color: ${theme.colors.pinkMain};
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 0 200px;

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
    }
  }
`;
