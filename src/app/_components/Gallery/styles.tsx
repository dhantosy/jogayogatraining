import styled from 'styled-components'
import theme from '@/styles/theme'

export const GalleryContainer = styled.div`
  padding: 80px 0 110px;
  margin-bottom: 80px;
  position: relative;
  background-color: ${theme.colors.orange};
  background-image: url('/assets/images/bg-pattern-3.jpg');
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
    margin-bottom: 40px;
  }
`;

export const GalleryHeading = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0 0 40px;
  color: ${theme.colors.backgroundMint};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const GallerySubtitle = styled.p`
  font-size: 27px;
  font-weight: 500;
  margin: 0 0 40px;
  white-space: pre-wrap;
  text-align: center;
  color: ${theme.colors.backgroundMint};

  @media screen and (max-width: 1024px) {
    font-size: 18px;
    line-height: 1.4;
  }
`;

export const GalleryContent = styled.div`
  display: flex;
  gap: 30px;
  margin: auto;
  max-width: 1180px;
  padding: 0 20px;

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

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
    justify-content: flex-start;
    gap: 20px;
    flex-wrap: nowrap;

    > div {
      width: 230px;
      flex: 0 0 230px;
    }

    .col-1,
    .col-3,
    .col-4 {
      gap: 20px;
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


