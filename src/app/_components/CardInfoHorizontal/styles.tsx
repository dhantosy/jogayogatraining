import styled from 'styled-components'
import theme from '@/styles/theme'

export const CardHorizontal = styled.div`
  padding: 40px 0 0;
  position: relative;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    padding: 40px 0 80px;
  }
`;

export const CardHorizontalWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 320px;
    left: 80px;
    top: 40px;
    opacity: 0.2;
    border-radius: 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 0 0 300px;
  padding-bottom: 20%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;
`;

export const CardHorizontalContent = styled.div`
  position: relative;
  z-index: 2;

  .link {
    display: inline-block;
    margin-top: 30px;
  }
`;

export const CardHorizontalTitle = styled.h3`
  margin: 10px 0 20px;
  font-size: 32px;
  font-weight: 600;
  color: ${theme.colors.orange};
`;

export const CardHorizontalDetail = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  margin: 0 0 20px;
  font-weight: 600;

  .flex {
    display: flex;
    gap: 7px;
    align-items: center;
  }
`;

export const CardHorizontalDescription = styled.div`
  
`;

export const Icon = styled.div`
  position: relative;
  width: 25px;
  top: 2px;
`;

export const Button = styled.div`
  width: 200px;
  border-radius: 20px;
  background-color: ${theme.colors.tealMain};
  color: ${theme.colors.backgroundMint};
  font-size: 16px;
  text-transform: uppercase;
  padding: 8px 20px;
  text-align: center;
  font-weight: 600;
`;

export const Discount = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  z-index: 2;
  background-color: ${theme.colors.redLight};
  color: ${theme.colors.backgroundMint};
  font-weight: 700;
  text-align: center;
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  opacity: 0.95;
  font-size: 14px;
`;

