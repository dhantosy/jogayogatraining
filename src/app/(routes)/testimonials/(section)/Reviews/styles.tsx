import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 30px auto 40px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    margin: 0 auto 20px;
  }
`;

export const Heading = styled.h2`
  font-size: 36px;
  color: ${theme.colors.pinkMain};
  font-weight: 600;
  margin: 40px 0 0;

  @media screen and (max-width: 1024px) {
    margin: 0;
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px 0 0;

  & > div {
    flex: 0 0 calc(50% - 60px);
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;

    & > div {
      flex: 0 0 100%;
    }
  }
`;

export const CardHorizontal = styled.div`
  padding: 40px 0 0;
  position: relative;

  @media screen and (max-width: 1024px) {
    padding: 40px 0;
  }
`;

export const CardHorizontalWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 30px;
  position: relative;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  flex: 0 0 200px;
  padding-bottom: 30%;
  border-radius: 20px;
  overflow: hidden;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    padding-bottom: 20%;
  }
`;

export const CardHorizontalContent = styled.div`
  position: relative;
  z-index: 2;

  .link {
    display: inline-block;
    margin-top: 30px;
  }
`;

export const CardHorizontalTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 500;
  color: ${theme.colors.orange};
`;

export const CardHorizontalDetail = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  margin: 0 0 20px;
  font-weight: 600;

  .flex {
    display: flex;
    gap: 10px;
    font-size: 14px;

    & > div:first-child {
      font-weight: 400;
    }
  }
`;

export const CardHorizontalDescription = styled.div`
  position: relative;
  z-index: 2;
`;

export const Icon = styled.div`
  position: relative;
  width: 25px;
  top: 2px;
`;

export const CardHorizontalBottom = styled.div`
  position: relative;
  padding: 30px 0px 0px 60px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: calc(100% + 170px);
    left: 30px;
    top: -140px;
    opacity: 0.2;
    border-radius: 20px;
  }

  @media screen and (max-width: 1024px) {
    padding: 30px 20px 0px 20px;

    &:after {
      left: 0;
      top: -140px;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 3px;
  width: 130px;
  margin: 20px 0 10px;
  color: ${theme.colors.orange};
`;

export const VideoSection = styled.div`
  position: relative;
  margin: 60px 0 100px;

  > div {
    display: flex;
    gap: 50px;
    padding: 0 60px;
    position: relative;
  }

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 80%;
    left: 0;
    bottom: 20px;
    opacity: 0.2;
    border-radius: 20px;
  }

  @media screen and (max-width: 1024px) {
    position: relative;
    margin: 30px 0 100px;

    > div {
      overflow-x: scroll;
      justify-content: flex-start;
      gap: 20px;
      flex-wrap: nowrap;
      padding: 0 20px;
    }
  }
`;

export const VideoItem = styled.div`
  flex: 0 0 235px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: 235px;
  height: 421px;
  position: relative;
  z-index: 2;

  > div:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 100%;
    right: -20px;
    top: 20px;
    opacity: 0.2;
    border-radius: 20px;
  }

  > iframe {
    position: absolute;
    z-index: 2;
  }
`;
