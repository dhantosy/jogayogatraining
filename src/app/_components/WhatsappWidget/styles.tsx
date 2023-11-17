import styled from 'styled-components'
import theme from '@/styles/theme';

export const Widget = styled.div`
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 50px;
  z-index: 10;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    bottom: 15px;
    right: 20px;
  }
`;

export const Icon = styled.div`
  width: 20px;
  flex: 1 1 20px;
  position: relative;
  top: 3px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 5px;
  padding: 10px 15px;
  align-items: center;
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;
