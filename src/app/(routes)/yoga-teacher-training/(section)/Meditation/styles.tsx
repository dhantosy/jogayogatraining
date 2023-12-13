import styled from 'styled-components'
import theme from '@/styles/theme'

export const Gallery = styled.div`
  position: relative;
  padding: 0 0 40px;
  margin-bottom: 40px;

  & > .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  & > .flex > .text {
    flex: 1;
    position: relative;
    padding: 0 40px 0;
    z-index: 3;

    &:after {
      content: '';
      background-color: ${theme.colors.orange};
      position: absolute;
      width: 125%;
      height: 90%;
      left: 0;
      top: 63px;
      opacity: 0.2;
      border-radius: 20px;
      overflow: hidden;
    }
  }

  & > .flex > .image {
    flex: 0 0 540px;
  }

  @media screen and (max-width: 1024px) {
    padding: 70px 0 40px;

    & > .flex {
      flex-direction: column;
      gap: 0;
    }

    & > .flex > .text {
      padding: 0;

      &:after {
        width: 100%;
        top: 55px;
      }
    }
  }

  @media screen and (max-width: 640px) {
    padding: 40px 0 0;
    margin-bottom: 20px;
  }
`;


export const ContentHeading = styled.div`
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};
  font-size: 32px;
  line-height: 1.2;
  font-weight: 500;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;

  > div {
    margin: 15px 0;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 3;
  border-radius: 20px;
  overflow: hidden;
  padding-bottom: 40%;
  width: 540px;

  @media screen and (max-width: 640px) {
    width: 100%;
    margin: 20px 0 0;
    padding-bottom: 70%;
  }
`;

export const ContentList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 0;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 600;

  > div {
    flex: 1;
    align-items: center;
  }
  
  > div:first-child {
    position: relative;
    flex: 0 0 18px;
  }

  @media screen and (max-width: 640px) {
    align-items: flex-start;

    > div:first-child {
      top: 3px;
    }
  }
`;
