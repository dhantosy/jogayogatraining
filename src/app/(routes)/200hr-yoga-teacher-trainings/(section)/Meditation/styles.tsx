import styled from 'styled-components'
import theme from '@/styles/theme'

export const ContentHeading = styled.div`
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};
  font-size: 32px;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;

  > div {
    margin: 15px 0;
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
`;

export const Gallery = styled.div`
  position: relative;
  padding: 40px 0;
  margin-bottom: 60px;

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
      height: 400px;
      left: 0;
      top: 28px;
      opacity: 0.2;
      border-radius: 20px;
      overflow: hidden;
    }
  }

  & > .flex > .image {
    flex: 0 0 540px;
  }
`;

