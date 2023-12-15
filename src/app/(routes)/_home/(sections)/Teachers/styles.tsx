import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 100px 0 80px;

  @media screen and (max-width: 1024px) {
    padding: 40px 0 60px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0 20px;
  }
`;

export const Heading = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    line-height: 1.2;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 800px;
  margin: 15px auto;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;

    & > * {
      flex: 0 0 calc(50% - 30px);
    }
  }
`;

export const More = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const Icon = styled.div`
  width: 20px;
`;
