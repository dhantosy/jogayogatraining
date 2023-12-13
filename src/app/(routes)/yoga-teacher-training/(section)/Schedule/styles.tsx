import styled from 'styled-components'
import theme from '@/styles/theme'

export const Section = styled.section`
  margin: 0 auto 120px;
  position: relative;
  z-index: 2;
  max-width: 900px;

  &:after {
    content: '';
    background-color: ${theme.colors.orange};
    position: absolute;
    width: calc(100% + 50px);
    height: 100%;
    left: -25px;
    top: 35px;
    opacity: 0.2;
    border-radius: 20px;
    overflow: hidden;
  }
`;

export const Heading = styled.div`
  margin: 0 0 20px;
  position: relative;
  z-index: 2;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0 0 20px;
  color: ${theme.colors.pinkMain};
  font-size: 36px;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

export const Subtitle = styled.p`
  position: relative;
  z-index: 2;
`;

export const TableSchedule = styled.div`
  max-width: 480px;
  margin: 20px auto;
  position: relative;
  z-index: 2;
`;

export const TableScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 15px;
  font-weight: 500;
  border-bottom: 1px solid ${theme.colors.backgroundMint};

  &:last-child {
    border-bottom: none;
  }
`;
