import styled from 'styled-components'
import theme from '@/styles/theme'

export const ProfileCardItem = styled.div`
  position: relative;
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
  padding-bottom: 20px;

  &:hover .photo {
    filter: brightness( 110% ) contrast( 100% ) saturate( 0% ) blur( 0px ) hue-rotate( 0deg );
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
  padding-bottom: 87%;
  width: 100%;

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
    filter: brightness( 100% ) contrast( 100% ) saturate( 100% ) blur( 0px ) hue-rotate( 0deg );
    transition: filter 0.2s;
  }
`;

export const Name = styled.h3`
  position: relative;
  z-index: 2;
  text-align: center;
  font-size: 20px;
  margin: 10px 0 0;
`;

export const More = styled.div`
  display: flex;
  gap: 10px;
  font-size: 18px;
`;

export const Icon = styled.div`
  width: 20px;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 0;
`;
