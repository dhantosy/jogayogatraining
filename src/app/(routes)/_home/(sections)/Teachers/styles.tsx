import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  padding: 160px 0 100px;

  @media screen and (max-width: 1024px) {
    padding: 100px 0 60px;
  }
`;

export const Heading = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 500;
  margin: 0;
  color: ${theme.colors.pinkMain};

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  max-width: 800px;
  margin: 15px auto;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    margin: 25px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 60px;
  margin: 60px 0 0;
  position: relative;
  z-index: 2;

  & > div {
    flex: 1;
  }
`;

export const ContentHeading = styled.div`
  margin: 0 0 20px;
  font-size: 20px;
  font-weight: 500;
`;

export const ContentItem = styled.div`
  position: relative;
  z-index: 2;
  cursor: pointer;

  &:hover .photo {
    filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
  }

  &:hover > .image-wrapper {

    &:after {
      background-color: ${theme.colors.tealMain};
    }
  }
`;

export const ImageWrapper = styled.div`
  display: inline-flex;
  position: relative;
  z-index: 2;
  border-radius: 20px;
  overflow: hidden;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: 100%;
    height: 80%;
    left: 0;
    bottom: 0;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }

  & > .photo {
    z-index: 3;
    filter: brightness( 110% ) contrast( 100% ) saturate( 0% ) blur( 0px ) hue-rotate( 0deg );
    transition: filter 0.2s;
  }
`;

export const Name = styled.h3`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 20px;
  margin: 10px 0;
`;

export const More = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const Icon = styled.div`
  width: 20px;
`;
