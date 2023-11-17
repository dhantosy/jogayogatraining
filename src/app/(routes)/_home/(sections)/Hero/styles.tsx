import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
  border: 18px solid ${theme.colors.white};

  @media screen and (max-width: 1100px) {
    height: 80vh;
  }

  @media screen and (max-width: 1024px) {
    height: initial;
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
    height: 100%;
    background-color: rgba(0,0,0,0.4);
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    display: flex;
    margin-top: 60px;

    &:after {
      display: none;
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
  margin-top: 50px;
  max-width: 900px;

  @media screen and (max-width: 1100px) {
    min-height: 100%;
  }

  @media screen and (max-width: 1024px) {
    color: ${theme.colors.greenMain};
    margin-top: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 80px;
  font-weight: 600;
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};
  line-height: 1;
  font-family: var(--font-poppins), sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
  line-height: 1.2;
  font-family: var(--font-poppins), sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    text-align: left;
    margin: 20px 0 30px;
  }

  &.bottom {
    font-size: 18px;
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
