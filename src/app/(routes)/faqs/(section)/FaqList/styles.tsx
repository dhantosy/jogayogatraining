import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  margin-bottom: 60px;
  margin-top: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 20px 0;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 60px;

  & > div:first-child {
    flex: 0 0 20%;
  }

  & > div:last-child {
    flex: 0 0 70%;
  }

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }

  .content {
    position: relative;
  }

  .anchor {
    position: absolute;
    top: -150px;
  }
`;

export const Item = styled.div`
  border-top: 1px solid ${theme.colors.greyLight};

  &:first-child {
    border-top: none;
  }
`;

export const ItemTitle = styled.div`
  padding: 20px;
  font-weight: 600;
  display: flex;
  gap: 20px;
  cursor: pointer;
`;

export const ItemContent = styled.div<{ $isOpen?: boolean; }>`
  display: ${props => props.$isOpen ? 'block' : 'none'};
  padding: 0px 20px 20px;
`;

export const ContentNav = styled.div`
  position: sticky;
  top: 150px;
  padding: 20px;
  border-radius: 20px;
  background-color: ${theme.colors.backgroundPink};

  div {
    border-bottom: 1px solid ${theme.colors.white};
    
    &:last-child {
      border-bottom: none;
    };
  }

  a {
    padding: 12px 5px;
    display: block;
  }
`;

export const Icon = styled.div`
  width: 20px;
`;
