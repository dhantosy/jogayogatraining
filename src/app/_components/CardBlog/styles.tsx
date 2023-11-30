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

export const ImageWrapper = styled.div`
  position: relative;
  z-index: 3;
  overflow: hidden;
  padding-bottom: 50%;
  width: 100%;
`;

export const Card = styled.div`
  border-radius: 20px;
  overflow: hidden;
`;

export const CardTop = styled.div`

`;

export const CardContent = styled.div`
  padding: 30px 40px;
  background-color: ${theme.colors.backgroundPink};
`;

export const CardTitle = styled.h3`
  margin: 0 0 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 56px;
`;

export const CardDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardMore = styled.div`
  padding: 10px 20px;
  color: ${theme.colors.backgroundMint};
  background-color: ${theme.colors.tealMain};
  margin: 30px 0 0 0;
  font-weight: 500;
  max-width: 130px;
  border-radius: 20px;
`;
