import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 80px auto 0;
  z-index: 2;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;

  & > div {
    flex: 0 0 calc(25% - 50px);
  }
`;

export const PopUpContainerOuter = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 20;
`;

export const PopUpContainerInner = styled.div`
  position: relative;
  z-index: 22;
  max-width: 600px;
  margin: auto;
  display: flex;
  height: 100vh;
  align-items: center;
`;

export const PopUpContainerOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 21;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const PopUpContent = styled.div`
  padding: 30px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  position: relative;
`;

export const PopUpContentName = styled.div`
  font-size: 32px;
  color: ${theme.colors.pinkMain};
  margin: 10px 0 20px;
  font-weight: 500;
`;

export const PopUpContentDesc = styled.div`
  padding: 30px 35px;
  border-radius: 20px;
  background-color: ${theme.colors.backgroundPink};
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  cursor: pointer;
`;
