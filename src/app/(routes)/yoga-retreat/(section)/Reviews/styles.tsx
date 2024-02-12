import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 0 0 60px;

  @media screen and (max-width: 1024px) {
    padding: 20px 0 40px;
  }
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  position: relative;
  display: inline-block;
  line-height: 1;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 45px 0 0;
`;

export const Source = styled.p`
  font-size: 14px;
  font-style: italic;
`;

export const Rating = styled.div`
  display: flex;
  gap: 3px;
  width: 130px;
  margin: 20px 0 10px;
  color: ${theme.colors.orange};
`;

export const BoxContainer = styled.div`
  margin: 60px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 1024px) {
    margin: 30px 0 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 370px;
    height: 130px;
    right: -320px;
    top: 50px;
    opacity: 0.2;
    border-radius: 15px;

    @media screen and (max-width: 1024px) {
      width: 170%;
      height: calc(100% + 30px);
      left: 0;
      top: 110px;
    }
  }

  & > .image {
    z-index: 3;
  }
`;

export const Top = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-end;
  margin-bottom: 30px;

  > * div {
    flex: 1;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;

    .info {
      padding-left: 20px;
    }
  }
`;

export const More = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const Icon = styled.div`
  width: 20px;
`;

export const ImageWrapperInner = styled.div`
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  padding-bottom: 100%;
  width: 150px;
  z-index: 2;
`;

