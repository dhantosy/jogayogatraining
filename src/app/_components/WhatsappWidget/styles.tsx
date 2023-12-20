import styled from 'styled-components'
import theme from '@/styles/theme';

export const Widget = styled.div`
  background-color: ${theme.colors.tealMain};
  color: ${theme.colors.backgroundMint};
  position: fixed;
  bottom: 25px;
  right: 25px;
  border-radius: 50px;
  z-index: 10;
  border: 4px solid ${theme.colors.backgroundMint};
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    bottom: 20px;
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
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const TabWrapperOuter = styled.div<{ $active?: boolean; }>`
  position: fixed;
  right: 20px;
  bottom: 100px;
  z-index: 10;
  background-color: ${theme.colors.tealMain};
  border-radius: 20px;
  width: 360px;
  border: 4px solid ${theme.colors.backgroundMint};
  display: ${props => props.$active ? 'block' : 'none'};
  height: 508px;

  &:after {
    content: '';
    position: absolute;
    bottom: -17px;
    right: 15px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid ${theme.colors.backgroundMint};
    z-index: 9;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 530px;
    right: 0;
  }
`;

export const TabWrapperInner = styled.div`

`;

export const TabList = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const TabTitle = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px 20px;
  border-radius: 20px;
  color: ${theme.colors.backgroundMint};
  cursor: pointer;
  font-weight: 500;

  &.active {
    background-color: ${theme.colors.backgroundMint};
    color: ${theme.colors.tealMain};
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const TabContent = styled.div`
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  flex: 0 0 50px;
`;

export const Chat = styled.div`
  background-color: ${theme.colors.backgroundMint};
  border-radius: 20px;
  overflow: hidden;
  height: 416px;

  @media screen and (max-width: 480px) {
    height: 439px;
  }
`;

export const ChatTitle = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 13px;
  gap: 10px;
  padding: 10px;

  .name {
    font-weight: 700;
  }
`;

export const ChatBody = styled.div`
  padding: 10px 10px 151px;
  background-image: url('/assets/images/bg-chat.png');
  background-color: ${theme.colors.backgroundPink};
  background-position: center;
`;

export const ChatBubble = styled.div`
  background-color: ${theme.colors.backgroundMint};
  padding: 10px 20px;
  width: 80%;
  font-size: 13px;
  border-radius: 20px;
`;

export const ChatTime = styled.div`
  text-align: right;
  font-size: 12px;
  opacity: 0.5;
  margin-top: 5px;
`;

export const ChatFooter = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 10px;

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: ${theme.colors.pinkMain};
    color: ${theme.colors.backgroundMint};
    padding: 9px 10px;
    border-radius: 20px;

    > div:first-child {
      flex: 0 0 20px;
    }
  }
`;

export const Form = styled.div`
  padding: 15px 10px 10px;
  height: 100%;
  overflow: auto;

  > form {
    height: 100%;
  }

  .submit {
    width: 100%;
    border-radius: 20px;
    background-color: ${theme.colors.pinkMain};
    color: ${theme.colors.backgroundMint};
  }
`;

export const SuccessMessage = styled.div`
  padding: 15px 10px 10px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .icon {
    position: relative;
    width: 70px;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0 10px;
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: ${theme.colors.red};
  margin: 10px 0;
`;
