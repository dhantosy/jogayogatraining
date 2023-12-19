import styled from 'styled-components'
import theme from '@/styles/theme'

export const Title = styled.div`
  position: relative;
  padding: 140px 0 200px;
  background-color: ${theme.colors.backgroundPink};
  text-align: center;

  h1 {
    font-size: 36px;
    margin: 0 0 10px;
    color: ${theme.colors.pinkMain};
  }

  p {
    margin: 0;
    font-size: 20px;
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


export const Stepper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  margin: 60px auto 30px;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const StepperItem = styled.div<{ $currentStep: number }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  position: relative;

  &:first-child {
    > div:first-child {
      background-color: ${theme.colors.tealMain};
      color: ${theme.colors.backgroundMint};
      
      &:after {
        background-color: ${theme.colors.tealMain};
      }
    }
  }

  &:nth-child(2) {
    > div:first-child {
      background-color: ${theme.colors.tealMain};
      color: ${theme.colors.backgroundMint};
      
      &:after {
        background-color: ${theme.colors.tealMain};
      }
    }
  }

  &:nth-child(3) {
    > div:first-child {
      background-color: ${theme.colors.tealMain};
      color: ${theme.colors.backgroundMint};
      
      &:after {
        background-color: ${theme.colors.tealMain};
      }
    }
  }

  &:nth-child(4) {
    > div:first-child {
      background-color: ${props => props.$currentStep === 4 ? theme.colors.tealMain : theme.colors.backgroundGrey};
      color: ${props => props.$currentStep === 4 ? theme.colors.backgroundMint : theme.colors.greenMain};
      
      &:after {
        background-color: ${props => props.$currentStep === 4 ? theme.colors.tealMain : theme.colors.backgroundGrey};
      }
    }
  }

  &:last-child {
    > div:first-child {
      &:after {
        display: none;
      } 
    }
  }

  > div:first-child {
    border-radius: 50%;
    height: 30px;
    width: 30px;
    padding: 3px 0;
    font-weight: 600;
    position: relative;
    z-index: 3;
    background-color: ${theme.colors.backgroundMint};

    &:after {
      content: '';
      width: 720%;
      height: 5px;
      position: absolute;
      top: 12px;
      left: 30px;
    }
  }
`;


export const Form = styled.div`
  max-width: 650px;
  margin: -160px auto 100px;
  background-color: ${theme.colors.backgroundMint};
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  position: relative;
  z-index: 2;

  fieldset {
    margin-bottom: 25px;
  }

  .formTop {
    display: flex;
    gap: 20px;

    > fieldset {
      flex: 1 1 100%;
    }
  }

  a.submit {
    padding: 10px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 20px 0;
  }

  .submit {
    width: 100%;
    border-radius: 20px;
    background-color: ${theme.colors.pinkMain};
    color: ${theme.colors.backgroundMint};
    display: block;
  }

  @media screen and (max-width: 860px) {
    padding: 30px 20px;

    .formTop {
      flex-direction: column;
      gap: 0;
    }
  }
`;

export const FormState = styled.div<{ $currentStep: number }>`

  &:first-child {
    display: ${props => props.$currentStep !== 3 ? 'block' : 'none'};
  }

  &:last-child {
    display: ${props => props.$currentStep === 3 ? 'block' : 'none'};
  }
  
  > div {

    &:first-child {
      visibility: ${props => props.$currentStep === 1 ? 'visible' : 'hidden'};
      max-height: ${props => props.$currentStep === 1 ? '100%' : '0'};
    }

    &:nth-child(2) {
      visibility: hidden;
      max-height: 0;

      visibility: ${props => props.$currentStep === 2 ? 'visible' : 'hidden'};
      max-height: ${props => props.$currentStep === 2 ? '100%' : '0'};
    }
  }
`;

export const Back = styled.div`
  text-align: center;
  font-size: 14px;
  margin: 15px auto;
  cursor: pointer;
`;

export const SuccessMessage = styled.section`
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
    margin: 20px 0;
  }

  @media screen and (max-width: 860px) {
    .icon {
      width: 50px;
    }

    .title {
      margin: 10px 0;
      font-size: 20px;
    }
  }
`;

export const Subtitle = styled.div`
  margin: 40px 0;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 860px) {
    font-size: 18px;
    margin: 20px 0;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: ${theme.colors.red};
  margin: 10px 0;
`;
