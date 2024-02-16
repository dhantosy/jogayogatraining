import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  border: 18px solid ${theme.colors.white};

  @media screen and (max-width: 1180px) {
    height: 80vh;
  }

  @media screen and (max-width: 1024px) {
    height: initial;
    border: none;
  }
`;

export const VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  background-color: ${theme.colors.backgroundGrey};

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: calc(100% - 6px);
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    display: flex;
    margin-top: 65px;
    border: 20px solid ${theme.colors.white};
    border-bottom: none;
    z-index: 3;

    &:after {
      display: none;
    }

    > video {
      border-radius: 20px 20px 0 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  align-items: flex-start;
  min-height: 100vh;
  justify-content: center;
  color: ${theme.colors.white};
  max-width: 900px;

  @media screen and (max-width: 1180px) {
    min-height: 100%;
  }

  @media screen and (max-width: 1024px) {
    color: ${theme.colors.greenMain};
    background-color: #fbede7;
    padding: 40px 20px 20px;
    border-radius: 20px;
    max-width: 100%;
    margin-top: -20px;
  }
`;

export const Title = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 15px;
  color: ${theme.colors.pinkMain};
  line-height: 1.1;
  font-family: var(--font-poppins), sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
    line-height: 1.2;
    margin: 0 0 5px;
  }
`;

export const TitleSmall = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 10px;
  color: ${theme.colors.pinkMain};
  line-height: 1.1;
  font-size: 40px;
  font-family: var(--font-poppins), sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 1.2;
    margin: 0 0 5px;
  }
`;

export const Subtitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  font-family: var(--font-poppins), sans-serif;
  margin-bottom: 20px;

  &.bottom {
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    text-align: left;
    margin: 10px 0;

    &.bottom {
      margin: 10px 0 20px;
    }
  }
`;

export const Button = styled.button`
  background-color: ${theme.colors.pinkMain};
  padding: 18px 70px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.colors.pinkMain};
  }

  @media screen and (max-width: 1024px) {
    padding: 15px 50px;
    font-size: 16px;
    color: ${theme.colors.white};
    margin-bottom: 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 63px;
  height: 63px;

  .mobile {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 0;
    height: 55px;
    width: 55px;

    .mobile {
      display: block;
    }

    .desktop {
      display: none;
    }
  }
`;


export const Logos = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
