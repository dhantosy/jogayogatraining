import styled from 'styled-components'
import theme from '@/styles/theme';

export const Section = styled.section`
  background-color: ${theme.colors.backgroundPink};
  padding: 80px 0 50px;
`;

export const Form = styled.div`
  height: 100%;
  margin-bottom: 50px;

  > form {
    height: 100%;
  }

  fieldset {
    margin-bottom: 25px;
  }

  .formContent {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    margin-top: 30px;

    > div:first-child {
      flex: 0 0 calc(60% - 20px);
    }

    > div:last-child {
      flex: 0 0 calc(40% - 20px);
    }
  }

  .formTop {
    display: flex;
    gap: 20px;

    > fieldset {
      flex: 1;
    }
  }

  .formBottom {
    margin-top: 40px;
  }

  .submit {
    width: 100%;
    border-radius: 20px;
    background-color: ${theme.colors.pinkMain};
    color: ${theme.colors.backgroundMint};
  }
`;

export const SuccessMessage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    position: relative;
    width: 70px;
  }

  .title {
    font-size: 24px;
    font-weight: 500;
    margin: 20px 0 10px;
  }
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 500;
  color: ${theme.colors.pinkMain};
  margin: 0;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;


export const Summary = styled.div`

`;

export const SummaryContent = styled.div`
  position: sticky;
  top: 120px;
  bottom: 120px;
  background-color: ${theme.colors.tealMain};
  color: ${theme.colors.backgroundMint};
  border-radius: 20px;
  overflow: hidden;
`;

export const SummaryTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  padding: 20px 30px;
`;

export const SummaryDetail = styled.div`
  
`;

export const SummaryInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 30px;
  gap: 15px;

  &:nth-child(2) {
    margin-bottom: 15px;
  }

  > div {
    flex: 1;
  }

  > div:last-child {
    text-align: right;
    flex: 2;
    font-weight: 600;
  }

  &.price {
    background-color: ${theme.colors.backgroundMint};
    color: ${theme.colors.greenMain};
    padding: 20px 30px;
    margin-top: 0;
    align-items: flex-end;
  }
`;

export const SummaryPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
`;

export const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 50%;
  overflow: hidden;
  margin: 20px 0 0;
`;

export const SummaryAmount = styled.div<{ $discount?: boolean; }>`
  text-decoration: ${props => props.$discount ? 'line-through' : 'none'};
  opacity: ${props => props.$discount ? '0.6' : '1'};;
`;

export const DiscountAmount = styled.div`
  font-size: 16px;
  color: ${theme.colors.redLight};
`;

export const DiscountedPrice = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
