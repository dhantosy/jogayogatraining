import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 40px auto 0;
  z-index: 2;

  @media screen and (max-width: 640px) {
    margin: 20px auto 0;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  & > div {
    flex: 0 0 calc(50% - 50px);
    position: relative;

    > div:first-child {
      width: 250px;
      margin: auto;
    }
  }

  .subtitle {
    text-align: center;
    margin: -20px 0 20px;
  }

  .desc {
    text-align: center;
    background-color: #FAECE5;
    padding: 80px 40px 40px;
    border-radius: 20px;
    margin-top: -60px;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  @media screen and (max-width: 640px) {
    align-items: flex-start;
    gap: 60px;
    flex-wrap: wrap;

    & > div {
      flex: 0 0 100%;
    }

    .desc {
      padding: 60px 20px 30px;
    }
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

  @media screen and (max-width: 640px) {
    padding: 20px;
  }
`;

export const PopUpContentName = styled.div`
  font-size: 32px;
  color: ${theme.colors.pinkMain};
  margin: 10px 0 20px;
  font-weight: 500;

  @media screen and (max-width: 640px) {
    font-size: 24px;
    margin: 0 0 10px;
  }
`;

export const PopUpContentDesc = styled.div`
  padding: 30px 35px;
  border-radius: 20px;
  background-color: ${theme.colors.backgroundPink};

  @media screen and (max-width: 640px) {
    padding: 20px;
    font-size: 15px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  cursor: pointer;
`;
