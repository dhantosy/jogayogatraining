import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  position: relative;
  margin: 0 0 20px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 36px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 480px) {
    margin: 0 0 20px;
  }
`;

export const Heading = styled.div`
  text-align: center;
  position: relative;
  z-index: 3;

  @media screen and (max-width: 1024px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;
  padding: 0 40px;
  flex-wrap: wrap;
  justify-content: center;

  & > div {
    flex: 0 0 calc(50% - 40px);
  }

  .left {
    text-align: center;
  }

  .left-content {
    margin: 15px 0 20px;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .left-date {
    text-align: center;
  }

  .left-date-item {
    display: flex;
    gap: 10px;
    align-items: center;

    > div {
      flex: 0 0 auto;
    }

    .left-date-icon {
      flex: 0 0 20px;
      position: relative;
      top: 2px;
    }
  }

  .price-original {
    font-size: 24px;
    text-decoration: line-through;
  }

  .price-discount {
    font-size: 32px;
    font-weight: 600;
    color: ${theme.colors.pinkMain};
  }

  .btn {
    padding: 8px 30px;
    font-weight: 500;
    font-size: 20px;
    background-color: ${theme.colors.tealMain};
    color: ${theme.colors.backgroundMint};
    border-radius: 20px;
    display: inline-block;
  }

  .list-title {
    font-weight: 500;
    margin-bottom: 20px;
    font-size: 18px;
  }

  .list {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 5px;

    > div {
      flex: 1;
    }

    .icon {
      flex: 0 0 20px;
    }
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin: 20px 0;
    padding: 0 20px;
  }
`;
