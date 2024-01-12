import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 80px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const Heading = styled.div`
  margin-bottom: 40px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    max-width: 100%;
    line-height: 1.2;
    margin: 0 0 50px;
  }

  @media screen and (max-width: 655px) {
    margin: 0 0 10px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 520px;
  margin: 40px 0 0;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }

  @media screen and (max-width: 655px) {
    margin: 0 0 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: block;
  }

  @media screen and (max-width: 655px) {
    display: inline-flex;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
  position: relative;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 80%;
    height: calc(100% + 200px);
    right: 0;
    top: -130px;
    opacity: 0.2;
    border-radius: 20px;
  }

  & > div {
    flex: 1 1 60%;

    &:first-child {
      flex: 1 1 40%;
    }
  }

  @media screen and (max-width: 1024px) {
    &:after {
      height: 350px;
      right: 0;
      top: -25px;
    }
  }

  @media screen and (max-width: 655px) {
    & {
      flex-direction: column;
    }
      
    &:after {
      width: 100%;
      height: 450px;
      left: 0;
      top: initial;
      right: initial;
      bottom: -30px;
    }
  }
`;

export const Icon = styled.div`
  width: 20px;
`;

export const ContentSub = styled.div`
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    padding-right: 20px;
  }

  @media screen and (max-width: 655px) {
    padding-right: 20px;
    padding-left: 20px;
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

export const ContentList = styled.section`
  display: flex;
  gap: 20px;
  margin: 30px 0;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  display: flex;
  gap: 5px;
  font-weight: 600;
  flex: 1 1 calc(50% - 10px);
  align-items: flex-start;

  > div {
    flex: 1;
    align-items: center;
  }
  
  > div:first-child {
    position: relative;
    top: 2px;
    flex: 0 0 18px;
  }

  @media screen and (max-width: 640px) {
    align-items: flex-start;

    > div:first-child {
      top: 3px;
    }
  }
`;
