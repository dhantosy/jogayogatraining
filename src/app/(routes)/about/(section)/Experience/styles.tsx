import styled from 'styled-components'
import theme from '@/styles/theme'

export const ContentHeading = styled.div`
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};
  font-size: 32px;
  font-weight: 500;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
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
  padding-bottom: 50%;
  width: 640px;

  &.bottom {
    padding-bottom: 50%;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Gallery = styled.div`
  position: relative;
  padding: 40px 0;
  margin-bottom: 60px;

  .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  .text {
    flex: 1;
    position: relative;
    padding: 0 40px 0;
    z-index: 3;

    &:after {
      content: '';
      background-color: ${theme.colors.orange};
      position: absolute;
      width: 125%;
      height: 340px;
      left: 0;
      top: 28px;
      opacity: 0.2;
      border-radius: 20px;
      overflow: hidden;
    }
  }

  .image {
    flex: 0 0 540px;
  }

  @media screen and (max-width: 1024px) {
    padding: 20px 0;
    margin-bottom: 40px;

    .flex {
      flex-direction: column-reverse;
      gap: 25px;
    }

    .text {
      padding: 0;

      &:after {
        top: 40px;
        width: 100%;
        height: 90%;
      }
    }
  }
`;

