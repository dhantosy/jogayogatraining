import styled from 'styled-components'
import theme from '@/styles/theme'

export const GalleryContainer = styled.div`
  padding: 80px 0 110px;
  position: relative;
  background-color: ${theme.colors.orange};
  background-image: url('/assets/images/bg-pattern-3.jpg');
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    padding: 40px 0 80px;
  }
`;

export const GalleryHeading = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0 0 40px;
  color: ${theme.colors.backgroundMint};

  @media screen and (max-width: 1024px) {
    padding: 40px 0 80px;
  }
`;

export const GalleryContent = styled.div`
  display: flex;
  gap: 30px;

  > div {
    flex: 1;
  }

  .col-1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .col-2 {
    .image {
      padding-bottom: 108%;
    }
  }

  .col-3 {
    display: flex;
    flex-direction: column;
    gap: 30px;

    > div {
      flex: 1;
    }
  }

  .col-4 {
    display: flex;
    gap: 30px;

    > div {
      flex: 1;
    }

    .image {
      padding-bottom: 108%;
    }
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  border-radius: 20px;
  overflow: hidden;
`;


